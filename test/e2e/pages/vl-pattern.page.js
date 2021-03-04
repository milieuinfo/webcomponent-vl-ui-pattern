const {Page, Config} = require('vl-ui-core').Test;
const {VlInputField} = require('vl-ui-input-field').Test;
const vlPattern = require('../components/vl-pattern');

class VlPatternPage extends Page {
  async getIBANInput() {
    return this._getInput('iban');
  }

  async getPhoneInput() {
    return this._getInput('phone');
  }

  async getDateInput() {
    return this._getInput('date');
  }

  async getPriceInput() {
    return this._getInput('price');
  }

  async getRRNInput() {
    return this._getInput('rrn');
  }

  async getUuidInput() {
    return this._getInput('uuid');
  }

  async load() {
    await super.load(`${Config.baseUrl}/demo/vl-pattern.html`);
  }

  async _getInput(selector) {
    const input = await new VlInputField(this.driver, `#pattern-${selector}`);
    Object.assign(input, vlPattern);
    return input;
  }
}

module.exports = VlPatternPage;
