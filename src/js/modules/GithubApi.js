export default class GithubApi {
constructor(url){
this.url = url;

}

getCommits (url) {
    return fetch(this.url);
    }


}