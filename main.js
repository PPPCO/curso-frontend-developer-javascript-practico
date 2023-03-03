// funciones para product detail
const productDetailContainer = document.querySelector('.real-product-detail');
const btnProductDetailClose = document.querySelector('.real-product-detail-close')
const botonDeCierre = document.querySelector('.real-product-detail-close').addEventListener('click',removeProductDetailAside)
function openProductDetailAside(){
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function removeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


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
    // Esta es la primera parte de cuando  queremos que aparezca o no el desktop-menu
    desktopMenu.classList.toggle('inactive');
    // classList.toggle nos ayuda a alternar entre agregar o eliminar un nombre de clase de un elemento, por lo tanto cada que precionemos el elemento que dispara esta funcion, hara que si no esta la clase 'inactive, la coloque, y si esta, pues la quite.
    // ADEMAS SE LA DEBEMOS DE AGREGAR AL ELEMENTO QUE QUEREMOS QUE APARESCA O DESAPARESCA.
}

function togglemobileMenu(){
    const isAsideOpen = aside.classList.contains('inactive');
    if(!isAsideOpen){
        aside.classList.toggle('inactive');
    }
    removeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}




function toggleCarritoAside(){
    const ismobileMenuOpen = mobileMenu.classList.contains('inactive');
    // Con classList.contains estamos preguntando si el elemento html que tragimos y almacenamos en la variable mobileMenu tiene o contiene la clase inactive, esto nos retornara un valor booleano.
    //aside.classList.toggle('inactive');

    if(!ismobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }
    // la logica que se sigue con este if es que cuando un elemento este abierto en este caso el menu mobil se cierre para que solo se vea para este caso el carrito de compras, por ello es que arriba se hace uso de classList.contains, por lo tanto si nos dice que si tiene la clase inactiva esto significara que ese elemento no se ve, por eso es que en el if estamos haciendo una negacion de la variable que almacena si no esta visible o si el elemento, por lo tanto si nos regresa un flase lo que significaria que si esta visible el elemento, tenemos que lograr que el if tenga true para ejecutar eso que queremos por eso agarramos y colocamos la negacion, y de esta forma es como procedemos a cerrar. mejor dicho colocarle la clase inactive que hara que se oculte.
    
    // agregamos esta validacion para que cuando queramos abrir el carrito pero este el menu de escritorio abierto, el menu se cierre y nos muestre el carrito :) 
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
    
    // Y ya la parte de aqui abajo es para el togle normal de este elemento del aside, para que se uestre o se oculte.
    aside.classList.toggle('inactive');
}

//  ******************** HTML a partir de arrays*********

const productList = [];

for(let i = 0; i < 20; i++){
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    })
}
console.log(productList);

// FOR IN accede como a las llaves de los elementos o el indice, como si hicieramos un for normal pero mas sencillo, esta mejor el FOR OF porque accede directamente al los elementos del array, mientras que con for in tendriamos todavia que volver a colocar el arreglo y con [] parasrle el indice y asi.

// FOR OF accede a los elementos en concreto, accede a todos y cada uno de los elementos y sus valores.
function renderProducts(productList){
    for(product of productList){
        const productCard = document.createElement('div');  // creando un elemento div
        productCard.classList.add('product-card'); //agregando la clase del div
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);// agregando el atributo src y agregandole un valor
        // Agragando evento para que muestre el contenido del producto
        productImg.addEventListener('click', openProductDetailAside);


        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;
    
        const productInfoFigure =  document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        // acomodando los elementos para el div html o bueno maquetando el html desde JS
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.append(productPrice,productName);
        productinfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg,productinfo);
    
        // mandando a imprimir en html el elemento html que creamos aqui en js
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(productCard);
        /**Recordemos que tenemos que seleccionar un elemento donde se mostrara nuestro o nuestros elementos html que creamos aqui en js, nosotros escogimos un div que ya almacenaba los elementos maquetados de los productos. */
    
        /** APPEND Y APPENDCHILD
         * 
         * APPEND: nos permite colocar elementos dentro de otro elemento html pero mas de uno a la vez, "nos permite agregar varios nodos y texto", como se ve en elejemplo de arriba.
         * 
         * APPENDCHILD: solo permite agergar un elemento a la vez, tambien como se muestra arriba
         */

        // NOTA
        // lo anterior lo pudimos hacer con ayuda de innerHTML y pasarle todo el elemento html entre `` pero creo que seria mala practica y ademas seria muy sencillo y buscamos aprender un manejo de DOM avanzado
    }
}

renderProducts(productList);




