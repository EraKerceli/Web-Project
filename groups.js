const groups = [
  {
    id: 1,
    title: "Photography Lovers",
    text: "Ky grup është për dashamirë të fotografisë. Organizohen shëtitje fotografike, workshope mujore dhe gara kreative mes anëtarëve.",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oRwU_AJ3TnNe0N6IzdnIVGeHy5L5bToRkg&s"
    ],
    icon: "📸"
  },
  {
    id: 2,
    title: "Music Community",
    text: "Komunitet për muzikantë, këngëtarë dhe adhurues të muzikës. Jam sessions dhe evente live çdo muaj.",
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800"
    ],
    icon: "🎵"
  },
  {
    id: 3,
    title: "Fitness & Yoga",
    text: "Grup për ushtrime fizike, yoga në natyrë dhe mirëqenie mendore.",
    images: [
    "https://sunnyhealthfitness.com/cdn/shop/articles/group-fitness-classes-01_0f1ad3bc-1110-42c6-bc9e-5e9cf2d518c5_750x.jpg?v=1741021005",
      "https://www.burnside.sa.gov.au/files/assets/public/v/1/community-amp-recreation/whats-on-in-burnside/fitp-image.jpg?dimension=pageimage&w=480"
    ],
    icon: "🧘‍♀️"
  },
  {
    id: 4,
    title: "Book Club",
    text: "Lexime mujore dhe diskutime të organizuara për libra nga zhanre të ndryshme.",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800"
    ],
    icon: "📚"
  },
  {
    id: 5,
    title: "Cooking Club",
    text: "Për ata që duan gatimin. Receta të reja çdo javë, gara gatimi dhe evente degustimi.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      "https://cdn.prod.website-files.com/5f8b3f92189560cd389cf2b3/66e25d6c7d242cca64de17e5_65983bf6185e1872e58fde1e_cooking-team-building-activities-teamland.com_.jpeg"
    ],
    icon: "🍳"
  },
  {
    id: 6,
    title: "Camping Club",
    text: "Grupi Camping Club është për adhuruesit e natyrës dhe aventurës që duan të organizojnë kampime, ecje në natyrë dhe aktivitete në ambient të hapur, duke krijuar shoqëri dhe përvoja të paharrueshme.",
    images: [
      "https://www.pitchup.com/cdn-cgi/image/format=auto,quality=50/images/image/private/s--pgl3x2qd--/c_scale,w_1280/v1638793783/photo-1587547131116-a0655a526190_ofuqve.jpg",
      "https://cdn.snowys.com.au/blog/wp-content/uploads/2021/05/10-Relaxing-around-the-camp-fire.jpg"
    ],
    icon: "⛺"
  }
];

const container = $("#groupsContainer");
const details = $("#groupDetails");

function showGroups() {
  container.empty().show();
  details.hide();

  groups.forEach(g => {
    container.append(`
      <article>
        <span class="icon">${g.icon}</span>
        <h3>${g.title}</h3>
        <button class="viewBtn" data-id="${g.id}">View details</button>
      </article>
    `);
  });
}

$(document).on("click", ".viewBtn", function () {
  const id = $(this).data("id");
  const g = groups.find(x => x.id === id);

  $("#groupTitle").text(g.title);
  $("#groupText").text(g.text);

  const imgContainer = $("#groupImages");
  imgContainer.empty();
  g.images.forEach(src => {
    imgContainer.append(`<img src="${src}">`);
  });

  container.hide();
  details.show();
});

let joinedGroups = {};

$("#joinFromDetails").on("click", function () {
  const title = $("#groupTitle").text();

  joinedGroups[title] = true;

  $("#joinedText").fadeIn();
  $("#joinFromDetails").hide();
  $("#leaveFromDetails").fadeIn();
});

$("#leaveFromDetails").on("click", function () {
  const title = $("#groupTitle").text();

  joinedGroups[title] = false;

  $("#joinedText").hide();
  $("#leaveFromDetails").hide();
  $("#joinFromDetails").fadeIn();
});

function showGroupDetails(group) {
  $("#groupTitle").text(group.title);

  if (joinedGroups[group.title]) {
    $("#joinedText").show();
    $("#joinFromDetails").hide();
    $("#leaveFromDetails").show();
  } else {
    $("#joinedText").hide();
    $("#leaveFromDetails").hide();
    $("#joinFromDetails").show();
  }

  $("#groupDetails").fadeIn();
}


$("#backBtn").on("click", showGroups);

$("#joinFromDetails").on("click", () => alert("U bashkove me grupin! 🎉"));

showGroups();
