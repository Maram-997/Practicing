'use strict';
let drinks = [];

function Drink (costName, PhoneNum, kind, quantity, size, image){
    this.costName= costName;
    this.PhoneNum= PhoneNum;
    this.kind =kind;
    this.quantity = quantity;
    this.size = size;
    this.image =  `img/${kind}.jpg`;
    drinks.push(this);
}

let myFormEl = document.getElementById('myForm');
myFormEl.addEventListener('submit', generateForm);

function generateForm(event){
    event.preventDefault();
    let costmer = event.target.costName.value;
    let costPhoneNumber = event.target.PhoneNum.value;
    let drinkKind = event.target.kind.value;
    let drinkQuantity = event.target.quantity.value;
    let drinkSize = event.target.size.value;
        new Drink (costmer, costPhoneNumber, drinkKind, drinkQuantity, drinkSize)

        tableFill();
        setInLocalStorage();
}
let bodytable = document.getElementById('tableBody')

function tableFill(){
    bodytable.textContent = "";
    for(let i = 0; i < drinks.length; i++){
         let trEl = document.createElement('tr');
         bodytable.appendChild(trEl);
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = drinks[i].costName; 

        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1);
        tdEl1.textContent = drinks[i].PhoneNum;  

        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = drinks[i].kind;

        let tdEl3 = document.createElement('td');
        trEl.appendChild(tdEl3);
        tdEl3.textContent = drinks[i].quantity;

        let tdEl4 = document.createElement('img');
        trEl.appendChild(tdEl4);
        tdEl4.setAttribute('src', drinks[i].image);
    }
}

function setInLocalStorage(){
    let data = JSON.stringify(drinks);
    localStorage.setItem('stored' , data);
}

function getFromLocalStorage(){
    let convertedData = localStorage.getItem('stored');
    let storedData = JSON.parse(convertedData);
    if( storedData !== null){
        storedData = drinks;
    }
}
getFromLocalStorage();