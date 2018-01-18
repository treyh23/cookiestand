'use strict';

var businessHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var storeInfo = document.getElementById('cookiedata');
var storeForm = document.getElementById('cookieform');
var allStores = [];

function Store(custMinHr,custMaxHr,avgSale,storeName) {
  this.custMinHr = custMinHr;
  this.custMaxHr = custMaxHr;
  this.avgSale = avgSale;
  this.cookiesSold = [];
  this.totalCookiesSold = 0;
  this.storeName = storeName;
  allStores.push(this);
}

Store.prototype.generateCookiesSold = function () {
  for(var i = 0; i < businessHours.length; i++) {
    // we are going to invoke the function against the avgSale variable to find how many cookies each customer bought  
    var cookiesSoldPerHour = Math.round(this.randomCustomers() * this.avgSale);
    this.cookiesSold.push (cookiesSoldPerHour);
    this.totalCookiesSold += cookiesSoldPerHour;
  }
};
Store.prototype.randomCustomers = function() {
  return Math.floor (Math.random() * (this.custMaxHr - this.custMinHr)) + this.custMinHr;
};

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  for(var i = 0; i < businessHours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSold[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = 'Total Cookies Sold: ' + this.totalCookiesSold;
  trEl.appendChild(tdEl);

  storeInfo.appendChild(trEl);
};
function header() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Salmon Cookie Store';
  trEl.appendChild(tdEl);
  for(var i = 0; i < businessHours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = businessHours[i];
    trEl.appendChild(tdEl);
  }
  storeInfo.appendChild(trEl);
}

var firstNPike = new Store(23,65,6.3,'First N Pike');
var seaTacAirport = new Store(3, 24, 1.2, 'Sea Tac Airport');
var seattleCenter = new Store(11,38,3.7,'Seattle Center');
var capHill = new Store(20,38,2.3,'Captiol Hill');
var alki = new Store(2,16,4.6,'Alki');

function renderAllStores () {
  for(var i = 0; i < allStores.length; i++) {
    console.log(allStores[i]);
    allStores[i].generateCookiesSold();
    allStores[i].render();
  }
}

function addNewStore(event) {
  event.preventDefault();
  console.log(event.target.shopLocation.value);
  var shopLocation = event.target.shopLocation.value;
  var minCust = event.target.custmin.value;
  var maxCust = event.target.custmax.value;
  var saleAvg = event.target.avgsale.value;

  new Store(minCust,maxCust,saleAvg,shopLocation);

  storeInfo.innerHTML = '';
  header();
  renderAllStores();
}

header();
renderAllStores();

storeForm.addEventListener('submit', addNewStore);
