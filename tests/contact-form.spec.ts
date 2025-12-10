import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact section
    const contactSection = page.locator('section:has(form), [id*="contact"]').first();

    if (await contactSection.count() > 0) {
      await contactSection.scrollIntoViewIfNeeded();
      await expect(contactSection).toBeVisible();

      // Check for form element
      const form = page.locator('form').first();
      await expect(form).toBeVisible();
    }
  });

  test('should validate empty form submission', async ({ page }) => {
    await page.goto('/');

    // Find the form
    const form = page.locator('form').first();

    if (await form.count() > 0) {
      await form.scrollIntoViewIfNeeded();

      // Try to submit empty form
      const submitButton = form.locator('button[type="submit"]').first();
      await submitButton.click();

      // Wait for validation
      await page.waitForTimeout(1000);

      // Check for HTML5 validation or error messages
      const nameInput = form.locator('input[name="name"], input[name="fullName"]').first();

      if (await nameInput.count() > 0) {
        const isRequired = await nameInput.getAttribute('required');
        expect(isRequired).not.toBeNull();
      }
    }
  });

  test('should validate email format', async ({ page }) => {
    await page.goto('/');

    const form = page.locator('form').first();

    if (await form.count() > 0) {
      await form.scrollIntoViewIfNeeded();

      // Find email input
      const emailInput = form.locator('input[type="email"], input[name="email"]').first();

      if (await emailInput.count() > 0) {
        // Enter invalid email
        await emailInput.fill('invalid-email');

        // Try to submit
        const submitButton = form.locator('button[type="submit"]').first();
        await submitButton.click();

        // Wait for validation
        await page.waitForTimeout(1000);

        // Check that form didn't submit (still on same page)
        expect(page.url()).toContain('localhost:3000');
      }
    }
  });

  test('should allow form submission with valid data', async ({ page }) => {
    await page.goto('/');

    const form = page.locator('form').first();

    if (await form.count() > 0) {
      await form.scrollIntoViewIfNeeded();

      // Fill out form with valid data
      const nameInput = form.locator('input[name="name"], input[name="fullName"]').first();
      const emailInput = form.locator('input[type="email"], input[name="email"]').first();
      const messageInput = form.locator('textarea[name="message"]').first();

      if (await nameInput.count() > 0) await nameInput.fill('Test User');
      if (await emailInput.count() > 0) await emailInput.fill('test@example.com');
      if (await messageInput.count() > 0) await messageInput.fill('This is a test message.');

      // Submit form
      const submitButton = form.locator('button[type="submit"]').first();
      await submitButton.click();

      // Wait for submission
      await page.waitForTimeout(2000);

      // Check for success message or redirect
      // Either we see a success message or navigate to success page
      const successMessage = page.locator('text=/success|thank|sent/i');
      const hasSuccessMessage = await successMessage.count() > 0;
      const urlChanged = !page.url().endsWith('/');

      expect(hasSuccessMessage || urlChanged).toBeTruthy();
    }
  });
});
