"use strict";var burger=document.querySelector(".menu__burger"),menu=document.querySelector(".menu__list");function ibg(){for(var e=document.querySelectorAll(".ibg"),t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}burger.addEventListener("click",function(){burger.classList.toggle("active"),menu.classList.toggle("active"),document.body.classList.toggle("lock")}),ibg();var mySwiper=new Swiper(".slider__body",{slidesPerView:1,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoHeight:!0}),validateForm=function(e,t){new window.JustValidate(e,{rules:t})};validateForm(".subscribe__form",{email:{required:!0,email:!0}});