// Get form element
const form = document.getElementById("form");

// Add event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if all fields are valid
  if (form.checkValidity()) {
    const formData = new FormData(form);

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      alert("Successfully submitted!");
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to submit. Please try again.");
    });
  } else {
    // If form is not valid, display error messages
    form.reportValidity();
  }
});

// Add event listener for question input
document.getElementById("question").addEventListener("input", () => {
  document.getElementById("rate").classList.add("hidden");
});

// Add event listener for comment input
document.getElementById("comment").addEventListener("input", () => {
  document.getElementById("rate").classList.add("hidden");
});

// Add event listener for hiring checkbox
document.querySelectorAll('input[name="about"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "Hiring") {
      document.getElementById("rateDiv").style.display = "block";
    } else {
      document.getElementById("rateDiv").style.display = "none";
    }
  });
});

// Function to display navigation list
const displayList = () => {
  const navUl = document.querySelector(".nav__list");
  const btns = document.getElementById("btns");

  if (btns.classList.contains("fa-bars")) {
    btns.classList.remove("fa-bars");
    btns.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btns.classList.remove("fa-times");
    btns.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

// Add event listener for navigation button
const btns = document.getElementById("btns");
btns.addEventListener("click", displayList);

// About part Function 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}