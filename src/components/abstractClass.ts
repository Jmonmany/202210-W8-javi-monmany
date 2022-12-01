export abstract class AbstractComponent {
  protected template!: string;
  protected element!: Element;
  constructor() {
    //
  }

  testRender() {
    return this.element;
  }

  protected render(selector: string) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) return;
    this.element = htmlElement;
    this.element.innerHTML = this.template;
    return this.element;
  }
  protected addRender(selector: string) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) return;
    this.element = htmlElement;
    this.element.innerHTML += this.template;
    return this.element;
  }
  protected outRender(selector: string) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) return;
    this.element = htmlElement;
    this.element.outerHTML = this.template;
    return this.element;
  }
  protected cleanHtml(selector: string) {
    const htmlElement = document.querySelectorAll(selector);
    if (htmlElement === null) return;
    htmlElement.forEach((item) => (item.innerHTML = ''));
    return htmlElement;
  }
}
