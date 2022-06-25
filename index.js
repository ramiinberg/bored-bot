
const fetchBoredApi = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("random-activity").textContent = data.activity
      document.getElementById("title").textContent = "Happy Bot"
      document.body.classList.add("fun")
    })
}

document.getElementById("btn-go").addEventListener("click", () => fetchBoredApi())
