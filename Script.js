let txtNAMA = document.getElementById("nama");
let txtEMAIL = document.getElementById("email");
let txtTESTIMONI = document.getElementById("testimoni");
let CARD = document.getElementById("cardOutput");
let data = [];

function tampil() {
  CARD.innerHTML = "";
  data.forEach(CARD_OUTPUT);

  let output = JSON.parse(localStorage.getItem("LSData"));
  output.forEach(CARD_OUTPUT);
}

function simpan() {
  console.log("SAVED!");
  console.log(txtNAMA.value);
  console.log(txtEMAIL.value);
  console.log(txtTESTIMONI.value);

  if (localStorage.getItem("LSData") === null) {
    //save obj to arr data
    data.push({ nama: txtNAMA.value, email: txtEMAIL.value, testimoni: txtTESTIMONI.value });
    // if ls not available
    localStorage.setItem("LSData", JSON.stringify(data));
  } else {
    //if key and ls available
    //get data in ls with key LSData

    let dataLS = JSON.parse(localStorage.getItem("LSData"));
    console.log(dataLS);
    //push data to arr
    dataLS.push({ nama: txtNAMA.value, email: txtEMAIL.value, testimoni: txtTESTIMONI.value });
    //save new data to ls
    localStorage.setItem("LSData", JSON.stringify(dataLS));
  }

  tampil();
}

function CARD_OUTPUT(item, index) {
  CARD.innerHTML += `
  <table>
    <tbody>
      <tr>
        <td>${item.nama}</td>
      </tr>
      <tr>
        <td>${item.email}</td>
      </tr>
      <tr>
        <td>${item.testimoni}</td>
      </tr>
    </tbody>
  </table>`;
}
