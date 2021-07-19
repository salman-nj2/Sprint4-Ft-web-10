let products = [{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6085/31568/010200829-E-2__37230.1619121680.jpg?c=2',
    url: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6085/31567/010200829-E-3__59379.1619121646.jpg?c=2',
    name: 'Tile Hoop Earrings',
    price: 1800

},{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6084/31563/010700040-S-1__84453.1619121359.jpg?c=2',
    name: 'Pearl Cuff Earrings',
    price: 1200
},{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6083/31560/010200839-2__07753.1619120966.jpg?c=2',
    name: 'Ceres Button Earrings',
    price: 1600
},{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6082/31557/010200872-2__93562.1619120587.jpg?c=2',
    name: 'Vintage Button Earrings',
    price: 1650
},{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6081/31553/010200870-2__22518.1619120262.jpg?c=2',
    name: 'Tufted Huggie Hoop Earrings',
    price: 1820
},{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6080/31550/010200854-2__85176.1619120019.jpg?c=2',
    name: 'Sconce Drop Earrings',
    price: 2500
},{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/1280x1280/products/6079/31549/010200876-2__52077.1619119725.jpg?c=2',
    name: 'Baguette Link Drop Earrings',
    price: 3600
},{

    image: 'https://cdn11.bigcommerce.com/s-8pcbviyy/images/stencil/800x1200/products/6078/31378/010200864-2__84408.1618518818.jpg?c=2',
    name: 'Heiress Huggie Hoop Earrings',
    price: 1700
}
]












if(localStorage.getItem("products") == null){
    localStorage.setItem("products",JSON.stringify(products))
}

function showproducts(data){


    var parent = document.getElementById("home")
    parent.innerText = ""
    data.forEach(element => {
    
    var div = document.createElement("div")
    
    
    var img = document.createElement('img')
    img.src = element.image

    img.addEventListener("mouseover",function(element) {
        img.style.backgroundImage = `${element.url}`
        img.style.zIndex = "10"
        img.style.display = "inline-block"
    })

    var p_name = document.createElement("p")
    p_name.innerHTML = `${element.name}`
   
    var price = document.createElement("p")
    price.innerHTML = `price: <span>${element.price}</span>`

    var btn = document.createElement('button')
    btn.innerText = "Add to Cart"
    btn.style.display = "block"
        btn.onclick = function(){
            addCart(element)
        }
    
    div.append(img,p_name,price,btn)
    parent.append(div)
});
    
}

showproducts(JSON.parse(localStorage.getItem('products')))

function addCart(element){



    let favarr;
    let arr;    
    favarr = localStorage.getItem('cart')
    
    if(favarr == null){
        arr =[]
    } else{
        arr = JSON.parse(favarr)
    }   
    
    arr.push(element)
    console.log(arr)
    localStorage.setItem('cart',JSON.stringify(arr))
    
    }

function showLH(){

    let sortedLH = JSON.parse(localStorage.getItem('products'))

    sortedLH = sortedLH.sort(function(a,b){
      return  a.price - b.price
    })
    showproducts(sortedLH)
}





function showHL(){
  
    let sortedHL = JSON.parse(localStorage.getItem('products'))

    sortedHL = sortedHL.sort(function(a,b){
      return  b.price - a.price
    })
    showproducts(sortedHL)
}

function goCart() {
    window.location.href ="./cart.html"
}