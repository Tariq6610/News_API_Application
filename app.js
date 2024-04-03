const URL = "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10";
const container = document.querySelector(".cont")

let getData = async () => {
    let promise = await fetch(URL);
    let Alldata = await promise.json()
    data = Alldata.results;
    console.log(Alldata)

    for ( let i = 0; i < Alldata.results.length; i++){
        console.log(Alldata.results)
        container.innerHTML += `
        <div class="card p-4 shadow"  style="width: 18rem;">
        <img class="card-img-top h-75" src="${data[i].image_url}" alt="Card image cap">
        <div class="card-body d-flex align-items-end">
          <p class="card-text">${data[i].title}</p>
          </div>
          <a target="_blank" href="${data[i].url}" class="stretched-link"></a>
      </div>`;
      

    }

}

getData();