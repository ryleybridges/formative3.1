$(document).ready(function(){
    $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?country=nz&apiKey=4eef0c7040a24bd38e258c815585c046',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        const articles = data.articles;
        for (var i = 0; i < articles.length; i++) {
<<<<<<< HEAD
          console.log(articles[i]);
=======
          let card = `
          <div class="card mb-3" style="max-width: 870px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${articles[i].urlToImage}" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${articles[i].title}</h5>
                  <p class="card-text">${articles[i].description}</p>
                  <p class="card-text"><small class="text-muted">Last updated: ${articles[i].publishedAt}</small></p>
                  <button class="btn btn-primary"><a href=${articles[i].url}>Read more</a></button>
                </div>
              </div>
            </div>
          </div>
          `;
          $('#content').append(card);

>>>>>>> anniesDev
        }
      },
      error: function(){
        console.log("not good");
      }
    });


});
