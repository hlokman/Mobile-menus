import "./style/style.css";
import {
  renderNews,
  renderVideos,
  renderReviews,
  renderForum,
  renderMore,
} from "./components/renders";

const container = document.querySelector("#container");
const header = document.querySelector("#header");
const news = document.querySelector("#news");
const videos = document.querySelector("#videos");
const reviews = document.querySelector("#reviews");
const forum = document.querySelector("#forum");
const more = document.querySelector("#more");
const mask = document.querySelector("#mask");

//NEWS
news.addEventListener("click", (e) => {
  if (e.target.id === "news") {
    renderNews();
  }
  console.log(e.target);
});

//VIDEOS
videos.addEventListener("click", (e) => {
  if (e.target.id === "videos") {
    renderVideos();
  }
  console.log(e.target);
});

//REVIEW
reviews.addEventListener("click", (e) => {
  if (e.target.id === "reviews") {
    renderReviews();
  }
});

//FORUM
forum.addEventListener("click", (e) => {
  if (e.target.id === "forum") {
    renderForum();
  }
  console.log(e.target);
});

//MORE
more.addEventListener("click", (e) => {
  console.log(more.className);
  renderMore();
  const exit = document.querySelector("#exit");

  exit.addEventListener("click", (e) => {
    tabsNews.removeAttribute("class");
    tabsVideos.removeAttribute("class");
    tabsReviews.removeAttribute("class");
    tabsForum.removeAttribute("class");
    tabsMore.removeAttribute("class");
    mask.removeAttribute("class");
  });

  mask.addEventListener("click", (e) => {
    tabsNews.removeAttribute("class");
    tabsVideos.removeAttribute("class");
    tabsReviews.removeAttribute("class");
    tabsForum.removeAttribute("class");
    tabsMore.removeAttribute("class");
    mask.removeAttribute("class");
  });
});

/*container.addEventListener("click", (e) => {
  console.log(e.target);
});*/

export { header };
