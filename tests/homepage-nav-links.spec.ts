import { test, expect } from '@playwright/test';

type NavigationCase = {
    linkName: string;
    expectedPath: string;
    targetHeading?: string;
}

type StartingPoint = {
    startingPath: string;
}

const startCases: StartingPoint[] = [
    { startingPath: '/gallery' },
    { startingPath: '/posters' },
];

const navigationCases: NavigationCase[] = [

    { linkName: 'The Detweilers', 
      expectedPath: '/' ,
    },
    { linkName: 'Showtimes', 
      expectedPath: '/#upcoming-shows' ,
      targetHeading: 'Upcoming Shows'
    },
    { linkName: 'Book Us', 
      expectedPath: '/#contact' ,
      targetHeading: 'Give us a shout!'
    },
];

for (const start of startCases) {
    for (const navigation of navigationCases) {
      test(`navigates from ${start.startingPath} to ${navigation.linkName}`, async ({ page }) => {
        await page.goto(start.startingPath);

        await page
          .getByRole('link', { name: navigation.linkName,
                               exact: true 
           })
          .click();
    
        await expect(page).toHaveURL(
          new RegExp(`${navigation.expectedPath}$`)
        );
        
        if (navigation.targetHeading) {
          await expect(
            page.getByRole('heading', { name: navigation.targetHeading })
          ).toBeInViewport();
        }
      });
    }
}