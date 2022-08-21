// step 1: create objects
// step 2: write a display function that will take an object
// step 3: invoke the function
const carObject = {
  title: "Car",
  description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
  imgUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  parePerKilo: 5,
  capacity: 4,

}
const bikeObject = {
  title: "Bike",
  description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
  imgUrl: "https://images.unsplash.com/photo-1535050804459-06db46aac01a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  parePerKilo: 2,
  capacity: 2,

}
const busObject = {
  title: "Bus",
  description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
  imgUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  parePerKilo: 3,
  capacity: 20,

}

//array of object
const arr = [carObject, bikeObject, busObject];

// display services

function displayServices(obj) {
  // step-2: access the main section by id
  const mainBody = document.getElementById("main-section");
  const StringObj = JSON.stringify(obj);
  // step-3: create a div element
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card mb-3 d-flex mx-auto mt-4" style="max-width: 800px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${obj.imgUrl} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Transport Moto: ${obj.title}</h5>
          <p class="card-text">${obj.description}</p>
          <p class="card-text"><small class="text-muted">Pare Kilo: ${obj.parePerKilo}</small>
          <small class="text-muted">Capacity: ${obj.capacity}</small>
          </p>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" onclick='handleBooking(${StringObj})' data-bs-toggle="modal" data-bs-target="#exampleModal">
            Take Now
          </button>
        </div>
      </div>
    </div>
  </div>

  `
  mainBody.appendChild(div);
  console.log(mainBody);
}

// create a function for call object 
function objectArr(array) {
  for (let i = 0; i < array.length; i++) {
    displayServices(array[i]);
  }
}
objectArr(arr);

// Modal handle

function handleBooking(object) {
  const stringfied = JSON.stringify(object);
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src=${object.imgUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Transport Moto: ${object.title}</h5>
    <p class="card-text">${object.description}</p>
    <div>
      <p>Fare: <small class=""text-muted id="fare">0</small></p>
      <p>Tax: <small class=""text-muted id="tax">0</small></p>
      <p>Total-cost: <small class=""text-muted id="total-cost">0</small></p>
  </div>
    <div class="d-flex flex-column mt-4 container" role="search">
      <input id="quantity-input" class="form-control m-2" type="number" placeholder="Fare per kilo?" aria-label="Search">
      <input id="distance-input" class="form-control m-2" type="number" placeholder="koy gari jabe?" aria-label="Search">
      <button class="btn btn-outline-success" onclick='calculateCost(${stringfied})' type="submit">Submit</button>
  </div>
</div> 
  </div>
</div>
  `
}


function calculateCost(obj) {
  const quantity = document.getElementById("quantity-input").value;
  const distance = document.getElementById("distance-input").value;

  const fare = document.getElementById("fare");
  const tototalFare = (quantity * distance * obj.parePerKilo).toFixed(2);
  const totalFareNumber = parseFloat(tototalFare);
  fare.innerHTML = totalFareNumber;
  const tax = document.getElementById("tax");
  const totalNumber = (tototalFare * 0.5).toFixed(2);
  const totalTax = parseFloat(totalNumber);
  tax.innerText = totalTax;

  const totalCost = document.getElementById("total-cost");
  const totalCostValue = totalFareNumber + totalTax;
  totalCost.innerText = totalCostValue;
  console.log(obj)
}



// search object 

document.getElementById("btn-search").addEventListener("click", function () {
  const searchValue = document.getElementById("search-input");
  const value = searchValue.value;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (value.toLowerCase() === element.title.toLowerCase()) {
      document.getElementById("main-section").innerText = "";
      displayServices(element);
      return;
    }
  }
  alert("not found");
  searchValue.value = "";
})



