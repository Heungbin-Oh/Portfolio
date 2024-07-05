// Tab Function 
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



