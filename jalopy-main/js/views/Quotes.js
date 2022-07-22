
let quotesArray = [
    {
        quote: "War is organized murder and torture against our brothers.",
        author: "Alfred Adler"
    },
    {
        quote: "Follow sound business trends, not fashion trends.",
        author: "Janice Dickinson"
    },
    {
        quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
        author: "Alice Walker"
    },
    {
        quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
        author: "Adnan Pachachi"
    },
    {
        quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        author: "John F. Kennedy"
    },
    {
        quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        author: "Harvey Fierstein"
    },
    {
        quote: "I think God's justice is making wrongs right.",
        author: "Joel Osteen"
    },
    {
        quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        author: "H. L. Mencken"
    },
    {
        quote: "If science fiction is the mythology of modern technology, then its myth is tragic.",
        author: "Ursula K. Le Guin"
    },
    {
        quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        author: "Lucy Liu"
    }
]

// HTML function
export default function QuotesView(props) {
    return `
        <h1>Best Quotes</h1>
        <div id="my-quotes">
        
        <!--    <div class="card">-->
                
        <!--    </div>-->
        </div>
        <div id="new-quotes">
        
        </div>
        
        <label for="new-quote-input">Add New Quote</label><br>
        <input type="new-quote" id="new-quote-input">
        <button type="button" id="new-quote-btn">Add</button>
`

}

let currentQuote = 0

function showQuotes() {
    let quotesDisplayed = document.querySelector("#my-quotes");
    for (let i = 0; i < quotesArray.length; i++) {
        quotesDisplayed.innerHTML +=
            `
    <div class="card quote-displayed" style="width: 50rem">
    <div class="card-body">
        <p>${quotesArray[currentQuote].quote}</p><h5>${quotesArray[currentQuote].author}</h5> 
    </div>  
    </div>
    `;
        currentQuote++

    }
}

function addQuote() {
    let newQuoteInput = document.querySelector("#new-quote-input");
    let newQuoteLocation = document.querySelector("#new-quotes")
    newQuoteLocation.innerHTML = `
       <div class="card quote-displayed" style="width: 18rem">
    <div class="card-body">
        <p>newQuoteInput.value</p> 
    </div>  
    </div>
    
    `


        let pushToAddQuote = document.querySelector("#new-quote-btn")
        pushToAddQuote.addEventListener("click", function (event) {
        quotesArray.push(newQuoteInput.value)
        })


}

// JS Function
export function QuotesEvents() {
    document.querySelector("body")
    document.addEventListener("click", showQuotes)
}