let timerEl = document.getElementById('timer');
let quoteDisplayEl = document.getElementById('quoteDisplay');
let resultEl = document.getElementById('result');

let quoteInputEl = document.getElementById('quoteInput');

let submitBtnEl = document.getElementById('submitBtn');
let resetBtnEl = document.getElementById('resetBtn');

let spinnerEl = document.getElementById('spinner');



let generatedQuoteValue = "";

function resetBtn() {
    let time = 0;
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
            generatedQuoteValue = jsonData.content;
        });
    let timeId = setInterval(function() {
        time = time + 1;
        timerEl.textContent = time;

    }, 1000);

    function checkingQuote() {
        let quoteInputValue = quoteInputEl.value;
        console.log(quoteInputValue);
        console.log(generatedQuoteValue);
        if (quoteInputValue === generatedQuoteValue) {
            clearInterval(timeId);
            resultEl.textContent = "You typed in " + time + " seconds";
        } else {
            resultEl.textContent = "You typed incorrect sentence";
        }
    }


    submitBtnEl.addEventListener("click", checkingQuote);
    resetBtnEl.addEventListener("click", function() {
        clearInterval(timeId);
        resetBtn();
    });
}

resetBtn();