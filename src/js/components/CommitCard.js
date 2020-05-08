import {correctDate} from "../utils/FormattedDate";

export default class CommitCard {
constructor (){
}

createCommit (data){
  
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("glide__slide");
  carouselDiv.insertAdjacentHTML(
    "beforeend",
      `
      <div class="glide__slide_container">
      <p class="glide__slide__date">${correctDate(data.commit.committer.date)}</p>
      <div class="glide__slide__autor">
        <img class="glide__slide__autor_photo" src="${data.author.avatar_url}">
        <div class="glide__slide__autor_about">
          <h3 class="glide__slide__autor_about_name">${data.commit.committer.name}</h3>
          <h4 class="glide__slide__autor_about_email">${data.commit.committer.email}</h4>
        </div>
      </div>
      <p class="glide__slide__comment">${data.commit.message}</p>
    </div>
                  `);
    return carouselDiv;
    }













}