k=0
function add() {
    k=k+1
    var x=document.getElementById("cart")
    text = "cart("+k+")"
    x.innerText=text
}

function sure() {
    alert("page refreshed")
}

function goback() {
    window.location.href = 'index.html';    
}



