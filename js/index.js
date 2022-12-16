import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();

const dbRef = ref(db);
// --------------------- category --------------------
get(child(dbRef, 'category'))
  .then(snapshot => {
    snapshot.val().forEach((element) => {
      let category = document.getElementById("category");
      category.innerHTML += `<li>
                                <a href="sptheocat.html?cat=${element.id}"><i class="${element.icon}"></i>${element.name} <i class="ionicons ion-ios-arrow-forward" id="right"></i>
                                  </a>
                                <ul id="catid_${element.id}">
                                </ul>
                              </li>`;
      if (element.sub_cate) {
        element.sub_cate.forEach((c) => {
          let category_sub = document.getElementById(`catid_${element.id}`);
          category_sub.innerHTML += `<li><a href="">${c.name}</a></li>`;
        })
      }
    })
  })
  .catch((error) => {
    console.error(error);
  });;

// --------------------- product --------------------


function showNumberProd(num) {
  get(child(dbRef, 'products'))
    .then(snapshot => {
      snapshot.val().forEach((element, index) => {
        let phoneProduct = document.getElementById("phoneProduct");

        if (index < num) {
          let rating = "";
          for (let index = 1; index <= 5; index++) {
            if (index <= element.rating) {
              rating += `<i class="fa fa-star"></i>`;
            } else {
              rating += `<i class="fa-solid fa-star"></i>`;
            }
          }
          var [...arr] = element.img
          console.log(arr);
          let sale = "";
          let oldPrice = "";
          if (element.price_old != null) {
            let discount = (
              ((element.price_old - element.price) / element.price_old) *
              100
            ).toFixed();
            sale = `<div class="box-sales">Giảm ${discount}% </div>`;
            oldPrice += `<p class="old-price">${numberFormat.format(
              element.price_old
            )}</p>`;
          }
          phoneProduct.innerHTML += `
            <a href="chi_tiet_sp.html" onclick="themVaoChiTiet(${element.id})">
                <div class="col-20">
                    <div class="prod shadow" >
                        ${sale}
                        <img src="${element.img[0].url}" alt="" class="image">
                        <div class="name">${element.name}</div>
                        <div class="price">
                          ${numberFormat.format(element.price)}
                          ${oldPrice}
                        </div>
                        <div class="promotion">${element.promotion}</div>
                        <div class="rating">
                           ${rating}
                        </div>
                        <div class="btn-wish-list"><span>Yêu thích &nbsp;</span><i class="ionicons ion-android-favorite-outline"></i><i class="ionicons ion-android-favorite"></i> </div>
                    </div>
                </div>
            </a>`;
        }
      })
    })
    .catch((error) => {
      console.error(error);
    });;
}

showNumberProd(10)