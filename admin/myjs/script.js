import {
  getDatabase,
  ref,
  child,
  get,
  remove
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();
const dbRef = ref(db);


// --------------------- product --------------------

let productsList = document.getElementById("productsList");

get(child(dbRef, "products"))
  .then((snapshot) => {
    let prod_lengtg = snapshot.val().length;

    snapshot.val().forEach((element, index) => {
      productsList.innerHTML += `
          <tr>
          <td class="cell-small text-center"><input type="checkbox" id="check5-td4" name="check5-td4"> </td>
          <td class="cell-small text-center">${element.id}</td>
          <td><a href="javascript:void(0)">${element.name}</a></td>
          <td style="max-width: 150px"> <img src=" ${element.img[0].url}" alt="" style="width: 100%">  </td>
          <td>${element.price}</td>
          <td >${element.price_old}</td>
          <td >${element.promotion}</td>
    
          <td >${element.stored}</td>
          <td class="text-center">
              <div class="btn-group">
                  <a href="javascript:void(0)" data-toggle="tooltip" title=""
                      class="btn btn-xs btn-info" data-original-title="Chỉ tiết"><i
                          class="fa fa-info-circle"></i></a>
                  <a href="suaSanPham.html?id=${element.id}"   data-toggle="tooltip" title=""
                      class="btn btn-xs btn-success" data-original-title="Sửa"><i
                          class="fa fa-pencil"></i></a>
                  <div onclick="xoa(${element.id})"   class="btn btn-xs btn-danger" data-original-title="Xoá"><i
                          class="fa fa-times"  ></i></div>
              </div>
          </td>
          </tr>`;
    });
  })
  .catch((error) => {
    console.error(error);
  });
let btn_xoa = document.getElementById('btn_xoa')
btn_xoa.onclick = () => {
  let id = document.getElementById('xoa').value
  console.log(id);
  remove(ref(db,`products/${id--}`)).then(()=>{
    alert('Xóa sản phẩm thành công');
    location.reload();
  })
}


// ----------------- category -------------------------

