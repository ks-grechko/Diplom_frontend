export default class CommitCardList{
constructor (api, card, carousel, history, container)  {
this.api = api;
this.card = card;
this.carousel = carousel;
this.container = container;

}

renderCard () {
this.api.getCommits()
.then (res => {
   if (res.ok) {
      return res.json();
    }
    Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(res => {
    const lastCommits = res.slice(-20);
    for (let items of lastCommits) {
      this.container.appendChild(this.card.createCommit(items));
    }
   this.carousel.mount();
  })
  .catch(err => {
    console.log(err);
  });

}
}

