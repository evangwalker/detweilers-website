import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    width: 375,
    height: 667,
  },
});

type NavigationCase = {
    linkName: string;
    expectedPath: string;
}

const navigationCases: NavigationCase[] = [

    { linkName: 'Gallery', 
      expectedPath: '/gallery' 
    },
    { linkName: 'Gigs of yore', 
      expectedPath: '/posters' 
    },
];

for (const navigation of navigationCases) {
    test(`navigates to ${navigation.linkName}`, async ({ page }) => {
      await page.goto('/');

      await page
        .getByRole('button', { name: 'Open navigation' })
        .click();

      await page
        .getByRole('link', { name: navigation.linkName })
        .click();
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveURL(
        new RegExp(`${navigation.expectedPath}$`)
      );
    });
}