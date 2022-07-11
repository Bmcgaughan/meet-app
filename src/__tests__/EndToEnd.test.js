import puppeteer from 'puppeteer';

import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('show/hide an event details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({
    //     headless: false,
    //     slowMo: 250, // slow down by 250ms
    //    ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    //   });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .description');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-button');
    const eventDetails = await page.$('.event .description');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .show-button');
    const eventDetails = await page.$('.event .description');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({
    //     headless: false,
    //     slowMo: 250, // slow down by 250ms
    //    ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    //   });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('all events are displayed by default on page load', async () => {
    const eventCount = await page.$$('.event');
    expect(eventCount).toHaveLength(mockData.length);
  });

  test('user can filter events by city', async () => {
    await page.type('.city', 'Berlin');
    await page.waitForSelector('.suggestions li')[0];
    await page.click('.suggestions li');

    const eventCount = await page.$$('.event');
    expect(eventCount).toHaveLength(1);
  });
});

describe('update number of events to display', async () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({
    //     headless: false,
    //     slowMo: 250, // slow down by 250ms
    //    ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    //   });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });
  test('default number of events to display is 32', async () => {
    const eventCount = await page.$$('.event');
    const eventCompare = mockData.length > 32 ? 32 : mockData.length;
    expect(eventCount).toHaveLength(eventCompare);
  });

  test('user can change number of events to display', async () => {
    const input = await page.$('.event-input');
    await input.click({ clickCount: 3 });
    await page.type('.event-input', '1');
    await page.waitForSelector('.event');
    const eventCount = await page.$$('.event');
    expect(eventCount).toHaveLength(1);
  });
});
