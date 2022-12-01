import { AbstractComponent } from './abstractClass';

describe('Given a class that extends abstract class Component', () => {
  describe('when is exactly the same as the parent class', () => {
    class Test extends AbstractComponent {}
    test('Then public render method should not return value', () => {
      const testComponent = new Test();
      expect(testComponent.testRender()).toBeFalsy();
    });
    // test attempts
    // test('Then public render method should not return value', () => {
    //   const testComponent = new Test();
    //   const template = 
    //   expect(testComponent.render()).toBeFalsy();
    // });
    // test('Then public render method should not return value', () => {
    //   const testComponent = new Test();
    //   expect(testComponent.testRender()).toBeFalsy();
    // });
    // test('Then public render method should not return value', () => {
    //   const testComponent = new Test();
    //   expect(testComponent.testRender()).toBeFalsy();
    // });
  });
});
