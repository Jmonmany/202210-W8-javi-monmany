import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { List } from './lists';
import { series } from '../../series';

describe('Given "Header" component', () => {
  document.body.innerHTML = `<slot class="container"></slot>`;
  const list = new List('.container', series);
  test('Then we should to be able to instantiate it', () => {
    expect(list).toBeInstanceOf(List);
  });
  // describe.each(elements)(
  //   'When it is instantiate with a DOM selector',
  //   (element: HTMLElement) => {
  //     test(`Then ${element.tagName} should be render`, () => {
  //       expect(element).toBeInstanceOf(HTMLElement);
  //       expect(element).toBeInTheDocument();
  //     });
  //   }
  // );
});
