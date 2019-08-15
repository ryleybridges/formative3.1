$(document).ready(function(){
  $('#aboutContent').hide();
  let countryCode;

  $('.checkRadio').click(function(){
    countryCode = $(this).val();
    initAjax(countryCode)
  });

  const initAjax = (country) => {
    $.ajax({
      url: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=4eef0c7040a24bd38e258c815585c046`,
      type: 'GET',
      dataType: 'json',
      success: function(data){
        $('#cardNews').empty();
        const articles = data.articles;
        for (var i = 0; i < articles.length; i++) {
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
          $('#cardNews').append(card);
        }
      },
      error: function(){
        console.log('not good');
      }
    });

    $('#about').click(function(){
      $('#content').hide();
      $('#aboutContent').show();
      $('#aboutContent').html('<h2>About</h2><br><p>Welcome to Top Articles Today, an application that shows you the latest headlines from all around the world. Using our filtering system, you can switch to whatever country you want relevant articles from to see what is the top news in those countries from news sites relevant to you. By clicking on the Read More button of each headline, you will be taken to the site that the article is from and be able to read it in full.<br>This application was created by two young developers Annie and Ryley, who wanted to be able to use the News API to show a way of displaying the latest important articles coming out from all around the world to users.</p>');
    });

    $('#news').click(function(){
      $('#aboutContent').hide();
      $('#content').show();
    });

  }

});
