"use strict";

const selection = document.querySelector("#search-bar");
const matchingParksTblBody = document.querySelector("#matching-parks-tbl-body");
let defaultOption = new Option("Please Select A Search Type");

function loadOptionsInDDL() {
  matchingParksTblBody.innerHTML = "";
  const searchByRadio = document.querySelector(
    "input[name='search-by']:checked"
  );
  if (searchByRadio == null) return;
  selection.innerHTML = "";
  if (searchByRadio.value == "location") {
    locationsArray.forEach((location) => {
      let locationOptions = new Option(location);
      selection.appendChild(locationOptions);
    });
  }
  if (searchByRadio.value == "type") {
    parkTypesArray.forEach((parkType) => {
      let parkTypeOptions = new Option(parkType);
      selection.appendChild(parkTypeOptions);
    });
  } else {
    selection.appendChild(defaultOption);
  }
}

function buildParkRow(tbody, park) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  if (!park.LocationName) {
    park.LocationName = "N/A";
  }
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell(1);
  if (park.Address == 0) {
    park.Address = "N/A";
  }
  cell2.innerText = park.Address;

  let cell3 = row.insertCell(2);
  if (park.City == 0) {
    park.City = "N/A";
  }
  cell3.innerText = park.City;

  let cell4 = row.insertCell(3);
  if (park.State == 0) {
    park.State = "N/A";
  }
  cell4.innerText = park.State;

  let cell5 = row.insertCell(4);
  if (park.ZipCode == 0) {
    park.ZipCode = "N/A";
  }
  cell5.innerText = park.ZipCode;

  let cell6 = row.insertCell(5);
  if (park.Phone === 0) {
    park.Phone = "N/A";
  }
  cell6.innerText = park.Phone;

  let cell7 = row.insertCell(6);
  cell7.innerHTML = "";
  if (park.Visit) {
    cell7.innerHTML = `<a href="${park.Visit}">${park.Visit}</a>`;
  }
}

//searching array for matching parks
function findMatchingParks() {
  return nationalParksArray.filter((p) => p.State == selection.value);
}

function displayMatchingParks(matchingParks) {
  matchingParksTblBody.innerHTML = "";
  for (let i = 0; i < matchingParks.length; i++) {
    buildParkRow(matchingParksTblBody, matchingParks[i]);
  }
}

function filterAndDisplay() {
  matchingParksTblBody.innerHTML = "";
  let filteredParks = findMatchingParks();
  displayMatchingParks(filteredParks);
}
