import { test, expect } from '@playwright/test';

test.describe('Content Verification', () => {
  test('should not contain "YK Innovations" text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all text content
    const bodyText = await page.locator('body').textContent();

    // Check for YK Innovations (case insensitive)
    const hasYKInnovations = bodyText?.toLowerCase().includes('yk innovations');
    expect(hasYKInnovations).toBeFalsy();
  });

  test('should not contain "mechanical engineering" text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    const hasMechanicalEngineering = bodyText?.toLowerCase().includes('mechanical engineering');
    expect(hasMechanicalEngineering).toBeFalsy();
  });

  test('should not contain "prototyping" text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    const hasPrototyping = bodyText?.toLowerCase().includes('prototyping');
    expect(hasPrototyping).toBeFalsy();
  });

  test('should not contain "CAD" or "SolidWorks" text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    const hasCAD = bodyText?.toLowerCase().includes('cad');
    const hasSolidWorks = bodyText?.toLowerCase().includes('solidworks');

    expect(hasCAD).toBeFalsy();
    expect(hasSolidWorks).toBeFalsy();
  });

  test('should not contain "3D printing" or "CNC" text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    const has3DPrinting = bodyText?.toLowerCase().includes('3d printing');
    const hasCNC = bodyText?.toLowerCase().includes('cnc');

    expect(has3DPrinting).toBeFalsy();
    expect(hasCNC).toBeFalsy();
  });

  test('should contain "Acme Corporation" text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    const hasAcmeCorp = bodyText?.toLowerCase().includes('acme corporation');
    expect(hasAcmeCorp).toBeTruthy();
  });

  test('should have correct logo alt text', async ({ page }) => {
    await page.goto('/');

    const logo = page.locator('img').first();
    const altText = await logo.getAttribute('alt');

    expect(altText?.toLowerCase()).toContain('acme corporation');
  });

  test('should have updated page title', async ({ page }) => {
    await page.goto('/');

    const title = await page.title();
    expect(title.toLowerCase()).toContain('acme corporation');
  });

  test('should not contain old branding in projects page', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    const bodyText = await page.locator('body').textContent();
    const hasYKInnovations = bodyText?.toLowerCase().includes('yk innovations');
    const hasMechanicalEngineering = bodyText?.toLowerCase().includes('mechanical engineering');

    expect(hasYKInnovations).toBeFalsy();
    expect(hasMechanicalEngineering).toBeFalsy();
  });

  test('should use picsum.photos for images', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all image sources
    const images = page.locator('img');
    const imageCount = await images.count();

    let hasPicsumImages = false;

    for (let i = 0; i < imageCount; i++) {
      const src = await images.nth(i).getAttribute('src');
      if (src?.includes('picsum.photos')) {
        hasPicsumImages = true;
        break;
      }
    }

    // Should have at least some picsum.photos images
    expect(hasPicsumImages).toBeTruthy();
  });
});
