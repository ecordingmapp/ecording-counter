var image = document.getElementsByClassName("counter")[0];
var boxes = document.getElementsByClassName("single-box");
var onebox = document.getElementsByClassName("one-box")[0];

var ecordingAPI =
  "https://api.ecording.org/api/v1/counter?api_key=<your-api-key>";

var imageUrl = "<your-background-url>";

image.style.backgroundImage = `url(${imageUrl})`;

var img = new Image();
img.src = imageUrl;
img.onload = function () {
  var result = this.height / this.width;
  image.style.setProperty("height", `calc(100vw * ${result})`);
};

// Get from API

let data = () => {
  let jsondata = "";

  async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  async function main() {
    jsondata = await getJson(ecordingAPI);
    return Object.values(jsondata[0])[0];
  }

  //var testNumber = 7897897710007891; // 16 haneli

  let a = main().then(function (result) {
    onebox.innerHTML = "";
    for (let i = 0; i < result.toString().length; i++) {
      onebox.innerHTML += `
        <div class="single-box same-properties">
          ${result.toString()[i]}
        </div>
    `;
    }
  });
};

data();

window.setInterval(function () {
  data();
}, 5000);
