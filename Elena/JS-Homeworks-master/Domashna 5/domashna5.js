const buttonElement = document.getElementById("addRowBtn")


function addRow() {
    const tableRow = document.getElementById("sampleTable");
    const row = tableRow.insertRow(tableRow.lenght);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
     cell1.innerHTML = "New Row Cell1";
     cell2.innerHTML = "New Row Cell2";
    }

buttonElement.onclick = () => {
  addRow()
};