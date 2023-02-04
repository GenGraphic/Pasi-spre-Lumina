//make steps active
const dots = document.getElementsByClassName('dot');
var idOfClicked;

document.addEventListener('click', function(e){
    var clicked = e.target;
    //create new div circle
    const newCircle = document.createElement('div');
    newCircle.classList.add('circle');
    
    //if clicked has no circle remove all and add
    if(clicked.classList.contains('dot')){
        for(let x = 0; x < dots.length; x++) {
            dots[x].innerHTML = '';
        }
        clicked.appendChild(newCircle);
        idOfClicked = clicked.id;
        console.log(idOfClicked);
    } else {
        return;
    }

    ShowSlide(clicked.id);
})

//function that choose the right slide
function ShowSlide(id) {
    const canvas = document.getElementsByClassName('canvas');
    function RemoveEnable(){
        for(let y = 0; y < canvas.length; y++){
            canvas[y].classList.remove('enabled');
            canvas[y].classList.add('disabled');
        }
    }
    //switxh case if id of clicked is something
    switch (id) {
        case 'inceputul':
            RemoveEnable();
            document.getElementById('inceputulSlide').classList.add('enabled');
            document.getElementById('inceputulSlide').classList.remove('disabled');
            break;
        case 'primaCladire':
            RemoveEnable();
            document.getElementById('primaCladireSlide').classList.add('enabled');
            document.getElementById('primaCladireSlide').classList.remove('disabled');
            break;
        case 'lucrareCopii':
            RemoveEnable();
            document.getElementById('lucrareCopiiSlide').classList.add('enabled');
            document.getElementById('lucrareCopiiSlide').classList.remove('disabled');
            break;
        case 'lucrareAdulti':
            RemoveEnable();
            document.getElementById('lucrareAdultiSlide').classList.add('enabled');
            document.getElementById('lucrareAdultiSlide').classList.remove('disabled');
            break;
        case 'ferma':
            RemoveEnable();
            document.getElementById('fermaSlide').classList.add('enabled');
            document.getElementById('fermaSlide').classList.remove('disabled');
            break;
        case 'solariile':
            RemoveEnable();
            document.getElementById('solariileSlide').classList.add('enabled');
            document.getElementById('solariileSlide').classList.remove('disabled');
            break;
        case 'moara':
            RemoveEnable();
            document.getElementById('moaraSlide').classList.add('enabled');
            document.getElementById('moaraSlide').classList.remove('disabled');
            break;
        case 'utilaje':
            RemoveEnable();
            document.getElementById('utilajeSlide').classList.add('enabled');
            document.getElementById('utilajeSlide').classList.remove('disabled');
            break;
        case 'bisericaNoua':
            RemoveEnable();
            document.getElementById('bisericaNouaSlide').classList.add('enabled');
            document.getElementById('bisericaNouaSlide').classList.remove('disabled');
            break;
    }
}
