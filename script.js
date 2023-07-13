//Fetching tags
let quote = document.getElementById('quote');
let author = document.getElementById('author');


//Fetching quotes
let i = 0;
let quotes;

fetch('quotes.json')
  .then(res => res.json())
  .then(data => {
    quotes = data;
    changeQuote();
  })
  .catch(err => console.error("Error : ", err));


function changeQuote() 
{
  //When JSON end is reached
  if (i >= quotes.length) {
    i = 0;
  }

  //Changing quote & author
  quote.innerText  = `"${quotes[i].text}"`;
  author.innerText = quotes[i].author;
  i++;
}