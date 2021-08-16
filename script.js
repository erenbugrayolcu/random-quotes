function generate(){
    var quotes = {
        "- Nida Bey" : "? Neden",
        "- Ahmet Asım Maden" : "Efe Yular",
        "- Bedenci" : "Gençlerrrr deerss baaşlaadıııııııı dımtıs dımtıs",
        "- Onur Döğenci" : "Valorantı bıraktım",
        "- Behiç Tağ" : "Mercedes Mercedes Mercedes",
        "- Adam Jensen" : "I never asked for this.",
        "- Elit Koruyucu" : "Sa",
        "- Efe Yular" : "Ahh yine 5 burn içtim kafam nasıl güzel anlatamam lütfen yazmayın kızlaaaar....",
        "- Eren Buğra Yolcu" : "Forza Horizon 5 çıksın alcam",
        "- Emirhan Dinç" : "Ozur",
        "- Rüzgar Karakaya" : "Abi benimle migrosa gelir misin İninal Kart'a para yüklicem de",
        "- Yasin Karakaya" : "...",
        "- Emir Karakaya" : "İKARUS LEENDİİNGGGG"
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
