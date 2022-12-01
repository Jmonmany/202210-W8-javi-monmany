import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { App } from './app';

describe('Given "Header" component', () => {
  const app = new App();
  test('Then we should to be able to instantiate it', () => {
    expect(app).toBeInstanceOf(App);
  });
});
