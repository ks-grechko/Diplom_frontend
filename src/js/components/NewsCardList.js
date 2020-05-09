export default class NewsCardList {
  constructor(container, card, showMoreButton, newsInput, errorPopup, searchButton, noDataElement, newsBlock, errorServer, preloader, preloaderDiv, api, dataStorage, form) {

      this.container = container;
      this.card = card;
      this.showMoreButton = showMoreButton;
      this.news = [];
      this.post = 0; 
      this.newsInput = newsInput;
      this.errorPopup = errorPopup;
      this.searchButton = searchButton;
      this.noDataElement = noDataElement;
      this.newsBlock = newsBlock;
      this.errorServer = errorServer;
      this.preloader = preloader;
      this.preloaderDiv = preloaderDiv;
      this.api = api;
      this.dataStorage = dataStorage;
      this.form = form;
      
      //Слушатели
      this.showMoreButton.addEventListener("click", (event) => this.addList());
      this.newsInput.addEventListener("input", (event) => this.validation());
      this.form.addEventListener("submit", (event) => this.search(event));


  }
 
// Рендерим карточки  
addList () {
  const container = document.createDocumentFragment();
  const newsNumber = this.news.length - this.post;
  const cardsCount = newsNumber < 3 ? newsNumber : 3;
  for (let i = 0; i < cardsCount; i++){
      container.appendChild(this.card.createCard(this.news[this.post]));
      this.post += 1;
    }

  this.container.appendChild(container);
  const elementCount = this.container.childElementCount;
  if (elementCount === this.news.length) {
    this.showMoreButton.style = "display: none";
  }
}
//  Очищаем область 
clearCardList() {
  while (this.container.firstChild) {
    this.container.removeChild(this.container.firstChild);
  }
}

// Валидация
validation () {
    if (this.newsInput.value.length === 0) {
        this.errorPopup.textContent = "«Нужно ввести ключевое слово";
        this.searchButton.setAttribute("disabled", true);
    }
    else if (this.newsInput.value.length !== 0) {
        this.errorPopup.textContent = "";
        this.searchButton.removeAttribute("disabled");
      }
}  

//Поиск
search (event) {
  event.preventDefault();
  this.validation();
  this.newsInput.removeAttribute("disabled");
  this.searchButton.removeAttribute("disabled");
  const input = this.newsInput.value;
  this.showMoreButton.style = "display: block";

  if (this.news.length !== 0) {
    this.clearCardList();
  }
  if (input.length === 0) {
      this.noDataElement.style = "display: none";
      this.newsBlock.style = "display: none";
    } else {
      this.noDataElement.style = "display: none";
    }
  this.errorServer.style = "display: none";
  this.preloader(true, this.preloaderDiv);
  this.newsInput.setAttribute("disabled", "disabled");
  this.searchButton.setAttribute("disabled", "disabled");
  localStorage.clear();

  this.api
    .getNews(this.newsInput)
    .then((res) => {
      this.dataStorage.localStorage(res, this.newsInput.value);
      if (res.articles.length === 0) {
        this.noDataElement.style = "display: flex";
        this.newsBlock.style = "display: none";
      } else {
        this.noDataElement.style = "display: none";
      }
      if (res.articles.length > 0) {
        this.newsBlock.style = "display: block";
      }
      this.news = res.articles;
      this.post = 0;
      this.addList();
    })
    .catch((err) => {
      this.errorServer.style = "display: block";
    })
    .finally(() => {
      this.preloader(false, this.preloaderDiv);
      this.newsInput.removeAttribute("disabled");
      this.searchButton.removeAttribute("disabled");
    });

  }

}





