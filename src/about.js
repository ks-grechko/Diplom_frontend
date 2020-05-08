import "./style.css";

import GithubApi from "./js/modules/GithubApi";
import CommitCard from "./js/components/CommitCard";
import CommitCardList from  "./js/components/CommitCardList";
import { slider } from "./js/components/Carousel";
import {urlForGit, historyCommits, container} from "./js/constants/Constans";


const githubApi = new GithubApi (urlForGit);
const commitCard = new CommitCard ();
const commitCardList = new CommitCardList (githubApi, commitCard, slider, historyCommits, container);


commitCardList.renderCard();