import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Posters', path: '/posters' },
];

for (const { name, path } of pages) {
  test(`${name} page has no detectable WCAG A/AA violations`, async ({ page, browserName }) => {
    // One browser is enough for axe; skip the others to keep CI fast
    test.skip(browserName !== 'chromium', 'axe scan runs in Chromium only');

    await page.goto(path);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .exclude('iframe') // third-party YouTube embeds aren't ours to fix
      .analyze();

    expect(results.violations).toEqual([]);
  });
}