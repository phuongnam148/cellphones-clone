import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();
const dbRef = ref(db);

var id = JSON.parse(sessionStorage.getItem("id"));
id--;

const numberFormat = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

get(child(dbRef, `products/${id--}`)).then((snapshot) => {
  let detail = snapshot.val();
  console.log(detail);
  document.getElementById("chitiet").innerHTML += `<div>
    <h4 id="iPhone_12">${detail.name}</h4>
</div>

<div class="price">
    <div>
        ${numberFormat.format(detail.price)}
        <span class="old-price">  ${numberFormat.format(
          detail.price_old
        )}</span>
    </div>

    <div class="raiting">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i> 162 đánh giá
    </div>
</div>

<strong id="lua-chon">Lựa chọn màu</strong>
<div class="form-group">

    <div class="swiper-pagination"></div>
  
</div>
<div class="khuyen-mai">
    <h4><i class="fa fa-check-circle"></i> Khuyến mãi</h4>
    <p><i class="fa fa-check-circle"></i> ${detail.promotion}
        <a href="">(xem chi tiết) </a>
    </p>
    <!-- <p><i class="fa fa-check-circle"></i> Khuyến mãi mua thêm: Sạc nhanh Apple iPhone 20W Type-C - Chính hãng với giá chỉ 490.000đ
        <a href="">(xem chi tiết) </a>
    </p> -->
    <p><i class="fa fa-check-circle"></i> Giảm 10% (tối đa 300k) khi thanh toán qua ví Moca trên ứng
        dụng Grab </a>
    </p>
    <p><i class="fa fa-check-circle"></i> Giảm thêm tới 1% cho thành viên Smember
    </p>
</div>

<div class="box-action">
    <div class="flex_box">
        <a onclick="themVaoGio( ${detail.id} , '${detail.name}' , ${detail.price } ,'${detail.img[0].url}','${detail.promotion}')"
            class="mua-ngay" href="#"><strong>Thêm vào giỏ</strong> <br> (Giao tận nơi hoặc lấy tại
            cửa hàng) </a>
    </div>
    <a class="tra-gop" href="gio_hang.html"><strong>TRẢ GÓP 0%</strong> <br> (Xét duyệt qua điện
        thoại) </a>
    <a class="tra-gop" href="gio_hang.html"><strong>TRẢ GÓP QUA THẺ</strong> <br> (Visa, Master
        Card, JCB) </a>
    <div class="tra-gop-the"></div>
</div> `;

  detail.img.forEach((data) => {
    document.getElementById(
      "swiper1"
    ).innerHTML += `<div class="swiper-slide"><img src="${data.url}" /></div>`;
    document.getElementById(
      "swiper2"
    ).innerHTML += `<div class="swiper-slide"><img src="${data.url}" /></div>`;
  });

  var arr = detail.detail.split(";");

  arr.forEach((element) => {
    document.getElementById("prod_detail").innerHTML += `<li>${element}</li>`;
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          `<span style="background: no-repeat url(${detail.img[index].url}) right/25%;" class="` +
          className +
          '">' +
          `${
            detail.img[index].description
          } <p style="color: red;"> ${numberFormat.format(
            detail.price
          )}</p></label>` +
          "</span>"
        );
      },
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
