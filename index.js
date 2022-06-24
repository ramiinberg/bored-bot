
const fetchBoredApi = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("random-activity").textContent = data.activity
    })
}

document.getElementById("btn-go").addEventListener("click", () => fetchBoredApi())
