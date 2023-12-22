const { $ } = require('@wdio/globals')
const Page = require('./page');

class HelloPage extends Page {
  get inputSearch() {
    return $('#search');
  }

  get btnToggle() {
    return $('#toggle');
  }

  get header() {
    return $('#hello');
  }
  async setSearchStrAndClick(str = '') {
    await this.inputSearch.setValue(str);
    await this.btnToggle.click();
  }

  open() {
    return super.open('hello');
  }
}

module.exports = new HelloPage();
