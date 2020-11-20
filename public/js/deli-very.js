/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#cusInfo',
  data: {
    orders: {},
    orderList: {},
    Info:{},
    cus: {},
    brgs: {}
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;

    }.bind(this));
    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));


  },
  methods: {
    getNext: function () {


      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function () {
      this.orderList[0].orderId = this.getNext();
      this.orderList[0].customer = this.cus;
      this.orderList[0].orderItems = this.brgs;
      this.orderList[0].customerInfo=this.Info;
      socket.emit("addOrder", this.orderList[0]);
      //socket.emit("addOrder", { orderId: this.getNext(),
      // details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
      //            y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
      // orderItems: ["Beans", "Curry"] 
      //});
      //console.log(orderItems);


    }
    ,
    displayOrder: function (event) {

      var offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      var newOrder = {
        orderId: undefined,

        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y
        },
        customer: {},
        orderItems: [],
      };
      //disp:set

      this.orderList = [newOrder];
      //console.log()
      //this.cusInfo()
      //  this.addOrder();


    },
    cusInfo: function () {
      var myElement2 = document.getElementById("cusInfo");

      if (document.getElementById('male').checked == true) {
        this.cus = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ' ' + document.getElementById('payment').value + ' ' + 'male'
        //console.log(document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ' ' + document.getElementById('payment').value + ' ' + 'male'  )

      }
      else if (document.getElementById('female').checked == true) {
        this.cus = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ' ' + document.getElementById('payment').value + ' ' + 'female'
      }
      else if (document.getElementById('other').checked == true) {
        this.cus = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ' ' + document.getElementById('payment').value + ' ' + 'other'
      }
      this.brgs = new burgers();

      if (document.getElementById("brg1").checked == true) {

        var listBrg1 = document.createElement("li");
        var listBrgVal1 = document.createTextNode(document.getElementById("brg1").value);
        //console.log(document.getElementById("brg1").value)
        listBrg1.appendChild(listBrgVal1)
        myElement2.appendChild(listBrg1)
        //  this.brg +=' '+ document.getElementById("brg1").value 
      }
      if (document.getElementById("brg2").checked == true) {
        //this.brg += ' '+document.getElementById("brg2").value

        var listBrg2 = document.createElement("li");
        var listBrgVal2 = document.createTextNode(document.getElementById("brg2").value);
        listBrg2.appendChild(listBrgVal2)
        myElement2.appendChild(listBrg2)
      }
      if (document.getElementById("brg3").checked == true) {
        //this.brg +=' '+  document.getElementById("brg3").value

        var listBrg3 = document.createElement("li");
        var listBrgVal3 = document.createTextNode(document.getElementById("brg3").value);
        listBrg3.appendChild(listBrgVal3)
        myElement2.appendChild(listBrg3)
      }
      this.Info=new customer();
      //this.burgerOrder = document.getElementById()

      //this.addOrder();
    },

  }
});
function burgers() {
  var brgs = [];
  if (document.getElementById("brg1").checked == true) {
    brgs.push(document.getElementById("brg1").value);
  }
  if (document.getElementById("brg2").checked == true) {
    brgs.push(document.getElementById("brg2").value);
  } if (document.getElementById("brg3").checked == true) {
    brgs.push(document.getElementById("brg3").value);
  }
  return brgs;

}
function customer() {
  var customerInfo = { name: "", email: "", gender: "", payment: "" };
  customerInfo.name = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value;
  customerInfo.email = document.getElementById('email').value;
  customerInfo.payment = document.getElementById('payment').value;
  if (document.getElementById('male').checked == true) {
    customerInfo.gender = document.getElementById('male').value;
  }
  if (document.getElementById('female').checked == true) {
    customerInfo.gender = document.getElementById('female').value;
  }
  if (document.getElementById('other').checked == true) {
    customerInfo.gender = document.getElementById('other').value;
  }
  return customerInfo;
}