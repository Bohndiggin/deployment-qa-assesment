
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button shows up when page loads', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    const displayed = await drawButton.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button shows up when page loads', async () => {
    const clickButton = await driver.findElement(By.id('draw')).click()
    const change = await driver.findElement(By.id('choices'))
    const displayed = await change.isDisplayed()
    expect(displayed).toBe(true)
})