import { InputOutputPage } from './app.po';

describe('input-output App', function() {
  let page: InputOutputPage;

  beforeEach(() => {
    page = new InputOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
