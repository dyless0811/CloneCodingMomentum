const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

fetch(url)
.then(response => response.json())
.then(data => {
    const todaysQuote = data.quotes[0];
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    
    quote.innerText = `"${todaysQuote.text}"`;
    author.innerText = `-${todaysQuote.author}`;
});

