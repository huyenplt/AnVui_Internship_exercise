var e = 0;
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