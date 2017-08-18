import { PlatziOverflowCursoPage } from './app.po';

describe('platzi-overflow-curso App', () => {
  let page: PlatziOverflowCursoPage;

  beforeEach(() => {
    page = new PlatziOverflowCursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
