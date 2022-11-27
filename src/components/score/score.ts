import { SeriesType } from '../../series.js';
export const Score = (item: SeriesType) => {
  let template = ``;
  if (item.watched === false) {
    for (let i = 1; i <= 5; i++) {
      template += ` 
                <li class="score__star">
                    <i class="icon-score far fa-star" title="${i}/5"></i>
                  </li>
        `;
    }
    console.log(template);
    return template;
  } else {
    for (let i = 1; i <= item.score; i++) {
      template += ` 
                <li class="score__star">
                    <i class="icon-score fas fa-star" title="${i}/5"></i>
                  </li>
        `;
    }
    console.log(template);
    return template;
  }
};
