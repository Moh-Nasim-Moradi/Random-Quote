const quoteText=document.getElementById('quote-text')
const quoteAuthor=document.getElementById('quote-author');
const newQuoteBtn=document.getElementById('create-quote');

function getQuote (){
    fetch('https://api.quotable.io/random')
    .then(res=>res.json())
    .then(data=>{
        quoteText.textContent=`"${data.content}"`;
        quoteAuthor.textContent=`_${data.author}`;
    })
    .catch(error=>console.error("something went wrong!",error));
}
newQuoteBtn.addEventListener('click',getQuote);