var cart = JSON.parse(localStorage.getItem("cart"))

if (cart) {
    var tongTien = 0;
    cart.forEach((element, index) => {
        tongTien += element.price * element.quatity
        document.querySelector('#tblcart').innerHTML += `
                <div class="module" >
                <div class="module-right">
                    <img src="${element.image}" alt="">
                </div>
                <div class="module-left">
                    <div class="module-info">
                        <p><strong>${element.name}</strong> <button id="closeBtn" onclick="deleteProd(${index})" ><i class="fa fa-times"></i></button>  </p>
                        <p class="price"> ${numberFormat.format(element.price)}</p>
                        <p> - Khuyến mãi:</p>
                        <ul>
                            <li>${element.km}</li>
                            
                        </ul>
    
                    </div>
    
                    <div class="control">
                        <p>
                            <Strong>Số lượng</Strong>
                        </p>
                        <label for="">
                            <button type="button" id="btnMinutes" onclick="btnMinutes('1',${element.price},this)"> - </button>
                            <input id="so-luong" name="Number" type="input" value="${element.quatity}" >
                            <button type="button" id="btnAdd" onclick="btnAdd('${element.price}',this)"> + </button>
                        </label>
                    </div>
                </div>
    
            </div>`
    });
    document.getElementById('tongtien').innerHTML = tongTien
    document.getElementById('tongtien').nextElementSibling.innerHTML = numberFormat.format(tongTien)
}

function PostItem(url, obj) {
    options = {
        method: "post",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    return fetch(url, options)
}

function submitBtn() {
    var phonePattern = /0\d{9,10}/;
    var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;


    var name = document.getElementById("fullName").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var email = document.getElementById("email").value.trim();
    if (name && phonePattern.test(phone) && address && emailPattern.test(email)) {

        var donhang = {
            "customer_name": name,
            "customer_address": address,
            "customer_email": email,
            "customer_phone": phone,
            "create_date": new Date().toISOString().slice(0, 10),
            "status": "Chờ xác nhận"
        }
        // console.log(donhang)
        urlOrders = "http://localhost:3000/orders";

        PostItem(urlOrders, donhang).then(res => res.json())
            .then(data => {
                LuuChiTietDonHang(data.id)
                console.log(data)
                alert("Đặt hàng thành công!");
            })
    }
}

function LuuChiTietDonHang(order_id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach(element => {
        let objSP = {
            "order_id": order_id,
            "product_id": element.id,
            "quantity": element.quatity,
            "unti_price": element.price
        }
        url_Order_detail = "http://localhost:3000/order_detail";
        PostItem(url_Order_detail, objSP).then(res => res.json())
            .then(data => {
                console.log(data)
                // alert("Đặt hàng thành công!");
            })

    });
}

function deleteProd(index){
    if(!confirm('Bạn muốn xoá sản phẩm')) return
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}