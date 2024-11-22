let divContainer = document.getElementById("divContainer");
const searchInput = document.getElementById("searchInput");
let allResults = [];
fetch("https://content.guardianapis.com/search?api-key=022e2d96-2cf9-421e-9b66-bc1ac2780e08")
.then((response) => {
    if (!response.ok) {
        throw new Error("ERROR!!");
    } else {
        return response.json();
    }
})
.then((data) => {
    allResults = data.response.results;
    displayNews(allResults);
})
.catch((error) => {
    console.error("u got ERROR sir", error);
});


function displayNews(arr) {
    divContainer.innerHTML = "";

arr.forEach((newsItem, index) => {
{
    const newsBox = document.createElement('div')
    newsBox.setAttribute("class" ,"divBox")
    const newsTitle = document.createElement("h3");
    newsTitle.setAttribute("class","newsTitle")
    const newsDescription = document.createElement("p");
    const timeForCreation = document.createElement("p");
    const linkToArticle = document.createElement("a");

    newsTitle.innerText = newsItem.sectionId;
    newsDescription.innerText = newsItem.webTitle;
    timeForCreation.innerText = newsItem.webPublicationDate
    linkToArticle.innerText = "Read more";
    linkToArticle.href = newsItem.webUrl;
    linkToArticle.target = "_blank"; 

    divContainer.appendChild(newsBox);
    newsBox.appendChild(newsTitle);
    newsBox.appendChild(newsDescription);
    newsBox.appendChild(timeForCreation);
    newsBox.appendChild(linkToArticle);
}

});
}
function searchfunction() {
    const searchNews = searchInput.value.toLowerCase();
    const filterSearch = allResults.filter(newsItem =>
        newsItem.sectionId.toLowerCase().includes(searchNews)
      )
      displayNews(filterSearch)
      
}
searchInput.addEventListener("input", searchfunction);
function render() {
   divContainer = "";
}
