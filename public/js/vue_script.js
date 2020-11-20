//const { default: Vue } = require("vue");

var vm = new Vue({

  el: '#ording',
  data: {
    cus: '',
    burgerOrder: '',
    brg: ''

  },
  methods: {
    markDone: function () {
      var myElement2 = document.getElementById("ording");
      
      if (document.getElementById('male').checked == true) {
        this.cus = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ' ' + document.getElementById('payment').value + ' ' + 'male'
        //console.log(document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ' ' + document.getElementById('payment').value + ' ' + 'male'  )
      }
      else if (document.getElementById('female').checked == true) {
        this.cus = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + ' ' + document.getElementById('payment').value + ' ' + 'female'
      }
      else if (document.getElementById('other').checked == true) {
        this.cus = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value  + ' ' + document.getElementById('payment').value + ' ' + 'other'
      }
      if ( document.getElementById("brg1").checked==true){
        var listBrg1 = document.createElement("li");
      var listBrgVal1 = document.createTextNode(document.getElementById("brg1").value);
      console.log(document.getElementById("brg1").value)
      listBrg1.appendChild(listBrgVal1)
      myElement2.appendChild(listBrg1)
      //  this.brg +=' '+ document.getElementById("brg1").value 
    }
     if ( document.getElementById("brg2").checked==true){
      //this.brg += ' '+document.getElementById("brg2").value
      var listBrg2 = document.createElement("li");
      var listBrgVal2 = document.createTextNode(document.getElementById("brg2").value);
      listBrg2.appendChild(listBrgVal2)
      myElement2.appendChild(listBrg2)
    }
       if ( document.getElementById("brg3").checked==true){
        //this.brg +=' '+  document.getElementById("brg3").value
        var listBrg3 = document.createElement("li");
      var listBrgVal3 = document.createTextNode(document.getElementById("brg3").value);
      listBrg3.appendChild(listBrgVal3)
      myElement2.appendChild(listBrg3)
      }
      //this.burgerOrder = document.getElementById()

    },

  }
})

var vm = new Vue({
  el: '#b1',
  data: {
    burgers: food
    ,
    cus: "d"
    ,

  },
  method: function () {


  }
}
)
var p = new Vue({
  el: '#b2',
  data: {
    burgers: food
    ,
    cus: "d"
    ,
  },
  method: function () {

  }
})
var q = new Vue({
  el: '#b3',
  data: {
    burgers: food
    ,
    cus: "d"
    ,
  },
  method: function () {

  }
})
/*
var vm = new Vue({
  el: '#dots',
  data: {
    orders: {},
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
      var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
                                           y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
                                orderItems: ["Beans", "Curry"]
                              });
    }
  }
});
*/