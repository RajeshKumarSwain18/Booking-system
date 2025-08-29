// Show selected section
function showSection(sectionId) {
  document.querySelectorAll(".booking-section").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

// Handle booking
function bookNow(event, type) {
  event.preventDefault();
  alert(type + " booking successful ✅");
  event.target.reset();
}