//Hero Section
fetch("herodata.json")
  .then((response) => response.json())
  .then((data) => {
    // Access the herodata object
    const herodata = data.herodata;

    // Populate the HTML elements with the data
    document.getElementById("fullName").textContent = herodata.fullName;
    document.getElementById("herodescription").textContent = herodata.description;
  })
  .catch((error) => {
    console.log("Error fetching JSON data:", error);
  });

//About Section
