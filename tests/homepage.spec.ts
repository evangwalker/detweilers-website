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

test('instagram link points to The Detweilers Instagram', async ({ page }) => {
  await page.goto('/');

  const instagramLink = page.getByRole('link', {
    name: 'The Detweilers on Instagram'
  });

  await expect(instagramLink).toHaveAttribute(
    'href',
    'https://www.instagram.com/thedetweilers/'
  );

  await expect(instagramLink).toHaveAttribute(
    'target',
    '_blank'
  );
});
