import "./style.css";


import NewsCard  from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import Constans from "./js/constants/Constans";
import DataStorage  from "./js/modules/DataStorage";
import NewsApi from "./js/modules/NewsApi";
import * as workWithData from "./js/utils/FormattedDate";



import {
  errorPopup, 
  errorServer, 
  newsBlock, 
  searchResultsContainer, 
  searchButton, 
  searchInputDiv, 
  noDataElement, 
  showMoreCards, 
  preloaderDiv, 
  searchForm} from "./js/constants/Constans"; 


const preloader = (isLoading, preloaderBlock) => {
    if (isLoading) {
      preloaderBlock.style.display = "flex";
    } else if (!isLoading) {
      preloaderBlock.style.display = "none";
    }
  }

const storage =  new DataStorage ();
const newsCardApi =  new  NewsApi ();
const newCard = new NewsCard();
const newsCardList = new NewsCardList (searchResultsContainer, newCard, showMoreCards, searchInputDiv, errorPopup, searchButton, noDataElement, newsBlock, errorServer, preloader, preloaderDiv, newsCardApi, storage, searchForm);

