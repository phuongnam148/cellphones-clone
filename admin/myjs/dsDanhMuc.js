import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();

const dbRef = ref(db);

get(child(dbRef, "category"))
  .then((snapshot) => {
    let categoryList = document.getElementById("categoryList");
    snapshot.val().forEach((element) => {
      categoryList.innerHTML += ` 
          <tr>
          <td class="cell-small text-center"><input type="checkbox" id="check5-td4" name="check5-td4">                            </td>
          <td class="cell-small text-center">${element.id}</td>
          <td><a href="javascript:void(0)">${element.name}</a></td>
          <td>  <i class="${element.icon}"></i></td>
  
          <td class="text-center">
              <div class="btn-group">
                  <a href="suaLoaiSanPham.html?id=${element.id}"  class="btn btn-xs btn-success" data-original-title="Sửa">
                  <i class="fa fa-pencil"></i>
                  </a>
                  <div onclick="xoaLoaiSP(${element.id})" class="btn btn-xs btn-danger" >
                    <i class="fa fa-times"></i>
                    </div>
              </div>
          </td>
          </tr>`;
    });
  })
  .catch((error) => {
    console.error(error);
  });
