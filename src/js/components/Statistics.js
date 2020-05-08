export default class Statistics {
constructor (localStorage, container) {
	this._localStorage = localStorage;
	this.obj = {};
    this.container = container;
}


createCharts (youAsk, newsForWeek, newsInTitle) {
	const strData = localStorage.getItem("result");
	const data = JSON.parse(strData);
    const strRequest = this._localStorage.getItem("request");
	const request = JSON.parse(strRequest);
	
	const Dates = data.articles.sort(function (a, b) {
		const dateA = new Date(a.publishedAt);
		const dateB = new Date(b.publishedAt);
		return dateA - dateB;
	  });

	const dataWeek = Dates.filter(
		(element) =>
		  element.title.toLowerCase().includes(request.toLowerCase()) ||
		  element.description.toLowerCase().includes(request.toLowerCase())
	  );  
	  youAsk.textContent = `<${request}>`;
	  newsForWeek.textContent = data.totalResults;
	  newsInTitle.textContent = dataWeek.length;
	for (const elem of dataWeek) {
		const date = new Date(`${elem.publishedAt}`);
      	const day = date.toLocaleString("ru", {
        day: "numeric",
      	});
      	const week = date.toLocaleString("ru", {
        weekday: "short",
	  });
	  if (this.obj.hasOwnProperty(`${day},${week}`)) {
        this.obj[`${day},${week}`] += 1;
      } else {
        this.obj[`${day},${week}`] = 1;
      }
    }
    for (const elem in this.obj) {
      this.createDiagram(elem, this.obj[elem]);
    }
	}



createDiagram (day, number) {
	const diagramDiv = document.createElement("div");
	diagramDiv.classList.add("expanded-analytics__chart_item");	
	diagramDiv.insertAdjacentHTML(
		"beforeend",
		`<p class="expanded-analytics__chart_item_day">${day}</p>
		<div class="expanded-analytics__chart_item_data">
			 <div class="expanded-analytics__chart_item_data_scale" style="width: ${number}%">
			<p class="expanded-analytics__chart_item_data_number">${number}</p>
			 </div>
		</div>`);
	this.container.appendChild(diagramDiv);
	}

}












