const events = JSON.parse(localStorage.getItem("myEvents")) || [];
const container = document.getElementById("eventsList");

if (events.length === 0) {
  container.innerHTML = "<p style='color:white;text-align:center;'>Nuk ke krijuar ende asnjë event.</p>";
}

events.forEach(event => {
  const card = document.createElement("article");

  card.innerHTML = `
    <h3>${event.title}</h3>
    <p>📍 ${event.city}</p>
    <p>📅 ${event.date}</p>
    <p>👥 Max: ${event.max}</p>
    <p>📞 ${event.contact}</p>
  `;

  container.appendChild(card);
});
