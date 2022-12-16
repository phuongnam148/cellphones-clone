function btnAdd(price, btn) {
  var oldPrice = document.getElementById('tongtien').innerHTML
  var input = btn.previousSibling.previousSibling
  if (input.innerHTML == null) {
    input.value == 1;
  }
  input.value++
  var newPrice = Number(oldPrice) + Number(price);
  console.log(newPrice)

  // console.log(newPrice);

  // const format = newPrice.toString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  document.getElementById('tongtien').innerHTML = newPrice
  document.getElementById("tong-tien").innerHTML = numberFormat.format(newPrice)
}
// var element = document.getElementById("so-luong");
// var value = element.innerHTML;
// parseInt(value) += parseInt(value);
// console.log(value);

const numberFormat = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function btnMinutes(min, price, btn) {
  var oldPrice = document.getElementById('tongtien').innerHTML

  var input = btn.nextElementSibling
  console.log(input)
  var soLuong = parseInt(input.value) - 1;

  if (soLuong < parseInt(min)) {
    soLuong = min;
  } else {
    input.value = soLuong;
    var newPrice = Number(oldPrice) - Number(price);
    const numberFormat = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    document.getElementById('tongtien').innerHTML = newPrice
    document.getElementById("tong-tien").innerHTML = numberFormat.format(newPrice)
  }




}


// var nameInput = document.getElementById('fullName');
// nameInput.oninvalid = function(event) {
//     event.target.setCustomValidity('Họ và tên không chứa kí tự đặc biệt');
// }

var counter = 1;
// counter = counter.charAt(counter.length - 1);
// console.log(counter);
// setInterval(function () {
//   document.getElementById("r" + counter).checked = true;
//   counter++;
//   if (counter > 5) {
//     counter = 1;
//   }
// }, 5000);



//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function themVaoChiTiet(id) {
 

  sessionStorage.setItem("id", JSON.stringify(id));
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modelBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}