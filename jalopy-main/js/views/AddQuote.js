import createView from "../createView.js"

export default function InsertNewQuoteView(props) {
    return `
<form class="container">
    <h1>Insert Quote</h1>
    <form>
        <label for="quoteText" class="form-label">New Quote:</label>
        <input class="form-control" list="datalistOptions" id="quoteText" placeholder="Enter a new quote">
         <input class="form-control" list="datalistOptions" id="quoteAuthor" placeholder="Enter Author">
        <button class="form-control" id="insert-quote-btn">Insert Quote</button>
    </form>
</div>
`;
}

export function InsertNewQuoteEvents() {
    const insertBtn = document.querySelector("#insert-quote-btn");
    insertBtn.addEventListener("click", addNewQuote);
}

function addNewQuote() {
    const quoteInput = document.querySelector("#quoteText");
    const authorInput = document.querySelector("#quoteAuthor");
    const quote = quoteInput.value.trim();
    let author = authorInput.value.trim();
    if(quote.length < 1) {
        alert("Don't forget to add a quote!")
        return;
    }
    const newQuote = {
        quote: quote,
        author: author
    }
    if(author.length < 1) {
        alert("Anonymous")
        return;
    }
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': DOG_QUOTE_API_KEY
        },
        body: JSON.stringify([newQuote])
    }
    fetch("https://quotes.fulgentcorp.com:12250/v1/quotes", requestOptions)
        .then(function(response) {
            if(!response.ok) {
                alert("add new quote error: " + response.status);
            } else {
                alert("added quote accepted");
                createView("/quotes");
            }
        });
}