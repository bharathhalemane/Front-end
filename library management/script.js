let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let searchResultsEl = document.getElementById("searchResults");
let statusPargraphEl = document.getElementById("statusPargraph");

let searchInputValue = "";
let booksList = {};

function createAndAppendBook(book) {
    let bookEl = document.createElement("div");
    bookEl.classList.add("col-6", "text-center");
    searchResultsEl.appendChild(bookEl);

    let bookImageEl = document.createElement("img");
    bookImageEl.src = book.imageLink;
    bookImageEl.classList.add("mt-auto", "mb-auto", "image");
    bookEl.appendChild(bookImageEl);

    let authorEl = document.createElement("p");
    authorEl.textContent = book.author;
    authorEl.classList.add("text-center");
    bookEl.appendChild(authorEl);
}

function displaySearchResult() {
    if (booksList.search_results === null) {
        statusPargraphEl = "No Results found";
    } else {
        statusPargraphEl = "Popular Books";
        for (let book of booksList.search_results) {
            let bookName = book.title;
            createAndAppendBook(book);
        }
    }
}


function getBooks(event) {
    if (event.key === "Enter") {
        searchInputValue = event.target.value;
        console.log(searchInputValue);
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputValue;

        let options = {
            method: "GET",
        };

        spinnerEl.classList.remove("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                booksList = jsonData;
                displaySearchResult();
            });
    }
}

searchInputEl.addEventListener("keydown", getBooks);