const groups = [
  { name: "Photography Lovers", interest: "Photography" },
  { name: "Music Community", interest: "Music" },
  { name: "Fitness & Yoga", interest: "Health" }
];

const groupContainer = document.getElementById("groupsContainer");

groups.forEach(group => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h3>${group.name}</h3>
    <p>Interest: ${group.interest}</p>
    <button>Join</button>
  `;
  groupContainer.appendChild(article);
});
