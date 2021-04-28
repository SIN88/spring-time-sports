$("button").click(function () {
    let api=`https://wendy-cors.herokuapp.com/https://mma-fighters.herokuapp.com/api/fighter/`
    var searchTerm = Math.ceil(Math.random()*1583)

  fetch(api + searchTerm)
    .then(function (data) {
      return data.json();
    })

    .then(function (data) {
      console.log(data);
      $("body").append(`
      <div class="card" style="width: 18rem;">
<div class="card-body">
<h3 class="card-title">${data.fields.name.toUpperCase()}</h3>
${/*getStats(data.fields.name)*/""}
    </div>
</div>`);
    }); 

    function getStats(name){
        return `<p class="card-text">
    <ul>
        ${data.stats
          .map(
            (a) =>
              `<li>
              ${a.stat.name} ${a.base_stat}
            </li>`
          )
          .join("")}
        // <li>${data.stats[0].stat.name} ${data.stats[0].base_stat}</li>
        </ul>
    </p>`
    }
});