import { test, expect } from '@playwright/test';

test.describe('Projects', () => {
  test('should load projects page', async ({ page }) => {
    await page.goto('/projects');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Verify page loaded
    expect(page.url()).toContain('/projects');

    // Check for page title or heading
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });

  test('should display project cards on homepage', async ({ page }) => {
    await page.goto('/');

    // Look for projects section
    const projectsSection = page.locator('section:has([class*="project"]), [id*="project"]').first();

    if (await projectsSection.count() > 0) {
      await projectsSection.scrollIntoViewIfNeeded();

      // Look for project cards/items
      const projectCards = page.locator('[class*="project"]').filter({ hasText: /.+/ });
      const cardCount = await projectCards.count();

      // Should have at least one project
      expect(cardCount).toBeGreaterThan(0);
    }
  });

  test('should navigate to individual project page', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    // Find first project link/card
    const projectLink = page.locator('a[href*="/projects/"]').first();

    if (await projectLink.count() > 0) {
      await projectLink.click();

      // Wait for navigation
      await page.waitForLoadState('networkidle');

      // Verify we're on a project detail page
      expect(page.url()).toMatch(/\/projects\/.+/);

      // Check for project content
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible();
    }
  });

  test('should load project images', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    const imageErrors: string[] = [];

    page.on('response', response => {
      if (response.request().resourceType() === 'image' && !response.ok()) {
        imageErrors.push(`Failed to load: ${response.url()}`);
      }
    });

    // Wait for images to load
    await page.waitForTimeout(2000);

    // Check for images
    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      // Verify no image errors
      expect(imageErrors).toHaveLength(0);
    }
  });

  test('should display project metadata', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    // Click on first project if available
    const projectLink = page.locator('a[href*="/projects/"]').first();

    if (await projectLink.count() > 0) {
      await projectLink.click();
      await page.waitForLoadState('networkidle');

      // Check for project details (title, description, etc.)
      const title = page.locator('h1, h2').first();
      await expect(title).toBeVisible();

      const content = page.locator('p, div').filter({ hasText: /.{10,}/ }).first();
      await expect(content).toBeVisible();
    }
  });
});
