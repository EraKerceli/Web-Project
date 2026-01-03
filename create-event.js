$("#eventForm").on("submit", function (e) {
  e.preventDefault();

  const event = {
    title: $("#title").val(),
    city: $("#city").val(),
    contact: $("#contact").val(),
    date: $("#date").val(),
    maxPeople: $("#maxPeople").val()
  };

  
  let events = JSON.parse(localStorage.getItem("myEvents")) || [];


  events.push(event);

  
  localStorage.setItem("myEvents", JSON.stringify(events));

  
  alert("Eventi u krijua me sukses 🎉");

  
  window.location.href = "my-events.html";
});


$("#contact").on("input", function () {
  this.value = this.value.replace(/[^0-9+]/g, "");
});
