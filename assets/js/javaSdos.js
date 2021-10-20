const API =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=leonardo+da+vinci";

const getData = (api) => {
  return fetch(api)
    .then((Response) => Response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
const fillData = (data) => {
  let html = "";
  for (let i = 0; i < 20; i++) {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        data.objectIDs[i]
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        html += '<div class="col">';
        html += '<div class="card h-100" style="with: 12rem;">';
        html += `<img src="${json.primaryImage}" class="card-img-top" alt="${json}">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title text-black-50">${json}</h5>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
        document.getElementById("dataAlbum").innerHTML = html;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
};

getData(API);
