//const { default: Vue } = require("vue");

function Customer(fn, ln, g, pay) {
    this.firstName = fn;
    this.lastName = ln;

    this.gender = g;
    this.payment = pay;
    this.info = function () {
        return this.firstName + ' ' + this.lastName + ' ' + this.gender + ' ' + this.payment;
    };

}


var myElement = document.getElementById("menu");
var myButton = document.getElementById('myButtonID');







for (burger of food) {

    if (burger.stock > 0) {
        if (burger.gluten == false && burger.lactose == false) {

            var checkbox1 = document.createElement("INPUT");
            checkbox1.setAttribute("type", "checkbox");
            checkbox1.name = "checkBurger1";
            var divItem1 = document.createElement("div");
            divItem1.className = "boxa";

            var header = document.createElement("h1");
            var headerValue = document.createTextNode(burger.name)


            var listImg = document.createElement("img");
            listImg.src = burger.img;
            header.appendChild(headerValue);

            divItem1.appendChild(header);


            divItem1.appendChild(checkbox1);
            divItem1.appendChild(listImg);
            var listItem1 = document.createElement("li");
            var listValue1 = document.createTextNode('Contains no gluten or Lactose');
            listItem1.appendChild(listValue1);
            divItem1.appendChild(listItem1);
            var listItem11 = document.createElement("li");
            var listValue11 = document.createTextNode(burger.kCal + ' Kcal');
            listItem11.appendChild(listValue11);
            divItem1.appendChild(listItem11);
            myElement.appendChild(divItem1);




        }
        else if (burger.gluten == true && burger.lactose == true) {


            var divItem4 = document.createElement("div");
            divItem4.className = "boxb";
            var header4 = document.createElement("h1");
            var headerValue4 = document.createTextNode(burger.name)
            var listItem4 = document.createElement("li");
            var listValue4 = document.createTextNode('Gluten' + ' ' + 'Lactose');

            var listImg4 = document.createElement("img");
            listImg4.src = burger.img;
            header4.appendChild(headerValue4);

            divItem4.appendChild(headerValue4);

            divItem4.appendChild(listValue4);
            divItem4.appendChild(listImg4);
            listItem4.appendChild(listValue4);
            divItem4.appendChild(listItem4);
            myElement.appendChild(divItem4);

        }
        else if (burger.gluten) {


            var checkbox2 = document.createElement("INPUT");
            checkbox2.setAttribute("type", "checkbox");
            checkbox2.name = "checkBurger2";
            var divItem2 = document.createElement("div");
            divItem2.className = "boxb";
            var header = document.createElement("h1");
            var headerValue = document.createTextNode(burger.name)
            var listItem2 = document.createElement("li");
            var listValue2 = document.createTextNode('Gluten' + ' ' + 'Lactose');
            var listItem3 = document.createElement("li");
            var listValue3 = document.createTextNode('Kcal ' + burger.kCal);

            var listImg = document.createElement("img");
            listImg.src = burger.img;
            header.appendChild(headerValue);

            divItem2.appendChild(header);

            divItem2.appendChild(checkbox2);
            divItem2.appendChild(listImg);
            listItem2.appendChild(listValue2);
            divItem2.appendChild(listItem2);
            listItem3.appendChild(listValue3);
            divItem2.appendChild(listItem3);
            myElement.appendChild(divItem2);


        }
        else if (burger.lactose) {
            var checkbox3 = document.createElement("INPUT");
            checkbox3.setAttribute("type", "checkbox");
            checkbox3.name = "checkBurger3";

            var listItem3 = document.createElement("li");
            var listValue3 = document.createTextNode(burger.name + ' ' + 'Lactose');

            listItem3.appendChild(listValue3);

            var divItem3 = document.createElement("div");
            divItem3.className = "boxc";
            var header = document.createElement("h1");
            var headerValue = document.createTextNode(burger.name)
            var listItem3 = document.createElement("li");
            var listValue3 = document.createTextNode('Lactose');

            var listImg = document.createElement("img");
            listImg.src = burger.img;
            header.appendChild(headerValue);

            divItem3.appendChild(header);
            divItem3.appendChild(checkbox3);
            divItem3.appendChild(listImg);
            listItem3.appendChild(listValue3);
            divItem3.appendChild(listItem3);
            var listItem31 = document.createElement("li");
            var listValue31 = document.createTextNode(burger.kCal + ' Kcal');
            listItem31.appendChild(listValue31);
            divItem3.appendChild(listItem31);
            myElement.appendChild(divItem3);
        }
    }





}
myButton.addEventListener("click", customerInfo);


function customerInfo() {
    var gender = 'Non disclosed'
    var male = document.getElementById("male");

    var female = document.getElementById("female");

    var other = document.getElementById("other");

    var i = 0;
    for (i; i < 3; i++) {
        //var gender = 'other';
        if (male.checked == true) { gender = "male" }
        else if (female.checked == true) { gender = "female" }
        else if (other.checked == true) { gender = "other" }
    }
    if (gender = 'Non disclosed') {
        var cus = new Customer(document.getElementById('firstname').value, document.getElementById('lastname').value, 'gender:non disclosed', document.getElementById('payment').value);
    }
    else {
        var cus = new Customer(document.getElementById('firstname').value, document.getElementById('lastname').value, document.getElementById(gender).value, document.getElementById('payment').value);
    }
    var cusArray = [{ 'name': cus.firstName + ' ' + cus.lastName, 'gender': cus.gender, 'payment': cus.payment }];

    console.log(cusArray);

    var customerInformation = document.getElementById('orders');
    var divCusInfo = document.createElement("div");
    for (info of cusArray) {
       
        var orderedInfoText = document.createTextNode(info.name + ' ' + info.gender + ' ' + info.payment);
        console.log(document.createTextNode(info.name + ' ' + info.gender + ' ' + info.payment))
    }
    divCusInfo.appendChild(orderedInfoText);
    customerInformation.appendChild(divCusInfo);



    hamburgerCheck();


    this.array = function () {
        return cusArray;
    }
}

//var c = new customerInfo();
//console.log(c.array.name)
function hamburgerCheck() {
    var orderedID = document.getElementById("orders");
    console.log(myElement.children)
    if (myElement.children[3].childNodes[1].checked == true) {
        console.log(myElement.children[3].childNodes[0].textContent);
        var divordered1 = document.createElement("div");

        var orderedtext1 = document.createTextNode(myElement.children[3].childNodes[0].textContent);
        divordered1.appendChild(orderedtext1);
        orderedID.appendChild(divordered1);

    }
    if (myElement.children[4].childNodes[1].checked == true) {
        console.log(myElement.children[4].childNodes[0].textContent)
        var divordered2 = document.createElement("div");

        var orderedtext2 = document.createTextNode(myElement.children[4].childNodes[0].textContent);
        divordered2.appendChild(orderedtext2);
        orderedID.appendChild(divordered2);

    }
    if (myElement.children[5].childNodes[1].checked == true) {
        console.log(myElement.children[5].childNodes[0].textContent)
        var divordered3 = document.createElement("div");

        var orderedtext3 = document.createTextNode(myElement.children[5].childNodes[0].textContent);
        divordered3.appendChild(orderedtext3);
        orderedID.appendChild(divordered3);

    }

}
