const orderWindow = document.getElementById('orderWindow');
const closeWindowBtn = document.getElementById('closeOrderBtn');

//open and close order window
function OpenOrderWindow() {
    if(orderWindow.classList.contains('closed')){
        orderWindow.classList.remove('closed');
        orderWindow.classList.add('opened');
    }
};
closeWindowBtn.addEventListener('click', () => {
    if(orderWindow.classList.contains('opened')) {
        orderWindow.classList.remove('opened');
        orderWindow.classList.add('closed');
    }
});

//Maganer Shop Menu and Category
const shopOptions = document.getElementsByClassName('shopOption');
const categories = document.getElementsByClassName('category');

//this function is removing the classes from options and then finds 
//the target clicked and add the enabled class
function SelectCategory(e) {
    //disable all options
    for (let x = 0; x < shopOptions.length; x++) {
        shopOptions[x].classList.remove('enabled', 'disabled');
    }

    e = e || window.event;
    var targ = e.targ || e.srcElement || e;
    if (targ.nodeType == 3) targ.parentNode;

    targ.classList.add('enabled');

    //1. hide all category
    for (let y = 0;y < categories.length; y++) {
        categories[y].setAttribute('hidden', '');
    }
    //2. enable the right one
    let categoryId = 'produse' + targ.id; //make up the cattegory id
    
    document.getElementById(categoryId).removeAttribute('hidden');
};



