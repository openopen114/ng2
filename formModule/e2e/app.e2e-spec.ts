import { FormModulePage } from './app.po';

describe('form-module App', function() {
  let page: FormModulePage;

  beforeEach(() => {
    page = new FormModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
