import { test, expect } from "@playwright/test";
import { projects } from "../../src/content/projects";
import { tools } from "../../src/content/tools";

for (const failure of ["denied", "unavailable"] as const) {
  test(`copy email gives a visible fallback when clipboard is ${failure}`, async ({
    page,
  }) => {
    await page.addInitScript((mode) => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value:
          mode === "unavailable"
            ? undefined
            : {
                writeText: async () => {
                  throw new DOMException(
                    "Permission denied",
                    "NotAllowedError",
                  );
                },
              },
      });
    }, failure);
    await page.goto("/contact");
    await page.getByRole("button", { name: "Copy email", exact: true }).click();
    await expect(
      page.getByRole("button", { name: "Try copying again" }),
    ).toBeVisible();
    const status = page.getByRole("status");
    await expect(status).toContainText("Select the email address above");
    await expect(status).not.toHaveClass(/sr-only/);
    await expect(status).toBeInViewport();
    if (failure === "denied") {
      await page.screenshot({
        path: test.info().outputPath("clipboard-fallback.png"),
      });
    }
    await expect(
      page.getByRole("link", { name: "Write an email" }),
    ).toHaveAttribute("href", "mailto:uzairsb321@gmail.com");
  });
}

test("copy email succeeds and copies the actual address", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/contact");
  await page.getByRole("button", { name: "Copy email", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Email copied" }),
  ).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "uzairsb321@gmail.com",
  );
});

test("phone menu closes with Escape, an outside tap and navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/work");
  const trigger = page.getByRole("button", {
    name: "Open navigation",
    exact: true,
  });
  const menu = page.getByRole("navigation", { name: "Mobile navigation" });
  await trigger.click();
  await expect(menu.locator('[aria-current="page"]')).toContainText("Work");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.mouse.click(4, 750);
  await expect(menu).toHaveCount(0);
  await trigger.click();
  await menu
    .getByRole("link", { name: "About Experience & approach", exact: true })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(menu).toHaveCount(0);
});

test("project filters hide unrelated work and reset correctly", async ({
  page,
}) => {
  await page.goto("/work");
  const hestiya = page.locator('main a[href="/work/hestiya"]');
  await expect(hestiya).toBeVisible();
  await page.getByRole("button", { name: "Full-stack", exact: true }).click();
  await expect(hestiya).toBeHidden();
  await expect(
    page.locator('main a[href="/work/gaming-platform"]'),
  ).toBeVisible();
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(hestiya).toBeVisible();
});

test("gallery supports navigation, focus containment and Escape focus return", async ({
  page,
}) => {
  await page.goto("/work/bitlux");
  const trigger = page.getByRole("button", {
    name: "View image: Bitlux pending requests in a card layout",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  const close = page.getByRole("button", { name: "Close media viewer" });
  await expect(dialog).toBeVisible();
  await expect(close).toBeFocused();
  await page.getByRole("button", { name: "Next media", exact: true }).click();
  await expect(dialog).toContainText("2 of 4");
  await page.keyboard.press("ArrowLeft");
  await expect(dialog).toContainText("1 of 4");
  expect(await dialog.evaluate((node) => node.matches(":modal"))).toBe(true);
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press("Tab");
    // Chromium can focus browser chrome at the native dialog boundary,
    // exposing BODY as activeElement. The next Tab must return to the dialog.
    if (await page.evaluate(() => document.activeElement === document.body)) {
      await page.keyboard.press("Tab");
      await expect(close).toBeFocused();
    }
    expect(
      await dialog.evaluate((node) => node.contains(document.activeElement)),
    ).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  expect(
    await page.locator("body").evaluate((body) => body.style.overflow),
  ).toBe("");
});

test("Loom opens in the page without autoplay or background iframe requests", async ({
  page,
}) => {
  await page.route("https://www.loom.com/**", (route) =>
    route.fulfill({
      body: "<html><body>Local embed stub</body></html>",
      contentType: "text/html",
    }),
  );
  await page.goto("/work/get-foodies");
  await expect(page.locator("iframe")).toHaveCount(0);
  await page
    .getByRole("button", {
      name: "Get Foodies walkthrough Play video · Loom",
      exact: true,
    })
    .click();
  await expect(page.getByRole("dialog").locator("iframe")).toHaveAttribute(
    "src",
    /https:\/\/www\.loom\.com\/embed\/[a-f0-9]+\?autoplay=0$/,
  );
  await page.getByRole("button", { name: "Close media viewer" }).click();
  await expect(page.locator("iframe")).toHaveCount(0);
});

test("theme preference survives navigation and reload", async ({ page }) => {
  await page.goto("/contact");
  await page
    .getByRole("button", { name: "Switch to dark theme", exact: true })
    .click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to light theme", exact: true }),
  ).toBeEnabled();
  await page.goto("/about");
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("reduced motion disables menu and theme icon animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact");
  await page
    .getByRole("button", { name: "Switch to dark theme", exact: true })
    .click();
  const icon = page
    .getByRole("button", { name: "Switch to light theme", exact: true })
    .locator("span");
  await expect(icon).toHaveCSS("animation-name", "none");
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toHaveCSS("animation-name", "none");
});

const routes = [
  "/",
  "/work",
  "/tools",
  "/about",
  "/contact",
  ...projects.map((p) => `/work/${p.slug}`),
  ...tools.map((p) => `/tools/${p.slug}`),
];
for (const width of [320, 768, 1280]) {
  test(`all pages fit a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of routes) {
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        path,
      ).toBe(true);
    }
  });
}
