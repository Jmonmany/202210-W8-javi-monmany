export abstract class AbstractComponent {
  protected template!: string;
  protected element!: Element;
  constructor() {
    //
  }
  render(selector: string) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) return;
    this.element = htmlElement;
    this.element.innerHTML = this.template;
  }
  addRender(selector: string) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) return;
    this.element = htmlElement;
    this.element.innerHTML += this.template;
  }
  outRender(selector: string) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) return;
    this.element = htmlElement;
    this.element.outerHTML = this.template;
  }
  cleanHtml(selector: string) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) return;
    this.element.innerHTML = '';
    return this.element;
  }
}
