const { $ } = require('@wdio/globals')
const Page = require('./page');

class UsersPage extends Page {
  get loadingTitle() {
    return $('#users-loading')
  }

  get list() {
    return $('#users-list');
  }

  get userItems() {
    return $('#root').react$$('User');
  }

  async loadData() {
    try {
      await this.open()
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 })
      await this.list.waitForDisplayed({ timeout: 10000 })
    } catch (error) {
      throw new Error('loading error' + error)
    }
  }

  async delete() {
    try {
      const users = await this.userItems
      const userCount = users.length

      if (userCount < 2) {
        throw new Error('users empty')
      }

      await users[0].$('#user-delete').click() // in case with 1th deleting $('#root')?.react$$('User') is resulting to null alements - it's a bug????
      await users[1].$('#user-delete').click()

      const newUsers = await $('#root')?.react$$('User')
      // console.log(`================= newUsers.length`, newUsers?.length);

      if (userCount - newUsers.length !== 2) {
        throw new Error('error delete 0 elem')
      }
    } catch (error) {
      throw new Error('deleting error' + error)
    }
  }

  open() {
    return super.open('users-test');
  }
}

module.exports = new UsersPage();
