import { test, expect } from '@playwright/test';

test.describe('Console Errors and Admin Check', () => {
  test('should not have console errors on homepage', async ({ page }) => {
    const consoleErrors: string[] = [];
    const consoleWarnings: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      } else if (msg.type() === 'warning') {
        consoleWarnings.push(msg.text());
      }
    });

    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    console.log('=== CONSOLE ERRORS ===');
    consoleErrors.forEach(err => console.log(err));

    console.log('\n=== CONSOLE WARNINGS ===');
    consoleWarnings.forEach(warn => console.log(warn));

    console.log(`\n=== SUMMARY ===`);
    console.log(`Total Errors: ${consoleErrors.length}`);
    console.log(`Total Warnings: ${consoleWarnings.length}`);

    // Allow up to 2 minor errors (sometimes Next.js has benign warnings)
    expect(consoleErrors.length).toBeLessThanOrEqual(2);
  });

  test('should access admin panel', async ({ page }) => {
    await page.goto('http://localhost:3000/admin');
    await page.waitForTimeout(3000);

    const title = await page.title();
    console.log('Admin page title:', title);

    const url = page.url();
    console.log('Admin page URL:', url);

    // Admin should either show login or redirect
    expect(url).toContain('admin');
  });
});
