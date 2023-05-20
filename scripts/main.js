"use strict";
function buildActivityRow(tbody, activity) {
    let row = tbody.insertRow(-1);
  
    let cell1 = row.insertCell(0);
    cell1.innerText = activity.name;
  
    let cell2 = row.insertCell(1);
    cell2.innerText = activity.description;
  
    let cell3 = row.insertCell(2);
    cell3.innerText = "$" + activity.price.toFixed(2);
  
    let cell4 = row.insertCell(3);
    cell4.innerText = activity.location;
  
    let cell5 = row.insertCell(4);
    cell5.innerText = activity.id;
  }