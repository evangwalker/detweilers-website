import { test, expect } from '@playwright/test';

type ViewportCase = {
  width: number;
  mode: 'mobile' | 'desktop';
};

const viewportCases: ViewportCase[] = [

    { 
      width: 599, 
      mode: 'mobile'
    },
    { 
      width: 600, 
      mode: 'mobile'
    },
    {
      width: 601,
      mode: 'desktop'
    }
];

for (const viewport of viewportCases) {

  test(`has hamburger menu at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: 800,
    });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: 'Open navigation' });

    if (viewport.mode === 'mobile') {
        await expect(menuButton).toBeVisible();
    } else {
        await expect(menuButton).not.toBeVisible();
    }
  });
}