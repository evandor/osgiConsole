import { OsgiConsole2Page } from './app.po';

describe('osgi-console2 App', () => {
  let page: OsgiConsole2Page;

  beforeEach(() => {
    page = new OsgiConsole2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
