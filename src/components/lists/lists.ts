import { SeriesType } from '../../series.js';
import { AbstractComponent } from '../abstractClass.js';
import { Score } from '../score/score.js';

export class List extends AbstractComponent {
  constructor(selector: string, item: SeriesType[]) {
    super();
    this.template = this.createTemplate(item);
    this.outRender(selector);
  }
  createTemplate(item: SeriesType[]) {
    let template = ``;
    for (let i = 0; i < item.length; i++) {
      template += ` 
                <li class="serie">
                  <img
                    class="serie__poster"
                    src= ${item[i].poster}
                    alt= ${item[i].name}
                  />
                  <h4 class="serie__title">${item[i].name}</h4>
                  <p class="serie__info">${item[i].name} (${item[i].year})</p>
                  <ul class="score">
                    ${Score(item[i])}
                  </ul>
                  <i class="fas fa-times-circle icon--delete"></i>
              </li>
        `;
    }
    return template;
  }
}
