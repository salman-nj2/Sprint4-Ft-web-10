let sum = 0

function showCart(){

    let data = JSON.parse(localStorage.getItem('cart'))

    var parent = document.getElementById("cart")
    parent.innerText = null
    let id = 0
    
    data.forEach(element => {
        id = id + 1
    var div = document.createElement("div")
    var p_name = document.createElement("p")
    p_name.innerHTML = `Name: ${element.name}`
    var p_price = document.createElement("p")
    p_price.innerHTML = `price: ${element.price}`
    var img = document.createElement('img')
    img.src = element.image
    div.append(p_name,p_price,img)
    parent.append(div)
    sum += parseInt(element.price)
});
    console.log(sum)

    var modalCart = document.getElementById('modal-cart')
    modalCart.innerHTML = `Cart items : ${id}`
    var modalPrice = document.getElementById('modal-price')
    modalPrice.innerHTML = `Total Price : ${sum}`


}

showCart()




function discountPrice(){
    var body = document.querySelector('.checkout-container')
    var d_price = document.createElement('p')
    var inp = document.getElementById('discount').value
    if(inp == 'masai30'){
    d_price.innerHTML = `Your Total Discount Price : <span>${(sum - (sum * 0.3))}</span>`;
    var orderBtn = document.createElement('button')
    orderBtn.innerHTML = `Confirm and Place Order`
    orderBtn.addEventListener('click',function(){
        window.location.href = './checkout.html'
    })
    body.append(d_price,orderBtn)
    } else {
        alert('Invalid Promo')
    }
}

