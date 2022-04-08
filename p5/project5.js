        var i = 0;
var txt = 'Not Found<br>Requested file was not found';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

 var o = 0;
var txt1 = 'Request had bad syntax or was impossible to fulfill';
var speed = 50;
function typeWriter1() {
  if (o < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(o);
    o++;
    setTimeout(typeWriter1, speed);
  }
}

 var p = 0;
var txt2 = 'User failed to provide a valid user name/password required for access to a file/directory';
var speed = 50;
function typeWriter2() {
  if (p < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(p);
    p++;
    setTimeout(typeWriter2, speed);
  }
}

 var a = 0;
var txt3 = 'Not Acceptable';
var speed = 50;
function typeWriter3() {
  if (a < txt3.length) {
    document.getElementById("demo3").innerHTML += txt3.charAt(a);
    a++;
    setTimeout(typeWriter3, speed);
  }
}

 var b = 0;
var txt4 = 'Proxy Authentication Required';
var speed = 50;
function typeWriter4() {
  if (b < txt4.length) {
    document.getElementById("demo4").innerHTML += txt4.charAt(b);
    b++;
    setTimeout(typeWriter4, speed);
  }
}

 var c = 0;
var txt5 = 'Request Time-Out';
var speed = 50;
function typeWriter5() {
  if (c < txt5.length) {
    document.getElementById("demo5").innerHTML += txt5.charAt(c);
    c++;
    setTimeout(typeWriter5, speed);
  }
}

 var d = 0;
var txt6 = 'Conflict';
var speed = 50;
function typeWriter6() {
  if (d < txt6.length) {
    document.getElementById("demo6").innerHTML += txt6.charAt(d);
    d++;
    setTimeout(typeWriter6, speed);
  }
}

var e = 0;
var txt7 = 'Gone';
var speed = 50;
function typeWriter7() {
  if (e < txt7.length) {
    document.getElementById("demo7").innerHTML += txt7.charAt(e);
    e++;
    setTimeout(typeWriter7, speed);
  }
}

var f = 0;
var txt8 = 'Length Required';
var speed = 50;
function typeWriter8() {
  if (f < txt8.length) {
    document.getElementById("demo8").innerHTML += txt8.charAt(f);
    f++;
    setTimeout(typeWriter8, speed);
  }
}

var g = 0;
var txt9 = 'Precondition Failed';
var speed = 50;
function typeWriter9() {
  if (g< txt9.length) {
    document.getElementById("demo9").innerHTML += txt9.charAt(g);
    g++;
    setTimeout(typeWriter9, speed);
  }
}

var h = 0;
var txt10 = 'Precondition Failed';
var speed = 50;
function typeWriter10() {
  if (h< txt10.length) {
    document.getElementById("demo10").innerHTML += txt10.charAt(h);
    h++;
    setTimeout(typeWriter10, speed);
  }
}

var x = 0;
var txt11 = 'Method Not Allowed';
var speed = 50;
function typeWriter11() {
  if (x< txt11.length) {
    document.getElementById("demo11").innerHTML += txt11.charAt(x);
    x++;
    setTimeout(typeWriter11, speed);
  }
}

var j = 0;
var txt12 = 'Request Entity Too Large';
var speed = 50;
function typeWriter12() {
  if (j< txt12.length) {
    document.getElementById("demo12").innerHTML += txt12.charAt(j);
    j++;
    setTimeout(typeWriter12, speed);
  }
}
   
var k = 0;
var txt13 = 'Request-URL Too Large';
var speed = 50;
function typeWriter13() {
  if (k< txt13.length) {
    document.getElementById("demo13").innerHTML += txt13.charAt(k);
    k++;
    setTimeout(typeWriter13, speed);
  }
}
   
var l = 0;
var txt14 = 'Unsupported Media Type';
var speed = 50;
function typeWriter14() {
  if (l< txt14.length) {
    document.getElementById("demo14").innerHTML += txt14.charAt(l);
    l++;
    setTimeout(typeWriter14, speed);
  }
}

var m = 0;
var txt15 = 'Server Error';
var speed = 50;
function typeWriter15() {
  if (m< txt15.length) {
    document.getElementById("demo15").innerHTML += txt15.charAt(m);
    m++;
    setTimeout(typeWriter15, speed);
  }
}

var n = 0;
var txt16 = 'Not Implemented';
var speed = 50;
function typeWriter16() {
  if (n< txt16.length) {
    document.getElementById("demo16").innerHTML += txt16.charAt(n);
    n++;
    setTimeout(typeWriter16, speed);
  }
}
var o = 0;
var txt17 = 'Bad Gateway';
var speed = 50;
function typeWriter17() {
  if (o< txt17.length) {
    document.getElementById("demo17").innerHTML += txt17.charAt(o);
    o++;
    setTimeout(typeWriter17, speed);
  }
}
var p = 0;
var txt18= 'Not Implemented';
var speed = 50;
function typeWriter18() {
  if (p< txt18.length) {
    document.getElementById("demo18").innerHTML += txt18.charAt(p);
    p++;
    setTimeout(typeWriter18, speed);
  }
}
   
var q = 0;
var txt19= 'Gateway Time-Out';
var speed = 50;
function typeWriter19() {
  if (q< txt19.length) {
    document.getElementById("demo19").innerHTML += txt19.charAt(q);
    q++;
    setTimeout(typeWriter19, speed);
  }
}
   
     function myFunction() {
  var x = document.getElementById("Myid");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}