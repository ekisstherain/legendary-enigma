import { RealAppPage } from './app.po';

describe('real-app App', () => {
  let page: RealAppPage;

  beforeEach(() => {
    page = new RealAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
