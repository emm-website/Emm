if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }



}



function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()

}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }

}





function nadd() {

    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount);
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("cart").innerHTML = localStorage.clickcount;
  }
  




function add() {

  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("cart").innerHTML = localStorage.clickcount;
}

function resetcart() {
    localStorage.clickcount = 0
    document.getElementById("cart").innerHTML = localStorage.clickcount;
}


function sure() {
    if (location.href == 'index.html') {
        location.reload()
    }
    else
    location.href = 'index.html';
}

function go(a) {
    location.href = a;    
}

function contact() {
    location.href = 'contact.html';   
}

function cart() {
    location.href = 'cart.html';   
}


function profile() {
    location.href = 'profile.html';   
}

/*var k=0
function add() {
    k=k+1
    var x=document.getElementById("cart")
    text = k ;
    x.innerText=text
} */
