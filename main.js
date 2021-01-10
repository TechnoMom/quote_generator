// Chooses a random quote to display

const quotes = ["Any intelligent fool can make things bigger and more complex. It takes a touch of genius&mdash;and a lot of courage&mdash;to move in the opposite direction. - Ernst Schumacher", 
"There is always something to do. There are hungry people to feed, naked people to clothe, sick people to comfort and make well. And while I don\u2019t expect you to save the world, I do think it\u2019s not asking too much for you to love those with whom you sleep, share the happiness of those whom you call friend, engage those among you who are visionary, and remove from your life those who offer you depression, despair, and disrespect. - Nikki Giovanni", 
"The true birthplace is that wherein for the first time one looks intelligently upon oneself; my first homelands have been books, and to a lesser degree schools. - Marguerite Yourcenar", 
"Justice is what love looks like in public. - Cornell West", 
"Love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is done well. - Vincent Van Gogh", 
"Activism is my rent for living on this planet. - Alice Walker", 
"Having been unable to strengthen justice, we have justified strength. - Blaise Pascal"
];

let num = quotes.length;

function randomNum(num) {
    let random = Math.floor(Math.random() * num);
    return random;
}
let random = randomNum(num);
console.log(`Today's quote: ${quotes[random]}`);
