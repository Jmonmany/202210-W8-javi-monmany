import { series } from '../../series.js';
import { AbstractComponent } from '../abstractClass.js';
import { List } from '../lists/lists.js';
import { SeriesType } from '../../series.js';
import { Score } from '../score/score.js';
export class Main extends AbstractComponent {
  pendingSeries: SeriesType[];
  watchedSeries: SeriesType[];
  constructor(selector: string) {
    super();
    this.pendingSeries = series.filter((item) => item.score === 0);
    this.watchedSeries = series.filter((item) => item.score !== 0);
    this.template = this.createTemplate();
    this.outRender(selector);
    this.manageComponent();
  }
  /*
  Tasks
  Responsabilidades de Main restantes:
  - Actualizar esa renderización cuando se valoren peliculas
  - Eliminar peliculas
  */
  manageComponent() {
    new List('slot[name="pending-list"]', this.pendingSeries);
    new List('slot[name="watched-list"]', this.watchedSeries);
  }

  createTemplate() {
    return `
        <main class="main">
          <section class="series">
            <h2 class="section-title">Series list</h2>
            <section class="series-pending">
              <h3 class="subsection-title">Pending series</h3>
                <p class="info">You have ${this.pendingSeries.length} series pending to watch</p>
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
