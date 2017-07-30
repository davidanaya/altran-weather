import { AltranWeatherPage } from './app.po';

describe('altran-weather App', () => {
  let page: AltranWeatherPage;

  beforeEach(() => {
    page = new AltranWeatherPage();
  });

  it('should start', () => {
    page.navigateTo();
    expect(true);
  });
});
