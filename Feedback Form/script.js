function submitFeedback() {
    var satisfaction = document.querySelector(
      'input[name="satisfaction"]:checked'
    );
    var recommend = document.querySelector(
      'input[name="recommend"]:checked'
    );
    if (satisfaction && recommend) {
      var feedback =
        "Satisfaction: " +
        satisfaction.value +
        "<br>Recommendation: " +
        recommend.value;
      document.getElementById("feedback").innerHTML = feedback;
      document.querySelector(".feedback").style.display = "block";
    } else {
      alert("Please answer all questions.");
    }
  }