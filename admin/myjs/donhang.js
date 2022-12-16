import {
  getDatabase,
  ref,
  child,
  get,
  remove,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();
const dbRef = ref(db);

let ordersList = document.getElementById("ordersList");
let detail = document.getElementById("detail");
get(child(dbRef, "orders"))
  .then((snapshot) => {
    let prod_lengtg = snapshot.val().length;

    snapshot.val().forEach((element, index) => {
      let stat = element.status == "Chờ xác nhận" ? 1 : 0;
      ordersList.innerHTML += `
        <tr>
        <td class="cell-small text-center"><input type="checkbox" id="check5-td4" name="check5-td4"> </td>
        <td class="cell-small text-center">${element.id}</td>
        <td>${element.customer_name}</td>
        <td> ${element.customer_address} </td>
        <td>${element.customer_email}</td>
        <td >${element.customer_phone}</td>
        <td >${element.create_date}</td>
        <td >${element.total}</td>
        <td >${element.status}</td>
        <td >   <button type="button" data-toggle="modal" data-target="#exampleModalCenter${element.id}"
        class="btn btn-xs btn-success" data-original-title="Sửa">Chi tiết</button></td>
        <td class="text-center">
        <a href="donhang.html?xacnhan=${element.id}&stat=${stat}"   data-toggle="tooltip" title=""
        class="btn btn-xs btn-success" data-original-title="Sửa"><i
            class="fa fa-pencil"></i></a>
                <div  onclick="xoa(${element.id})" class="btn btn-xs btn-danger" data-original-title="Xoá"><i
                        class="fa fa-times"  ></i></div>
            </div>
        </td>
        </tr>
        `;
      document.getElementById("detail").innerHTML += `
        <div class="modal fade" id="exampleModalCenter${element.id}" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Chi tiết đơn hàng</h5>
                    </div>
                    <div class="modal-body" ">
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Hình</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                      </tr>
                    </thead>
                    <tbody id="detail${element.id}">
                        
                      </tr>
                    </tbody>
                  </table>
                    </div>
                </div>
            </div>
        <div>`;
      element.detail.forEach((d, index) => {
        document.getElementById(`detail${element.id}`).innerHTML += `
        <th scope="row">${index + 1}</th>
        <td> <img class="card-img-top" src="${
          d.product_img
        }" style="width: 100px" alt="Card image cap"></td>
        <td>${d.product_name}</td>
        <td>${d.price}</td>
        <td>${d.quantity}</td>   
          `;
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });

let btn_xoa = document.getElementById("btn_xoa");
btn_xoa.onclick = () => {
  let id = document.getElementById("xoa").value;
  console.log(id);
  remove(ref(db, `orders/${id - 1}`)).then(() => {
    alert("Xóa đơn hàng thành công");
    location.reload();
  });
};


let params = new URLSearchParams(location.search);
let id_xacnhan = params.get("xacnhan");
if(id_xacnhan){
    
}