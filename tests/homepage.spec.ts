import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/detweilers_website/);
});

test('has gig information', async ({ page }) => {
  await page.goto('/');

  const upcomingShows = page.locator('#upcoming-shows');
  const showPoster = upcomingShows.locator('.show-poster');

  if (await showPoster.count() > 0) {
    await expect(showPoster.first()).toBeVisible();
  } else {
      await expect(
      upcomingShows.getByText('Check back soon!')
      ).toBeVisible();
    }
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/detweilers_website/);
});

test('instagram link works', async ({ page }) => {
  await page.goto('/');

  const newPagePromise = page.waitForEvent('popup');

  await page
    .getByRole('link', { name: 'The Detweilers on Instagram' })
    .click();

  const instagramPage = await newPagePromise;

  await expect(instagramPage).toHaveURL(
    'https://www.instagram.com/thedetweilers/'
  )
});
