function checkout(){
    let form = document.getElementById('form')


    let name = form.name.value

    let adr1 = form.adr1.value

    let adr2 = form.adr2.value
    
    let state = form.state.value
    let country = form.country.value
    let pincode = form.pincode.value

    if(name == "" || adr1 == "" || adr2 == "" || state == "" || country == "" || pincode == ""){
        alert("invald info")
    } else{

    let user = {
        name,
        adr1,
        adr2,
        state,
        country,
        pincode
    }

    let arr;
    arr = localStorage.getItem('checkout')

    if(arr == null){
        arr =[]
    } else{
        arr = JSON.parse(arr)
    }

    arr.push(user)
    localStorage.setItem("checkout",JSON.stringify(arr))
}
alert('Details are added Proceed to Payment')
}

function payment(){
    window.location.href ="./payment.html"
}
