import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given "Header" component', () => {
  const header = new Header('slot');
  test('Then we should to be able to instantiate it', () => {
    expect(header).toBeInstanceOf(Header);
  });
});
