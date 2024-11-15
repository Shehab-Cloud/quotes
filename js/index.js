function showRandomQuote() {
    var quotes = [
        " “Be yourself; everyone else is already taken.” ",
        " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        "“A friend is someone who knows all about you and still loves you.”",
        "“Insanity is doing the same thing, over and over again, but expecting different results.”"
      ];
      
      var persone = [
        "Oscar Wilde",
        "Albert Einstein",
        " Dr. Seuss",
        "Elbert Hubbard",
        "Narcotics Anonymous"
      ];
    //اختيار رقم عشوائي 
    var randomIndex = Math.floor(Math.random() * quotes.length);
  
    // استخراج الاقتباس واسم الشخص  
    var randomQuote = quotes[randomIndex];
    var randomAuthor = persone[randomIndex];
  
    // تحديث المحتوى 
    document.getElementById("quote").innerHTML = randomQuote;
    document.getElementById("persone").innerHTML = randomAuthor;
    document.getElementById("showNumber").innerHTML = randomIndex;

    
  };
  