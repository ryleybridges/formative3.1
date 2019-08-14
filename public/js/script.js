$(document).ready(function(){
    $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?country=nz&apiKey=4eef0c7040a24bd38e258c815585c046',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        const articles = data.articles;
        for (var i = 0; i < articles.length; i++) {
          console.log(articles[i]);
        }
      },
      error: function(){
        console.log("not good");
      }
    });


});
