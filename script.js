function generate(){
    var quotes = {
        "- Albert Einstein" : "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",
        "- Alysha Speer" : "You never really know what's coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.",
        "- C.S. Lewis" : "I was not born to be free---I was born to adore and obey.",
        "- John Galsworthy" : "Life calls the tune, we dance.",
        "- Jenny Valentine" : "Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.",
        "- Adam Jensen" : "I never asked for this.",
        "- Elit Koruyucu" : "Sa",
        "- Efe Yular" : "Ahh yine 5 burn içtim kafam nasıl güzel anlatamam lütfen yazmayın kızlaaaar...." 
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
