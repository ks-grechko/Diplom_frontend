import {correctDate} from "../utils/FormattedDate";

export default class NewsCard  {
  constructor() {
	}

// Создаем новую карточку 
createCard (data){
    const card = document.createElement("a");
    card.classList.add("search-results__cards-url");
    card.setAttribute("href", `${data.url}`);
    card.setAttribute("target", "_blank");
    card.insertAdjacentHTML(
      "beforeend", `
      <div class="search-results__cards_card">
            <img class="search-results__cards_card_img" src="${data.urlToImage}" alt="${data.title}">
            <p class="search-results__cards_card_date">${correctDate(data.publishedAt)}</p>
            <h4 class="search-results__cards_card_title">${data.title}</h4>
            <p class="search-results__cards_card_text">${data.description}</p>
            <p class="search-results__cards_card_source">${data.source.name}</p>
          </div>`);
  return card;     
}

}