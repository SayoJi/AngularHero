import { HeroDemoPage } from './app.po';

describe('hero-demo App', () => {
  let page: HeroDemoPage;

  beforeEach(() => {
    page = new HeroDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
