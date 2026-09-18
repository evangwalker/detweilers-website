import { test, expect } from '@playwright/test';

test('submits booking form with correct data', async ({ page }) => {
  await page.goto('/');

  await page
    .getByRole('link', { name: 'Book Us' })
    .click();

  // Intercept Formspree and fake a successful response
  await page.route('https://formspree.io/f/mqpkzbdb', async route => {
    await route.fulfill({
      status: 200,
    });
  });

  await page.getByLabel('Name').fill('Evan Walker');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Message').fill('Please play Free Bird.');

  // Start listening BEFORE clicking Send
  const requestPromise = page.waitForRequest(
    'https://formspree.io/f/mqpkzbdb'
  );

  await page.getByRole('button', { name: 'Send' }).click();

  // Wait until that request actually happens
  const request = await requestPromise;

  expect(request.method()).toBe('POST');

  const postData = request.postDataJSON();

  expect(postData.name).toBe('Evan Walker');
  expect(postData.email).toBe('test@example.com');
  expect(postData.message).toBe('Please play Free Bird.');
});

type NegativeTestCase = {
    field: string;
    name: string;
    email: string;
    message: string;
}

const negativeFormCases: NegativeTestCase[] = [
    {
      field: 'name',
      name: '', 
      email: 'test@example.com', 
      message: 'Please play Free Bird.' 
    },
    { 
      field: 'email',
      name: 'Evan Walker', 
      email: '', 
      message: 'Please play Free Bird.' 
    },
    { 
      field: 'message',
      name: 'Evan Walker', 
      email: 'test@example.com', 
      message: '' 
    },
]

for (const empty of negativeFormCases) {
    test(`does not submit booking form with missing ${empty.field}`, async ({ page }) => {
      await page.goto('/');

      await page
        .getByRole('link', { name: 'Book Us' })
        .click();

      let requestWasMade = false;
    
      await page.route('https://formspree.io/f/mqpkzbdb', async route => {
        requestWasMade = true;
        await route.abort();
      });

      await page.getByLabel('Name').fill(empty.name);
      await page.getByLabel('Email').fill(empty.email);
      await page.getByLabel('Message').fill(empty.message);

      await page.getByRole('button', { name: 'Send' }).click();

      const fieldLabel =
        empty.field.charAt(0).toUpperCase() + empty.field.slice(1);

      const fieldIsValid = await page
        .getByLabel(fieldLabel)
        .evaluate(input => (input as HTMLInputElement).validity.valid);

      expect(fieldIsValid).toBe(false);
      expect(requestWasMade).toBe(false);
    });
}

test('does not submit booking form with incorrect email formatting', async ({ page }) => {
  await page.goto('/');

  await page
    .getByRole('link', { name: 'Book Us' })
    .click();
 
  let requestWasMade = false;
    
  await page.route('https://formspree.io/f/mqpkzbdb', async route => {
    requestWasMade = true;
    await route.abort();
  });

  await page.getByLabel('Name').fill('Evan Walker');
  await page.getByLabel('Email').fill('this isnt an email');
  await page.getByLabel('Message').fill('Please play Free Bird.');

  await page.getByRole('button', { name: 'Send' }).click();

  const emailIsValid = await page
    .getByLabel('Email')
    .evaluate(input => (input as HTMLInputElement).validity.valid);

  expect(emailIsValid).toBe(false);
  expect(requestWasMade).toBe(false);
});