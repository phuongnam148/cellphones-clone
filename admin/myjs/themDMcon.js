function PostItem(url, obj) {
    options = {
        method: "post",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    return fetch(url, options)
}
url = "http://localhost:3000/category";
var dmCon = document.getElementById("tenDM")
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach((element) => {
            dmCon.innerHTML += `<option value="${element.id}" >${element.name}</option>`
        });
    })

function submitBtn() {
    var idDM = document.getElementById("tenDM").value;
    var tenDMcon = document.getElementById("tenDMcon").value.trim();
    urlDMcon = "http://localhost:3000/category_sub";

    if (tenDM && tenDMcon) {
        var dm = {
            "cad_id": idDM,
            "name": tenDMcon
        }
        // console.log(donhang)
        PostItem(urlDMcon, dm).then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Thêm loại sản phẩm con thành công!");
            })
    }
}

