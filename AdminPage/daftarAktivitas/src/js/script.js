// -------public function----------

// query class
function queryClass(theSelector) {
    return document.querySelector(theSelector);
}

// add class
function addClass(theSelector, theClass) {
    return queryClass(theSelector).classList.add(theClass);
}

// remove class
function removeClass(theSelector, theClass) {
    return queryClass(theSelector).classList.remove(theClass);
}

// hamburger-menu
queryClass('.hamburger-menu1').addEventListener('click', function() {
    if(window.innerWidth < 992) {
        //cek class d-none
        if( queryClass('.nav').classList.contains('false-md') == true ) {
            removeClass('.nav','false-md')
        }  else {
            addClass('.nav','false-md')
        }
    }
})

queryClass('.hamburger-menu2').addEventListener('click', function() {
    if(window.innerWidth < 992) {
        //cek class d-none
        if( queryClass('.nav').classList.contains('false-md') == true ) {
            removeClass('.nav','false-md')
        }  else {
            addClass('.nav','false-md')
        }
    }
})

// --------------dataTables--------------
$(document).ready(function() {
    $('#example').DataTable({
        "scrollX": true,
    }); 
} );