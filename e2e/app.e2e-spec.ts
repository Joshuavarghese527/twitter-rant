import { TweetstormPage } from './app.po';

describe('tweetstorm App', () => {
  let page: TweetstormPage;

  beforeEach(() => {
    page = new TweetstormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
