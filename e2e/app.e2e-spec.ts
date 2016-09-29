import { OsgiConsolePage } from './app.po';

describe('osgi-console App', function() {
  let page: OsgiConsolePage;

  beforeEach(() => {
    page = new OsgiConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
