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


// Add event listener for navigation button
const btns = document.getElementById("btns");
btns.addEventListener("click", displayList);

// About part Function 

function opentab(sectionId, tabname) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const tablinks = section.querySelectorAll(".tab-links");
  const tabcontents = section.querySelectorAll(".tab-contents");

  tablinks.forEach(tablink => tablink.classList.remove("active-link"));
  tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

  const selectedTabLink = section.querySelector(`.tab-links[data-tab="${tabname}"]`);
  const selectedTab = section.querySelector(`#${tabname}`);

  if (selectedTabLink && selectedTab) {
    selectedTabLink.classList.add("active-link");
    selectedTab.classList.add("active-tab");
  }
}



