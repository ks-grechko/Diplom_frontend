export default class DataStorage {
  constructor() {
	
	}

  localStorage(result, request) {
    localStorage.setItem("result", JSON.stringify(result));
    localStorage.setItem("request", JSON.stringify(request));

  }
  clear(){
    localStorage.clear();
  }
}


