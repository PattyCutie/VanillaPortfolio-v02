//Hero Section
fetch("data/herodata.json")
  .then((response) => response.json())
  .then((data) => {
    // Access the herodata object
    const herodata = data.herodata;

    // Populate the HTML elements with the data
    document.getElementById("heroFullName").textContent = herodata.fullName;
    document.getElementById("heroJobPosition").textContent =
      herodata.jobPosition;
  })
  .catch((error) => {
    console.log("Error fetching JSON data:", error);
  });

//About Section
