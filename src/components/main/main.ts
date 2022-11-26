import { AbstractComponent } from '../abstractClass.js';

export class Main extends AbstractComponent {
  constructor(selector: string) {
    super();
    this.template = this.createTemplate();
    this.outRender(selector);
  }
  /*
  Tasks
  Responsabilidades de Main:
  - Decidir por cada slot que peliculas renderizará la clase List ideas (filter, map)
  - Actualizar esa renderización cuando se valoren peliculas
  - Eliminar peliculas
  */
  createTemplate() {
    return `
        <main class="main">
          <section class="series">
            <h2 class="section-title">Series list</h2>
            <section class="series-pending">
              <h3 class="subsection-title">Pending series</h3>
                <p class="info">You have 4 series pending to watch</p>
                  <ul class="series-list">
                    <slot name="pending-list"></slot>
                  </ul>
            </section>
            <section class="series-watched">
              <h3 class="subsection-title">Watched series</h3>
                <p class="info">You have watched 4 series</p>
                  <ul class="series-list series-list--watched">
                    <slot name="watched-list"></slot>
                  </ul>
            </section>
          </section>
        </main> 
      `;
  }
}
