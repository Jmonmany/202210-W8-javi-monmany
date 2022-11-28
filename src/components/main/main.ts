import { series } from '../../series.js';
import { AbstractComponent } from '../abstractClass.js';
import { List } from '../lists/lists.js';
import { SeriesType } from '../../series.js';
export class Main extends AbstractComponent {
  updatedSeries: SeriesType[];
  constructor(selector: string) {
    super();
    this.updatedSeries = series;
    this.template = this.createTemplate();
    this.outRender(selector);
    this.manageComponent();
    this.manageDeletion();
  }
  /*
  Tasks
  Responsabilidades de Main restantes:
  - Actualizar esa renderización cuando se valoren peliculas
  */
  manageComponent() {
    const seriesArray = this.separatingSeries();
    new List('slot[name="pending-list"]', seriesArray[0]);
    new List('slot[name="watched-list"]', seriesArray[1]);
  }

  manageDeletion() {
    const seriesArray = this.separatingSeries().flat();
    const closeButton = (event: Event) => {
      const element = event.target as HTMLElement;
      (element.parentElement as HTMLElement).remove();
      const index = [...nodeList].indexOf(element);
      const id = seriesArray[index].id;
      this.updatedSeries = this.updatedSeries.filter((item) => item.id !== id);
      console.log(this.updatedSeries);
    };
    const nodeList = document.querySelectorAll('.icon--delete');
    nodeList.forEach((item) => item.addEventListener('click', closeButton));
  }
  separatingSeries() {
    const seriesArray = [
      this.updatedSeries.filter((item) => item.watched === false),
      this.updatedSeries.filter((item) => item.watched === true),
    ];
    return seriesArray;
  }

  createTemplate() {
    const seriesArray = this.separatingSeries();
    return `
        <main class="main">
          <section class="series">
            <h2 class="section-title">Series list</h2>
            <section class="series-pending">
              <h3 class="subsection-title">Pending series</h3>
                <p class="info">You have ${seriesArray[0].length} series pending to watch</p>
                  <ul class="series-list">
                    <slot name="pending-list"></slot>
                  </ul>
            </section>
            <section class="series-watched">
              <h3 class="subsection-title">Watched series</h3>
                <p class="info">You have watched ${seriesArray[1].length} series</p>
                  <ul class="series-list series-list--watched">
                    <slot name="watched-list"></slot>
                  </ul>
            </section>
          </section>
        </main> 
      `;
  }
}
