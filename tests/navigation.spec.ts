import { test, expect } from '@playwright/test';

type NavigationCase = {
    linkName: string;
    expectedPath: string;
}

const navigationCases: NavigationCase[] = [

    { linkName: 'The Detweilers', 
      expectedPath: '/' 
    },
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
        .getByRole('link', { name: navigation.linkName,
                             exact: true 
         })
        .click();
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveURL(
        new RegExp(`${navigation.expectedPath}$`)
      );
    });
}