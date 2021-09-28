// Show new Quote
function newQuote(){
   // Pick a random quotes from apiQuotes arrary
   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
   console.log(quote);
}

newQuote();