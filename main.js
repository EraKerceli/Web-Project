function randomDate(daysBack = 60) {
  const now = new Date();
  const past = new Date(now.getTime() - Math.random() * daysBack * 24 * 60 * 60 * 1000);
  return past;
}

const events = [
  { title: "Rock Concert", city: "Prishtinë", category: "Music", created: randomDate() },
  { title: "Photography Course", city: "Prizren", category: "Education", created: randomDate() },
  { title: "Yoga Class", city: "Gjakovë", category: "Health", created: randomDate() },
  { title: "Tech Meetup", city: "Ferizaj", category: "Technology", created: randomDate() },
  { title: "Cooking Workshop", city: "Pejë", category: "Food", created: randomDate() },
  { title: "Art Exhibition", city: "Prishtinë", category: "Art", created: randomDate() }
];

$(document).ready(function () {
  const $container = $("#eventsContainer");
  const $searchInput = $("#searchInput");
  const $counter = $("#counter");

  function displayEvents(list) {
    $container.empty();
    $counter.text(`${list.length} evente të gjetura`);

    if (list.length === 0) {
      $container.html(`<p class="no-results">Nuk u gjet asnjë event 😕</p>`);
      return;
    }

    list.forEach(ev => {
      const badgeClass = ev.category.toLowerCase();

      const $article = $(`
        <article>
          <span class="badge ${badgeClass}">${ev.category}</span>
          <h3>${ev.title}</h3>
          <p class="city">${ev.city}</p>
          <p class="date">Krijuar më: ${ev.created.toLocaleDateString()}</p>
        </article>
      `);

      $article.hide().fadeIn(300);
      $container.append($article);
    });
  }

  displayEvents(events);

  $searchInput.on("input", function () {
    const value = $(this).val().toLowerCase();
    const filtered = events.filter(e => e.city.toLowerCase().includes(value));
    displayEvents(filtered);
  });
});
