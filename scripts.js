k=0
function add() {
    k=k+1
    var x=document.getElementById("cart")
    text = "cart("+k+")"
    x.innerText=text
}

function sure() {
    if (confirm("refresh the page?")) {
        alert("Page Refreshed")
    
    }
}

function goback() {
    window.location.href = 'index.html';    
}

function contact() {
    window.location.href = 'contact.html';   
}

function cart() {
    window.location.href = 'cart.html';   
}


function profile() {
    window.location.href = 'profile.html';   
}
