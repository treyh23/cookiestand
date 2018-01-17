'use strict';

var businessHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var storeInfo = document.getElementById('cookiedata');

var allStores = [];

function Store(custMinHr,custMaxHr,avgSale,cookiesSold,totalCookiesSold) {
  this.custMinHr = custMinHr;
  this.custMaxHr = custMaxHr;
  this.avgSale = avgSale;
  this.cookiesSold = [];
  this.totalCookiesSold = 0;
  allStores.push(this);
}
Store.protoype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.custMinHr;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.custMinhr;
  trEl.appendChild(trEl);

  tdEl = document.createElement('td');
  tdEl.textContent - this.custMaxHr;
  trEl.appendChild(trEl);

  tdEl = document.createElement('td');
  tdEl.textContent - this.avgSale;
  trEl.appendChild(trEl);

  tdEl = document.createElement('td');
  tdEl.textContent - this.cookiesSold;
  trEl.appendChild(trEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesSold;

  storeInfo.appendChild(tdEl);
};
var firstNPike = {
  custMinHr: 23,
  custMaxHr: 65,
  avgSale: 6.3,
  cookiesSold: [],
  totalCookiesSold: 0,
  render: function() {
    console.log(this.cookiesSold);
    var ulEl = document.getElementById('1npike');
    for(var i = 0; i < businessHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ': ' + this.cookiesSold[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total Cookies Sold: ' + this.totalCookiesSold;
    ulEl.appendChild(liEl);
  },
  randomCustomers: function() {
    return Math.floor (Math.random() * (this.custMaxHr - this.custMinHr)) + this.custMinHr; 
  },
  generateCookiesSold: function () {
    for(var i = 0; i < businessHours.length; i++) {
      // we are going to invoke the function against the avgSale variable to find how many cookies each customer bought  
      var cookiesSoldPerHour = Math.round(this.randomCustomers() * this.avgSale);
      this.cookiesSold.push (cookiesSoldPerHour);
      this.totalCookiesSold += cookiesSoldPerHour;
    }
  },
};

firstNPike.generateCookiesSold();
firstNPike.render();


var seaTac = {
  custMinHr: 3,
  custMaxHr: 24,
  avgSale: 1.2,
  cookiesSold: [],
  totalCookiesSold: 0,
  render: function() {
    var ulEl = document.getElementById('seatac');
    for(var i = 0; i < businessHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ': ' + this.cookiesSold[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total Cookies Sold: ' + this.totalCookiesSold;
    ulEl.appendChild(liEl); 
  },
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.custMaxHr - this.custMinHr));
  },
  generateCookiesSold: function() {
    for(var i = 0; i < businessHours.length; i++) {
      var cookiesSoldPerHour = Math.round(this.randomCustomers() * this.avgSale);
      this.cookiesSold.push (cookiesSoldPerHour);
      this.totalCookiesSold += cookiesSoldPerHour;
    }
  },
};

seaTac.generateCookiesSold();
seaTac.render();

var seattleCenter = {
  custMinHr: 11,
  custMaxHr: 38,
  avgSale: 3.7,
  cookiesSold: [],
  totalCookiesSold: 0,
  render: function() {
    var ulEl = document.getElementById('seacent');
    for(var i = 0; i < businessHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ': ' + this.cookiesSold[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total Cookies Sold: ' + this.totalCookiesSold;
    ulEl.appendChild(liEl);
  },
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.custMaxHr - this.custMinHr));
  },
  generateCookiesSold: function() {
    for(var i = 0; i < businessHours.length; i++) {
      var cookiesSoldPerHour = Math.round(this.randomCustomers() * this.avgSale);
      this.cookiesSold.push (cookiesSoldPerHour);
      this.totalCookiesSold += cookiesSoldPerHour;
    }
  },
};

seattleCenter.generateCookiesSold();
seattleCenter.render();

var capHill = {
  custMinHr: 20,
  custMaxHr: 38,
  avgSale: 2.3,
  cookiesSold: [],
  totalCookiesSold: 0,
  render: function() {
    var ulEl = document.getElementById('caphill');
    for(var i = 0; i < businessHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ': ' + this.cookiesSold[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total Cookies Sold: ' + this.totalCookiesSold;
    ulEl.appendChild(liEl);
  },
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.custMaxHr - this.custMinHr));
  },
  generateCookiesSold: function() {
    for(var i = 0; i < businessHours.length; i++) {
      var cookiesSoldPerHour = Math.round(this.randomCustomers() * this.avgSale);
      this.cookiesSold.push (cookiesSoldPerHour);
      this.totalCookiesSold += cookiesSoldPerHour;
    }
  },
};

capHill.generateCookiesSold();
capHill.render();
//wahts up
// comment two
var alki = {
  custMinHr: 2,
  custMaxHr: 16,
  avgSale: 4.6,
  cookiesSold: [],
  totalCookiesSold: 0,
  render: function() {
    var ulEl = document.getElementById('alki');
    for(var i = 0; i < businessHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ': ' + this.cookiesSold[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total Cookies Sold: ' + this.totalCookiesSold;
    ulEl.appendChild(liEl);
  },
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.custMaxHr - this.custMinHr));
  },
  generateCookiesSold: function() {
    for(var i = 0; i < businessHours.length; i++) {
      var cookiesSoldPerHour = Math.round(this.randomCustomers() * this.avgSale);
      this.cookiesSold.push (cookiesSoldPerHour);
      this.totalCookiesSold += cookiesSoldPerHour;
    }
  },
};

alki.generateCookiesSold();
alki.render();