const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',togglemobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideOpen = aside.classList.contains('inactive');
    if(!isAsideOpen){
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
    const isAsideOpen = aside.classList.contains('inactive');
    if(!isAsideOpen){
        aside.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}




function toggleCarritoAside(){
    const ismobileMenuOpen = mobileMenu.classList.contains('inactive');
    //aside.classList.toggle('inactive');

    if(!ismobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
}