import { _electron as electron } from 'playwright';
import { test, expect, ElectronApplication, Page } from '@playwright/test';

test.describe('Add Connection', async () => {
  let electronApp;
  let firstWindow;

  test.beforeAll(async () => {
    electronApp = await electron.launch({
      args: ['.'],
      // webPreferences: {
      //   fuses: {
      //     EnableNodeCliInspectArguments: true,
      //   },
      // },
    });
    firstWindow = await electronApp.firstWindow();
  });

  test('Try Connection', async () => {
    await firstWindow;
    // Rest of your test code...
  });

  test.afterAll(async () => {
    await electronApp.close();
  });
});