function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation").value;

  if (recommendation) {
    let newElement = document.createElement("div");
    newElement.className = "recommendation";
    newElement.innerHTML = `<span>&#8220;</span> ${recommendation} <span>&#8221;</span>`;
    
    document.getElementById("all_recommendations").appendChild(newElement);
    
    // Clear the textarea
    document.getElementById("new_recommendation").value = "";

    // ✅ This line shows the popup
    showPopup(true);
  }
}
