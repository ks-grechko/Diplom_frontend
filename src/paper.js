import "./style.css";

import Statistics from "./js/components/Statistics"
import {youAsk, newsForWeek, newsInTitle, containerChart} from "./js/constants/Constans"

const statistics = new Statistics (localStorage, containerChart);

statistics.createCharts(youAsk, newsForWeek, newsInTitle);