var xcount=0;
    var ocount=0;
    var ck=0;
    var divX=document.getElementById("X");
    var divO=document.getElementById("O");
    var table = document.getElementById("table");
    var div1=document.getElementById("div1");
    var main=document.getElementById("main");
    function Start() {
        
      table.onclick = fun
      var getCount = (function () {
        var count = 0;
        return function counter() {
          count++;
          return count;
        }
      })();
      function fun(event) {
        var x = getCount();
        var td = event.target;

        if (x % 2 == 0) {
          td.innerHTML = "X";
          ck++;
        }
        else {
          td.innerHTML = "O";
          ck++;
        }
      }
    }

    function check() {
        
      b1 = document.getElementById("b1").innerHTML;
      b2 = document.getElementById("b2").innerHTML;
      b3 = document.getElementById("b3").innerHTML;
      b4 = document.getElementById("b4").innerHTML;
      b5 = document.getElementById("b5").innerHTML;
      b6 = document.getElementById("b6").innerHTML;
      b7 = document.getElementById("b7").innerHTML;
      b8 = document.getElementById("b8").innerHTML;
      b9 = document.getElementById("b9").innerHTML;
      
      if ((b1 == "X" && b2 == "X" && b3 == "X") || (b1 == "X" && b4 == "X" && b7 == "X") || (b1 == "X" && b5 == "X" && b9 == "X") || (b3 == "X" && b6 == "X" && b9 == "X") || (b7 == "X" && b8 == "X" && b9 == "X") || (b4 == "X" && b5 == "X" && b6 == "X") || (b2 == "X" && b5 == "X" && b8 == "X") || (b3 == "X" && b5 == "X" && b7 == "X")) {
        xcount++;
        div1.innerHTML="X is winner";
        divX.innerHTML="X &nbsp;&nbsp;&nbsp;"+xcount;
        table.onclick= function(){};
      }
      else if ((b1 == "O" && b2 == "O" && b3 == "O") || (b1 == "O" && b4 == "O" && b7 == "O") || (b1 == "O" && b5 == "O" && b9 == "O") || (b3 == "O" && b6 == "O" && b9 == "O") || (b7 == "b1" && b8 == "O" && b9 == "O") || (b4 == "O" && b5 == "O" && b6 == "0") || (b2 == "O" && b5 == "O" && b8 == "O") || (b3 == "O" && b5 == "O" && b7 == "O")) {
        ocount++;
        div1.innerHTML="O is winner";
        divO.innerHTML="O &nbsp;&nbsp;&nbsp;"+ocount;
        table.onclick= function(){};
      }
     else if(ck==9){
        div1.innerHTML="drow Match"
     } 
    }
    function funClear() {
      document.getElementById("b1").innerHTML = "";
      document.getElementById("b2").innerHTML = "";
      document.getElementById("b3").innerHTML = "";
      document.getElementById("b4").innerHTML = "";
      document.getElementById("b5").innerHTML = "";
      document.getElementById("b6").innerHTML = "";
      document.getElementById("b7").innerHTML = "";
      document.getElementById("b8").innerHTML = "";
      document.getElementById("b9").innerHTML = "";
      
      Start();
      ck=0;
      div1.innerHTML="";
    }
