// Check for saved theme preference in localStorage and apply
window.onload = function() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeSwitch").checked = true;
  }
};

// Toggle theme
document.getElementById("themeSwitch").addEventListener("change", function() {
  if (this.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// Trigger image animation when the page loads
window.setTimeout(() => {
  document.getElementById("animImage").classList.add("showImage");
}, 1000);

// Button click animation
document.getElementById("startBtn").addEventListener("click", function() {
  alert("The animation has started!");
});

// Hover effect for button
document.getElementById("hoverBtn").addEventListener("mouseover", function() {
  this.style.backgroundColor = "#16a085";
  this.style.transform = "scale(1.1)";
});

document.getElementById("hoverBtn").addEventListener("mouseout", function() {
  this.style.backgroundColor = "#3498db";
  this.style.transform = "scale(1)";
});

// Save user preference on button click
document.getElementById("saveBtn").addEventListener("click", function() {
  localStorage.setItem("userPreference", "Button clicked!");
  document.getElementById("savedMessage").textContent = "Theme preference saved!";
});

// Trigger animation on the box when the button is clicked
document.getElementById("startBtn").addEventListener("click", function() {
  const box = document.getElementById("animateBox");
  box.classList.add("animate"); // Add class to trigger the animation

  // Optionally, you can set a timeout to reset the box animation after it finishes
  setTimeout(function() {
    box.classList.remove("animate"); // Reset animation after 2 seconds
  }, 2000); // 2000ms = 2 seconds
});
