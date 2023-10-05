//import { tabsNews, tabsVideos, tabsReviews, tabsForum } from "../index";
const tabsNews = document.querySelector("#tabsNews");
const tabsVideos = document.querySelector("#tabsVideos");
const tabsReviews = document.querySelector("#tabsReviews");
const tabsForum = document.querySelector("#tabsForum");
const tabsMore = document.querySelector("#tabsMore");
const mask = document.querySelector("#mask");

function renderNews() {
  tabsVideos.removeAttribute("class");
  tabsReviews.removeAttribute("class");
  tabsForum.removeAttribute("class");
  tabsMore.removeAttribute("class");

  tabsNews.innerHTML = "";
  tabsNews.classList.toggle("visible");
  const thisWeekBtn = document.createElement("button");
  thisWeekBtn.setAttribute("class", "thisWeekBtn");
  thisWeekBtn.textContent = "This week";
  tabsNews.appendChild(thisWeekBtn);

  const lastWeekBtn = document.createElement("button");
  lastWeekBtn.setAttribute("class", "lastWeekBtn");
  lastWeekBtn.textContent = "Last week";
  tabsNews.appendChild(lastWeekBtn);

  const priorBtn = document.createElement("button");
  priorBtn.setAttribute("class", "priorBtn");
  priorBtn.textContent = "Prior";
  tabsNews.appendChild(priorBtn);
}

function renderVideos() {
  tabsNews.removeAttribute("class");
  tabsReviews.removeAttribute("class");
  tabsForum.removeAttribute("class");
  tabsMore.removeAttribute("class");

  tabsVideos.innerHTML = "";
  tabsVideos.classList.toggle("visible");
  const video1 = document.createElement("button");
  video1.setAttribute("class", "video1Btn");
  video1.textContent = "Video 1";
  tabsVideos.appendChild(video1);

  const video2 = document.createElement("button");
  video2.setAttribute("class", "video2Btn");
  video2.textContent = "Video 2";
  tabsVideos.appendChild(video2);

  const video3 = document.createElement("button");
  video3.setAttribute("class", "video3Btn");
  video3.textContent = "Video 3";
  tabsVideos.appendChild(video3);
}

function renderReviews() {
  tabsNews.removeAttribute("class");
  tabsVideos.removeAttribute("class");
  tabsForum.removeAttribute("class");
  tabsMore.removeAttribute("class");

  tabsReviews.innerHTML = "";
  tabsReviews.classList.toggle("visible");
  const review1 = document.createElement("button");
  review1.setAttribute("class", "review1Btn");
  review1.textContent = "Review 1";
  tabsReviews.appendChild(review1);

  const review2 = document.createElement("button");
  review2.setAttribute("class", "review2Btn");
  review2.textContent = "Review 2";
  tabsReviews.appendChild(review2);

  const review3 = document.createElement("button");
  review3.setAttribute("class", "review3Btn");
  review3.textContent = "Review 3";
  tabsReviews.appendChild(review3);
}

function renderForum() {
  tabsNews.removeAttribute("class");
  tabsVideos.removeAttribute("class");
  tabsReviews.removeAttribute("class");
  tabsMore.removeAttribute("class");

  tabsForum.innerHTML = "";
  tabsForum.classList.toggle("visible");
  const forum1 = document.createElement("button");
  forum1.setAttribute("class", "forum1Btn");
  forum1.textContent = "Forum 1";
  tabsForum.appendChild(forum1);

  const forum2 = document.createElement("button");
  forum2.setAttribute("class", "forum2Btn");
  forum2.textContent = "Forum 2";
  tabsForum.appendChild(forum2);
}

function renderMore() {
  tabsNews.removeAttribute("class");
  tabsVideos.removeAttribute("class");
  tabsReviews.removeAttribute("class");
  tabsForum.removeAttribute("class");

  tabsMore.innerHTML = "";
  tabsMore.classList.toggle("visible");
  mask.classList.toggle("unveil");
  const li1 = document.createElement("li");
  const a1 = document.createElement("a");
  a1.setAttribute("href", "#");
  li1.appendChild(a1);
  const b1 = document.createElement("button");
  b1.textContent = "More 1";
  a1.appendChild(b1);

  const li2 = document.createElement("li");
  const a2 = document.createElement("a");
  a2.setAttribute("href", "#");
  li2.appendChild(a2);
  const b2 = document.createElement("button");
  b2.textContent = "More 2";
  a2.appendChild(b2);

  const li3 = document.createElement("li");
  const a3 = document.createElement("a");
  a3.setAttribute("href", "#");
  li3.appendChild(a3);
  const b3 = document.createElement("button");
  b3.textContent = "More 3";
  a3.appendChild(b3);

  tabsMore.appendChild(li1);
  tabsMore.appendChild(li2);
  tabsMore.appendChild(li3);

  const exit = document.createElement("button");
  exit.setAttribute("id", "exit");

  tabsMore.appendChild(exit);
}

export { renderNews, renderVideos, renderReviews, renderForum, renderMore };
