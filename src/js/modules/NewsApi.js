export default class NewsApi {
    constructor (){
    
    }
 

    getNews(input){
    const today = new Date(Date.now()).toISOString().replace(/^(.+)T(.+)/, '$1');
    const dayInMS = 24 * 60 * 60 * 1000;
    const weekBefore = new Date(Date.now() - 6 * dayInMS).toISOString().replace(/^(.+)T(.+)/, '$1');
    
    return fetch(
      "https://newsapi.org/v2/everything?" +
        `q=${input.value}&` +
        `from=${weekBefore}&` +
        `to=${today}&` +
        `pageSize=${100}&` +
        "apiKey=19cc188a060d42d9b52661bcea615c82" +
        "&language=ru"
    )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })

}

}