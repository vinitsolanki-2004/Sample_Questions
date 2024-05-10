var originalProjects = ["Project 1", "Project 2", "Project 3"];
      var projects = originalProjects.slice(); // Copy the original projects array

      function changeProjects() {
        var newProjects = ["New Project 1", "New Project 2", "New Project 3"];
        var projectsList = document.getElementById("projects-list");
        projectsList.innerHTML = ""; // Clear existing projects
        newProjects.forEach(function (project) {
          var listItem = document.createElement("li");
          listItem.textContent = project;
          projectsList.appendChild(listItem);
        });
        projects = newProjects;
      }

      function resetProjects() {
        var projectsList = document.getElementById("projects-list");
        projectsList.innerHTML = ""; // Clear existing projects
        originalProjects.forEach(function (project) {
          var listItem = document.createElement("li");
          listItem.textContent = project;
          projectsList.appendChild(listItem);
        });
        projects = originalProjects.slice(); // Reset the projects array
      }