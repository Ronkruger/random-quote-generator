//generating fonts
const quotes = {
    "jules Renard": '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
    "Albert Einstein": '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
    "Pierce Brown": '“Man cannot be freed by the same injustice that enslaved it.”',
    "Deepak Chopra": '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”',
    "Madeline Miller": '“Bury us, and mark our names above. Let us be free.”',
    "Monique Duval": '“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”',
    "Jon Krakauer": '“He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight.”',
    "John Galsworthy": '“Life calls the tune, we dance.”',
    "Jenny Valentine": '“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”',
    "Jamie Ford": '“The library is like a candy store where everything is free.”',
    "Nenia Campbell": '“You want to be free. You also want to be mine. You cant be both.”',
    "Lauren DeStefano": '“But there’s no such thing as free. There are only different and more horrible ways to be enslaved.”',
    "Veronica Roth": '“I have never been carried around by a large boy, or laughed until my stomach hurt at the dinner table, or listened to the clamor of a hundred people all talking at once. Peace is restrained; this is free.”',
    "Ludwig von Mises": '“Socialism is an alternative to capitalism as potassium cyanide is an alternative to water.”',
    "Oliver Bowden": '“Only a mind free of impediment is capable of grasping the chaotic beauty of the world. This is our greatest asset.”',
    "Albert Borris": '“the truth will set u free but first it will piss u off”',
    "Kyung-Sook Shin": '“All I wanted was for you to be free from everything. And with that freedom, you often showed me another world, so I wanted you to be even freer. I wanted you to be so free that you would live your life for other people.”',
    "Lana Del Rey": '“I feel free when I see no one and nobody knows my name”',
}
function generate(){
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    
    const quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}

//footer
const footer = document.getElementById('footer');
let date = new Date().getFullYear();
footer.innerHTML = `<p>${date} Ron el.`