import {
  get,
  child,
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


export function writeProdData() {
  const db = getDatabase();
  const dbRef = ref(db);

  get(child(dbRef, "products"))
    .then((snapshot) => {
      let prod_length = snapshot.val().length;

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

      set(ref(db, "products/" + prod_length), objSP).then(() => {
        alert('thêm sản phẩm thành công')
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
