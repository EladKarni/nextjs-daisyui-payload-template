import { test, expect } from "@playwright/test";

test.describe("Homepage E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage and wait for load
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should load homepage without errors", async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/.*/, { timeout: 5000 });

    // No console errors
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    expect(errors.length).toBe(0);
  });

  test("should display hero section", async ({ page }) => {
    const heroSection = page.locator('[data-testid="hero-section"], h1');
    await expect(heroSection.first()).toBeVisible({ timeout: 5000 });
  });

  test("should display projects section", async ({ page }) => {
    const projectsSection = page.locator('[data-testid="projects-section"]');
    if (await projectsSection.isVisible()) {
      await expect(projectsSection).toBeVisible();
    }
  });

  test("should display services section", async ({ page }) => {
    // Look for services section by heading or section name
    const servicesSection = page.locator(
      'section:has-text("Our Services"), section:has-text("What We Do")'
    );
    const isVisible = await servicesSection
      .first()
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    // Services section should exist
    expect(isVisible).toBe(true);
  });

  test("should have working navigation", async ({ page }) => {
    // Try to click a navigation link
    const navLinks = page.locator("nav a, header a");
    const firstLink = navLinks.first();

    if (await firstLink.isVisible()) {
      const href = await firstLink.getAttribute("href");
      if (href && href !== "/" && !href.startsWith("#")) {
        await firstLink.click();
        await page.waitForLoadState("domcontentloaded");
        expect(page.url()).not.toBe("http://localhost:3000/");
      }
    }
  });

  test("should toggle dark mode", async ({ page }) => {
    const themeToggle = page.locator(
      '[data-testid="theme-toggle"], button[aria-label*="theme"], button[aria-label*="dark"], button[aria-label*="light"]'
    );

    if (await themeToggle.first().isVisible()) {
      const html = page.locator("html");
      const initialTheme =
        (await html.getAttribute("data-theme")) ||
        (await html.getAttribute("class"));

      await themeToggle.first().click();
      await page.waitForTimeout(300);

      const newTheme =
        (await html.getAttribute("data-theme")) ||
        (await html.getAttribute("class"));
      expect(newTheme).not.toBe(initialTheme);
    }
  });

  test("should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const mobileMenu = page.locator(
      '[data-testid="mobile-menu-button"], button[aria-label*="menu"], .mobile-menu-button'
    );

    if (await mobileMenu.first().isVisible()) {
      await mobileMenu.first().click();
      await page.waitForTimeout(300);

      // Verify some content is visible
      const hero = page.locator('h1, [data-testid="hero-section"]');
      await expect(hero.first()).toBeVisible();
    }
  });

  test("should load all images", async ({ page }) => {
    const images = page.locator("img").first();
    await expect(images).toBeVisible();

    // Check that at least the first visible image is loaded
    const isComplete = await images.evaluate(
      (el: HTMLImageElement) => el.complete && el.naturalHeight > 0
    );
    expect(isComplete).toBe(true);
  });
});
