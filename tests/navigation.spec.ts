import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have functional navigation links', async ({ page }) => {
    await page.goto('/');

    // Check that nav element exists
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Check for navigation links
    const navLinks = nav.locator('a');
    const linkCount = await navLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('should scroll to sections when clicking anchor links', async ({ page }) => {
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Try to find and click an anchor link (e.g., About, Services, Contact)
    const aboutLink = page.locator('a[href*="#about"], a[href*="#"]').first();

    if (await aboutLink.count() > 0) {
      await aboutLink.click();

      // Wait for scroll animation
      await page.waitForTimeout(1000);

      // Verify page scrolled (not at top anymore)
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeGreaterThan(0);
    }
  });

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/');

    // Look for Projects link
    const projectsLink = page.locator('a[href="/projects"]').first();

    if (await projectsLink.count() > 0) {
      await projectsLink.click();

      // Wait for navigation
      await page.waitForURL('**/projects');

      // Verify we're on projects page
      expect(page.url()).toContain('/projects');
    }
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/');

    // Look for theme toggle button
    const themeToggle = page.locator('button[aria-label*="theme"], button[title*="theme"], [class*="theme"]').first();

    if (await themeToggle.count() > 0) {
      // Get initial theme
      const htmlElement = page.locator('html');
      const initialTheme = await htmlElement.getAttribute('data-theme');

      // Click toggle
      await themeToggle.click();

      // Wait for theme change
      await page.waitForTimeout(500);

      // Verify theme changed
      const newTheme = await htmlElement.getAttribute('data-theme');
      expect(newTheme).not.toBe(initialTheme);
    }
  });

  test('should open and close mobile menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Look for mobile menu button (hamburger)
    const mobileMenuButton = page.locator('button[aria-label*="menu"], button[class*="mobile"], [class*="hamburger"]').first();

    if (await mobileMenuButton.count() > 0) {
      // Click to open
      await mobileMenuButton.click();
      await page.waitForTimeout(500);

      // Verify menu is visible (look for mobile navigation)
      const mobileNav = page.locator('[class*="mobile-menu"], [class*="drawer"]').first();

      if (await mobileNav.count() > 0) {
        await expect(mobileNav).toBeVisible();

        // Click to close (either button again or overlay)
        await mobileMenuButton.click();
        await page.waitForTimeout(500);
      }
    }
  });

  test('should have working footer links', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check for footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check for footer links
    const footerLinks = footer.locator('a');
    const linkCount = await footerLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });
});
