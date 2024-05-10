function checkAnswer(selectedOption) {
    var question = selectedOption.closest(".question");
    var correctAnswer = selectedOption.value;

    // Remove previous feedback
    question.querySelectorAll("label").forEach(function (label) {
      label.classList.remove("correct", "incorrect");
    });

    // Add class to indicate correct or incorrect answer
    if (correctAnswer === "Paris" || correctAnswer === "Jupiter") {
      selectedOption.parentElement.classList.add("correct");
    } else {
      selectedOption.parentElement.classList.add("incorrect");
    }

    calculateScore();
  }

  function calculateScore() {
    var score = 0;
    var questions = document.querySelectorAll(".question");

    questions.forEach(function (question) {
      var selectedOption = question.querySelector(
        'input[type="radio"]:checked'
      );
      if (selectedOption) {
        var correctAnswer = selectedOption.value;
        if (
          (question.id === "question1" && correctAnswer === "Paris") ||
          (question.id === "question2" && correctAnswer === "Jupiter")
        ) {
          score++;
        }
      }
    });

    var resultElement = document.getElementById("result");
    resultElement.textContent =
      "You scored " + score + " out of " + questions.length + ".";
  }

  function resetQuiz() {
    var questions = document.querySelectorAll(".question");

    questions.forEach(function (question) {
      question.querySelectorAll("label").forEach(function (label) {
        label.classList.remove("correct", "incorrect");
        label.querySelector('input[type="radio"]').checked = false;
      });
    });

    var resultElement = document.getElementById("result");
    resultElement.textContent = "";
  }