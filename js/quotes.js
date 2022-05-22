const quotes = [
    {
        quote:
        "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
    },
    {
        quote:
        "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote:
        "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote:
        "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
    {
        quote:
        "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves",
    },
    {
        quote:
        "I love you 3000.",
        author: "Tony Stark",
    },
    {
        quote:
        "Avengers...Assemble.",
        author: "Steve Rogers",
    },
    {
        quote:
        "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "Albert Einstein",
    },
    {
        quote:
        "Everything you can imagine is real.",
        author: "Pablo Picasso",
    }
    ]
    
    const quote = document.querySelector("#quote span:first-child")
    const author = document.querySelector("#quote span:last-child")
    
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )]
    
    quote.innerText = todaysQuote.quote
    author.innerText = todaysQuote.author