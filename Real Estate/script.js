document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const propertyCards = document.querySelectorAll(".property-card");

    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.trim().toLowerCase();

      propertyCards.forEach(function (card) {
        const propertyTitle = card
          .querySelector(".card-title")
          .textContent.trim()
          .toLowerCase();
        const propertyDescription = card
          .querySelector(".card-text")
          .textContent.trim()
          .toLowerCase();

        if (
          propertyTitle.includes(searchTerm) ||
          propertyDescription.includes(searchTerm)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });