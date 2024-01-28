import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['line'], ['allure-playwright']],
  globalSetup: require.resolve('./utils/global-setup'),

  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://practice.sdetunicorns.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    trace: 'retain-on-failure',
    storageState: 'loggedInState.json'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
      },
    }
    /*,
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    
    },
 */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],
};

export default config;
