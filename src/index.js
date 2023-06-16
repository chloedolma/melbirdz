const API = {
  health: "http://0.0.0.0:3000/api/v1/health",
  bird: "http://0.0.0.0:3000/api/v1/bird",
};

async function healthCheck() {
  try {
    const response = await fetch(API.health);
    const { health } = await response.json();

    if (health !== "ok") {
      return alert("Unhealthy \ud83d\ude22");
  }

    return alert("Healthy \ud83d\ude0a");
  } catch {
    alert("Oops something went wrong");
  }
}

async function getBird(input) {
  const response = await fetch(`${API.bird}?name=${input}`);
  const birdJson = await response.json();
  console.log(birdJson);
  return birdJson;
}

async function getInputAndSearchBird() {
  let input = document.getElementById("birdSearchBar").value.toString();
  console.log(getBird(input));
}

// console.log(input);
// let form = document.getElementById("birdSearchForm");
// let button = document.getElementById("searchButton");
// form.addEventListener("submit", getBird(input));
// button.addEventListener("submit", getBird(input));
