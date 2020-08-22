//slideshow 1
var slideIndex = 0;
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex);

// KHai bào hàm hiển thị slide
function showSlides() {
      var i;
      var slides = document.getElementsByClassName("ss");
      /* console.log(slides); */
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
      }

      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add('active');
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
          slideIndex = 0
      }
}
//tự động chuyển đổi slide sau 10s
setInterval(showSlides, 10000);
function currentSlide(n) {
  showSlides(slideIndex = n);
}



//slideshow2
var activeIndex = 0;
slider(); 
function slider(){
      var brands = document.getElementsByClassName("show");
      /* console.log(brands); */
      for (i = 0; i < brands.length; i++) {
        brands[i].style.display = "none";
      } 
      brands[activeIndex].style.display = "block";

      activeIndex++;

      if (activeIndex > brands.length - 1) {
        activeIndex = 0
    }
}
setInterval(slider, 5000);


var e=0;
function handleShow(){
      /* var show = document.getElementsByClassName('login-reg-res');
      console.log(show[0]);
      show[0].style.display="flex"; */
       ++e;
       var show = document.getElementsByClassName('login-reg-res');
       /* console.log(e); */
       if((e%2)==1){
            show[0].style.display="flex";
       }
       else{
            show[0].style.display="none";
       }
}
function showMenu2(){
      ++e;
      var menu = document.getElementById('menu2-res');
      console.log(menu);
      /* console.log(e); */
      if((e%2)==1){
            menu.style.display="block";
       }
       else{
            menu.style.display="none";
       }
}

function selectItem(index){
      console.log(index);
      var item = document.getElementsByClassName('content-fa1');
      var button = document.getElementsByClassName('btn-fa');
      console.log(item);
      console.log(button);
      var i;
      for(i=0; i<item.length; i++){
            item[i].style.display='none';
      }
      for(i=0; i<button.length; i++){
            button[i].classList.remove('selected');
      }
      item[index].style.display='block';
      button[index].classList.add('selected');
}
selectItem(0);

var xhttp = new XMLHttpRequest() || ActiveXObject();

        xhttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                addData(this.responseText);
            }

        }
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
        xhttp.send();
        var titleSelected = document.querySelector('select[name="title-ajax"]');
        /* console.log(titleSelected); */
        var addData = function (data) {
            var myJsonObj = Array.from(JSON.parse(data));
            var render='';
            /* console.log(myJsonObj); */
            for (var i = 0; i < myJsonObj.length; i++) {
                /* console.log(myJsonObj[i].id);  */
                var option=document.createElement('option');
                option.setAttribute('value',myJsonObj[i].title);
                option.innerText = myJsonObj[i].title;
                /* render = render + myJsonObj[i].id +'</br>'; */
                /* console.log(option); */
                
                titleSelected.append(option);
            }
            /* document.getElementById("result").innerHTML = render; */
        }

function addToCart(){
      var cartNumRes = document.getElementById('cart-num-res');
      var cartNum = document.getElementById('cart-num');
      /* console.log(cartNum.innerHTML); */
      ++e;
      console.log(e);
      cartNum.innerHTML=e;
      cartNumRes.innerHTML=e;
}

function subMenu(){
  ++e;
  var subMenu = document.getElementById('sub-menu1-res');
  var arrow = document.getElementById('arrow');
  console.log(subMenu);
  console.log(e);
  console.log(arrow);
  if((e%2)==1){
        subMenu.style.display="block";
        arrow.setAttribute("class","fas fa-angle-up");
        arrow.style.color="#7aaedd"
   }
   else{
        subMenu.style.display="none";
        arrow.setAttribute("class","fas fa-angle-down");
        arrow.style.color="#666666"
   }
}

function showMenu(){
      ++e;
      var menuIcon = document.getElementById('menu-ic');
      var menuRes = document.getElementById('menu1-res');
      if((e%2)==1){
            menuRes.style.display="block";
            menuIcon.setAttribute("class","fas fa-times");
       }
       else{
            menuRes.style.display="none";
            menuIcon.setAttribute("class","fas fa-bars");
       }
}

var subMenu2 = document.getElementsByClassName('sub-menu2-mobile');
subMenu2[0].style.display="none";
subMenu2[1].style.display="none";
console.log(subMenu2)
var arrow2 = document.getElementsByClassName('arrow-down');
     console.log(arrow2);


function showSubMenu2(index){
     

     /* var subMenu2 = document.getElementsByClassName('sub-menu2-mobile'); */
     console.log(subMenu2[index]);
     console.log(arrow2[index]);
     console.log(arrow2);

     

     if(subMenu2[index].style.display=="none"){
          subMenu2[index].style.display="block";
          arrow2[index].setAttribute("class",'arrow-down'+' '+ 'fas fa-chevron-up');
          
     }
     else{
          subMenu2[index].style.display="none";
          arrow2[index].setAttribute("class",'arrow-down'+' '+ 'fas fa-chevron-down');
     }

}