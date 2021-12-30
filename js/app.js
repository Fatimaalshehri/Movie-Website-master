
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=9f087f19ed56c0e19d0541003ecc11bb')
    .then(response => {
      response.json()
      .then(response => {
        console.log(response);


        document.getElementById("movie-card").innerHTML = 
        
       
      '  <div class="row row-cols-2 row-cols-md-4 g-4">'+
        response.results.map(element =>
         
          `   
        
        <div class="col">
              <div class="card">
              <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" height="300px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title" style="font-size:1rem;">${element.title}</h5>
                <p class="card-text">${element.release_date}</p>
               
                <p>
        <a href="${element.popularity}"target="ـ blank" class"btn btn-secondary">Read more</a>
        </p>
      </div>
    </div>
  </div>
  



  `
        ).join(" ")
        +' </div>'

      });
    }
    )