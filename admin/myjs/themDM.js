function PostItem(url, obj) {
    options = {
        method: "post",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    return fetch(url, options)
}

function submitBtn() {

    var tenDM = document.getElementById("tenDM").value.trim();
    var iconDM = document.getElementById("iconDM").value.trim();

    if (tenDM && iconDM) {
        var dm = {
            "name": tenDM,
            "icon": iconDM
        }
        // console.log(donhang)
        url = "http://localhost:3000/category";

        PostItem(url, dm).then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Thêm loại sản phẩm thành công!");
            })
    }
}

