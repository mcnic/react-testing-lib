const usersPage = require('../pageobjects/users.page')

describe('Users', () => {
    // it('loading', async () => {
    //     await usersPage.loadData()
    // })

    it('deleting', async () => {
        await usersPage.loadData()
        await usersPage.delete()
    })
})

