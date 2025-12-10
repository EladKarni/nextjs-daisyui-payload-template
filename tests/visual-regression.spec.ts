import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('should match navbar screenshot in light mode', async ({ page }) => {
    await page.goto('/');

    // Ensure light mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });

    await page.waitForTimeout(500);

    // Take screenshot of navbar
    const navbar = page.locator('nav').first();
    await expect(navbar).toHaveScreenshot('navbar-light.png', {
      maxDiffPixels: 100,
    });
  });

  test('should match navbar screenshot in dark mode', async ({ page }) => {
    await page.goto('/');

    // Ensure dark mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });

    await page.waitForTimeout(500);

    // Take screenshot of navbar
    const navbar = page.locator('nav').first();
    await expect(navbar).toHaveScreenshot('navbar-dark.png', {
      maxDiffPixels: 100,
    });
  });

  test('should match footer screenshot', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('footer.png', {
      maxDiffPixels: 100,
    });
  });

  test('should match hero section screenshot', async ({ page }) => {
    await page.goto('/');

    // Take screenshot of hero section
    const hero = page.locator('section').first();
    await expect(hero).toHaveScreenshot('hero-section.png', {
      maxDiffPixels: 200,
    });
  });

  test('should match mobile viewport screenshot', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    // Take full page screenshot
    await expect(page).toHaveScreenshot('mobile-homepage.png', {
      fullPage: true,
      maxDiffPixels: 500,
    });
  });

  test('should verify logo displays correctly', async ({ page }) => {
    await page.goto('/');

    // Check logo in navbar
    const logo = page.locator('img[alt*="Acme Corporation"]').first();
    await expect(logo).toBeVisible();

    // Take screenshot of logo
    await expect(logo).toHaveScreenshot('logo.png', {
      maxDiffPixels: 50,
    });
  });

  test('should match desktop homepage screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    // Take full page screenshot
    await expect(page).toHaveScreenshot('desktop-homepage.png', {
      fullPage: true,
      maxDiffPixels: 1000,
    });
  });
});
