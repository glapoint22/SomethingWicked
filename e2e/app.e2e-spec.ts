import { SomethingWickedPage } from './app.po';

describe('something-wicked App', () => {
  let page: SomethingWickedPage;

  beforeEach(() => {
    page = new SomethingWickedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
