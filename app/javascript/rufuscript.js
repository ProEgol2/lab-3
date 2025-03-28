function transform() {
    const images = document.querySelectorAll('.Raccoon');
    images.forEach(image => {
        image.classList.toggle('flip');
    });
}

function bcolorchange() {
    const color = document.getElementById("bcolorinput").value;
    document.body.style.backgroundColor = color;
}
/*
document.addEventListener("DOMContentLoaded", function() {
    console.log("The document has fully loaded!");
    const img = document.createElement("img");
    img.src = "Raccoon2.png";
    img.alt = "Raccoon2";
    img.className = "Raccoon img-fluid mt-5";
    document.getElementById("col1").appendChild(img);
});
*/

function retrieve() {
    const APIKey = '7c404625ed434ea1980cc18d29ed5640';
    const category = 'Raccoon';
    const url2 = `https://newsapi.org/v2/everything?q=${category}&searchIn=title&sortBy=popularity&apiKey=${APIKey}`;
    const url1 = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${APIKey}`;
    //console.log(url1);

    const newsTab = document.createElement("ul");
    newsTab.className = "nav nav-underline";
    newsTab.id = "myTab";
    newsTab.setAttribute("role", "tablist");

    const tab1 = document.createElement("li");
    const tab2 = document.createElement("li");
    tab1.className = "nav-item";
    tab1.setAttribute("role", "presentation");
    tab2.className = "nav-item";
    tab2.setAttribute("role", "presentation");

    const bttn1 = document.createElement("button");
    bttn1.className = "nav-link active";
    bttn1.id = "boring-tab";
    bttn1.setAttribute("data-bs-toggle", "tab");
    bttn1.setAttribute("data-bs-target", "#boring-tab-pane");
    bttn1.setAttribute("type", "button");
    bttn1.setAttribute("role", "tab");
    bttn1.setAttribute("aria-controls", "boring-tab-pane");
    bttn1.setAttribute("aria-selected", "true");
    bttn1.innerText = "Boring news";

    const bttn2 = document.createElement("button");
    bttn2.className = "nav-link";
    bttn2.id = "cool-tab";
    bttn2.setAttribute("data-bs-toggle", "tab");
    bttn2.setAttribute("data-bs-target", "#cool-tab-pane");
    bttn2.setAttribute("type", "button");
    bttn2.setAttribute("role", "tab");
    bttn2.setAttribute("aria-controls", "cool-tab-pane");
    bttn2.setAttribute("aria-selected", "false");
    bttn2.innerText = "Raccoon news";
    bttn2.color = "black";

    tab1.appendChild(bttn1);
    newsTab.appendChild(tab1);

    tab2.appendChild(bttn2);
    newsTab.appendChild(tab2);

    const newsDiv = document.getElementById("newsDiv");
    const newsBox = document.createElement("div");
    const newsBox2 = document.createElement("div");

    newsDiv.appendChild(newsTab)

    const tabContainer = document.createElement("div");
    tabContainer.className = "tab-content overflow-y-auto mw-100";
    tabContainer.id = "myTabContent";

    newsDiv.appendChild(tabContainer);
    
    fetch(url1).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data)
        data.articles.slice(0, 10).forEach((article) => {
            const div = document.createElement("div");
            const title = document.createElement("h4");
            const anchor = document.createElement("a");
            const par = document.createElement("p");
            const par2 = document.createElement("span");

            par.textContent = `${article.description}`;
            par2.textContent = "Source: ";
            anchor.href = `${article.url}`;
            anchor.className = "text-reset"
            title.textContent = `${article.title}`;

            anchor.innerText = `${article.url}`;

            div.className = "mt-3 mb-3 row"
            div.appendChild(title);
            div.appendChild(par);
            //div.appendChild(par2);
            div.appendChild(anchor);
            newsBox.appendChild(div);
        })
    }
    )
    newsBox.setAttribute("id", "boring-tab-pane");
    newsBox.setAttribute("data-bs-spy", "scroll");
    newsBox.setAttribute("data-bs-target", "#newsDiv");
    newsBox.setAttribute("data-bs-root-margin", "0px 0px -40%");
    newsBox.setAttribute("data-bs-smooth-scroll", "true");
    newsBox.setAttribute("class", "bg-body-tertiary p-3 rounded-2 overflow-auto tab-pane fade show active");
    newsBox.setAttribute("tabindex", "0");
    newsBox.setAttribute("role", "tabpanel");
    newsBox.setAttribute("aria-labelledby", "boring-tab");

    fetch(url2).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data)
        data.articles.slice(0, 10).forEach((article) => {
            const div = document.createElement("div");
            const title = document.createElement("h4");
            const anchor = document.createElement("a");
            const par = document.createElement("p");
            const par2 = document.createElement("span");

            par.textContent = `${article.description}`;
            par2.textContent = "Source: ";
            anchor.href = `${article.url}`;
            anchor.className = "text-reset"
            title.textContent = `${article.title}`;

            anchor.innerText = `${article.url}`;

            div.className = "mt-3 mb-3 row"
            div.appendChild(title);
            div.appendChild(par);
            //div.appendChild(par2);
            div.appendChild(anchor);
            newsBox2.appendChild(div);
        })
    }
    )
    newsBox2.setAttribute("id", "cool-tab-pane");
    newsBox2.setAttribute("data-bs-spy", "scroll");
    newsBox2.setAttribute("data-bs-target", "#newsDiv");
    newsBox2.setAttribute("data-bs-root-margin", "0px 0px -40%");
    newsBox2.setAttribute("data-bs-smooth-scroll", "true");
    newsBox2.setAttribute("class", "scrollspy-example bg-body-tertiary p-3 rounded-2 overflow-auto tab-pane fade");
    newsBox2.setAttribute("tabindex", "0");
    newsBox2.setAttribute("role", "tabpanel");
    newsBox2.setAttribute("aria-labelledby", "cool-tab")

    tabContainer.appendChild(newsBox2);
    tabContainer.appendChild(newsBox);
}

/*
async function retrieve() {
    //const API_URL = `https://newsapi.org/v2/top-headlines?category=raccoon&apiKey=7c404625ed434ea1980cc18d29ed5640`;
    const API_URL = `https://diegoeyza-github-io.onrender.com/news`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (data.status === "ok") {
        data.articles.forEach((article) => {
            const div = document.createElement("div");
            const title = document.createElement("h4");
            const anchor = document.createElement("a");
            const par = document.createElement("p");

            par.textContent = `${article.description}`;
            anchor.href = `${article.url}`;
            title.textContent = `${article.title}`;

            title.appendChild(anchor);
            div.appendChild(title);
            div.appendChild(par);
            document.getElementById("newsBox").appendChild(div);
        })
    } else {
        console.error("Error fetching news:", data);
    }
}
*/