import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Main } from './main';

describe('Given "Header" component', () => {
  const main = new Main('slot');
  test('Then we should to be able to instantiate it', () => {
    expect(main).toBeInstanceOf(Main);
  });
});
