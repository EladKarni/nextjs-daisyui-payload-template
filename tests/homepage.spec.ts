import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Check that page loaded successfully
    await expect(page).toHaveTitle(/Acme Corporation/i);

    // Verify no console errors (excluding known safe warnings)
    const criticalErrors = errors.filter(err =>
      !err.includes('DevTools') &&
      !err.includes('Extension')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('should render all main sections', async ({ page }) => {
    await page.goto('/');

    // Check Hero section
    await expect(page.locator('section').first()).toBeVisible();

    // Check for main content sections by looking for section containers
    const sections = page.locator('section');
    const sectionCount = await sections.count();

    // Should have multiple sections (Hero, About, Services, Process, Projects, Contact, etc.)
    expect(sectionCount).toBeGreaterThan(4);
  });

  test('should load all images successfully', async ({ page }) => {
    const imageErrors: string[] = [];

    page.on('response', response => {
      if (response.request().resourceType() === 'image' && !response.ok()) {
        imageErrors.push(`Failed to load: ${response.url()}`);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait a bit for lazy-loaded images
    await page.waitForTimeout(2000);

    // Check that images are present
    const images = page.locator('img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);

    // Verify no image load errors
    expect(imageErrors).toHaveLength(0);
  });

  test('should display hero section with correct content', async ({ page }) => {
    await page.goto('/');

    // Check for hero content (title, description, CTAs)
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // Check for CTA buttons
    const buttons = heroSection.locator('a, button');
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });

  test('should display logo', async ({ page }) => {
    await page.goto('/');

    // Check for logo in navbar
    const logo = page.locator('img[alt*="Acme Corporation"]').first();
    await expect(logo).toBeVisible();
  });
});
