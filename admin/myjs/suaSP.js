import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();
const dbRef = ref(db);

let params = new URLSearchParams(location.search);
let id = params.get("id");


export function getData() {
  get(child(dbRef, `products/${id--}`)).then((snapshot) => {
    var data = snapshot.val()
    document.getElementById("val_username").value = data.name;
    document.getElementById("val_number").value = data.price;
    document.getElementById("val_skill").value = data.cat_id;
    document.getElementById("example-textarea-large").value = data.detail;
    document.getElementById("val_website").value = data.promotion;

    for (let i = 1; i < data.image.length; i++) {
      document.getElementById(`username${i}`).innerHTML = data.image[i].description;
      document.getElementById(`email${i}`).innerHTML = data.image[i].url;
    };
  })
}


export function suaSP() {
  var name = document.getElementById("val_username").value.trim();
  var price = document.getElementById("val_number").value.trim();
  var cat_id = document.getElementById("val_skill").value;
  var detail = document
    .getElementById("example-textarea-large")
    .value.trim();
  var promotion = document.getElementById("val_website").value.trim();
  var image = document.querySelectorAll("tr");
  // console.log(image);
  var img = [];
  for (let i = 1; i < image.length; i++) {
    img.push({
      description: document.getElementById(`username${i}`).innerHTML,
      url: document.getElementById(`email${i}`).innerHTML,
    });
  }

  var objSP = {
    id: prod_length,
    name,
    img,
    price,
    price_old: null,
    cat_id,
    promotion,
    rating: 5,
    detail,
  };

  set(ref(db, "products/" + id--), objSP).then(() => {
    alert('thêm sản phẩm thành công')
  });
}

