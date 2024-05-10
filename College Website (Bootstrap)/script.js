 // Quiz answers
 const quizAnswers = {
    q1: "Paris",
    q2: "Blue whale",
    // Add more answers as needed
  };

  // Function to calculate the score
  function calculateScore(answers) {
    let score = 0;
    for (const question in answers) {
      const selectedAnswer = document.querySelector(
        `input[name=${question}]:checked`
      );
      if (selectedAnswer && selectedAnswer.value === answers[question]) {
        score++;
      }
    }
    return score;
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const score = calculateScore(quizAnswers);
    const progressHeading = document.getElementById("progress-heading");
    const quizScoreDiv = document.getElementById("quiz-score");
    quizScoreDiv.innerHTML = `<p>Your Quiz Score: ${score}</p>`;
    progressHeading.scrollIntoView({ behavior: "smooth" });
  }

  // Event listener for form submission
  const quizForm = document.querySelector("form");
  quizForm.addEventListener("submit", handleSubmit);