import { ConvertClientsidePage } from './app.po';

describe('convert-clientside App', function() {
  let page: ConvertClientsidePage;

  beforeEach(() => {
    page = new ConvertClientsidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
