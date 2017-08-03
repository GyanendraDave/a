import { Myapp2Page } from './app.po';

describe('myapp2 App', () => {
  let page: Myapp2Page;

  beforeEach(() => {
    page = new Myapp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
