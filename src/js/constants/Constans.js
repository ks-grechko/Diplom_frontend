
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

//  Для главной стрницы    
const errorPopup = document.querySelector(".popup__error");
const errorServer = document.querySelector(".error-server");
const newsBlock = document.querySelector(".search-results");
const searchResultsContainer = document.querySelector(".search-results__cards");
const searchButton = document.querySelector(".search-panel__search_search-button");
const searchInputDiv = document.querySelector(".search-panel__search_search-input");
const noDataElement = document.querySelector(".preloader-result");
const showMoreCards = document.querySelector(".search-results__button");
const preloaderDiv = document.querySelector(".preloader-place")
const searchForm = document.querySelector(".search-panel__search");

// Для страницы About
const urlForGit = "https://api.github.com/repos/ks-grechko/Diplom_frontend/commits";
const historyCommits = document.querySelector(".reviews");
const container = document.querySelector(".glide__slides");

//Для страницы аналитики
const youAsk = document.querySelector(".analytics__title_request");
const newsForWeek = document.querySelector(".analytics__for-week_number");
const newsInTitle = document.querySelector(".analytics__for-week_headers");
const containerChart = document.querySelector(".expanded-analytics__chart");



export {errorPopup, errorServer, newsBlock, searchResultsContainer, searchButton, searchInputDiv, noDataElement, showMoreCards, preloaderDiv, searchForm}  
export {urlForGit, historyCommits, container}
export {youAsk, newsForWeek, newsInTitle, containerChart}