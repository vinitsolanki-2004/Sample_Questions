// Sample data for news articles
const newsData = [
    {
      title: "Article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Article 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Article 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more news articles as needed
  ];

  // Function to display news articles
  function displayNews(articles) {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = ""; // Clear previous content

    articles.forEach((article) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
      card.innerHTML = `
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.content}</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>
        `;
      newsContainer.appendChild(card);
    });
  }

  // Initial display of news articles
  displayNews(newsData);

  // Search functionality
  document
    .querySelector("form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const searchTerm = event.target
        .querySelector("input")
        .value.toLowerCase();
      const filteredNews = newsData.filter((article) =>
        article.title.toLowerCase().includes(searchTerm)
      );
      displayNews(filteredNews);
    });