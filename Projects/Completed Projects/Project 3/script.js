// This code was developed using suggestions from the API documentation, here:
// https://ipgeolocation.io/ip-location-api.html#Free

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.ipgeolocation.io/v2/ipgeo?apiKey=123abc", requestOptions)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(result => {
    const tableBody = document.getElementById("geo-info-body");
    tableBody.innerHTML = '';

    // Configure the expected data, plus "N/A" in case some data doesn't populate.
    const data = [
      { label: "IP", value: result.ip || "N/A" },
      { label: "Country", value: result.location.country_name || "N/A" },
      { label: "Region", value: result.location.state_prov || "N/A" },
      { label: "City", value: result.location.city || "N/A" },
      { label: "Zip Code", value: result.location.zipcode || "N/A" },
      { label: "Latitude", value: result.location.latitude || "N/A" },
      { label: "Longitude", value: result.location.longitude || "N/A" },
      { label: "Continent", value: result.location.continent_name || "N/A" },
      { label: "Currency", value: `${result.currency.name} (${result.currency.code})` || "N/A" },
      { label: "Calling Code", value: result.country_metadata.calling_code || "N/A" },
      { label: "Languages", value: result.country_metadata.languages.join(", ") || "N/A" }
    ];

    // Populate the table with the response data.
    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${item.label}</td><td>${item.value}</td>`;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
