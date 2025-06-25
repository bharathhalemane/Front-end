// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkFormEl = document.getElementById('bookmarkForm');

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById('siteNameErrMsg');

let siteUrlInputEl = document.getElementById('siteUrlInput');
let siteUrlErrMsgEl = document.getElementById('siteUrlErrMsg');

let submitBtnEl = document.getElementById("submitBtn");

let bookmarkListConEl = document.getElementById("bookmarksList");



siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

function bookmarkFormListUpdate() {
    let bookmark = {
        name: "",
        url: ""
    };
    let liEl = document.createElement("li");
    liEl.classList.add("liEl");

    bookmark.name = siteNameInputEl.value;
    bookmark.url = siteUrlInputEl.value;
    bookmarkListConEl.classList.add('bookmarkList-con');

    let headEl = document.createElement("h1");
    headEl.textContent = bookmark.name;
    headEl.classList.add("bookmarkList-heading");
    liEl.appendChild(headEl);

    let anchorEl = document.createElement("a");
    anchorEl.href = bookmark.url;
    anchorEl.textContent = bookmark.url;
    liEl.appendChild(anchorEl);
    bookmarkListConEl.appendChild(liEl);
}

submitBtnEl.addEventListener("click", bookmarkFormListUpdate);

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
})