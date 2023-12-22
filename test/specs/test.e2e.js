const { expect } = require('@wdio/globals')
const helloPage = require('../pageobjects/hello.page')

describe('Hello World', () => {
    it('helloWorld page', async () => {
        await helloPage.open()

        await helloPage.setSearchStrAndClick('123')
        await expect(helloPage.header).not.toBeExisting()

        await helloPage.setSearchStrAndClick('hello')
        await expect(helloPage.header).toBeExisting()
    })
})

