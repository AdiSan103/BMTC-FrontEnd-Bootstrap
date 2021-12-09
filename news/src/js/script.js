// datatable
$(document).ready( function () {
    $('#table_id').DataTable();
} );

// --------Public Function--------------
function queryClass(theSelector) {
  return document.querySelector(theSelector);
}

function addClass(theSelector, theClass) {
  return queryClass(theSelector).classList.add(theClass);
}

function removeClass(theSelector, theClass) {
  return queryClass(theSelector).classList.remove(theClass);
}

// foreach loops Remove
function foreachLoopRemove(queryClassAll, classRemove, time) {
  // variabel
  let i = 0;
  let j = document.querySelectorAll(queryClassAll);
  // action
  for(let k = 0; k < j.length; k++){
      setTimeout(() => {
          j[k].classList.remove(classRemove);
      }, time * i);
      i++;
  }
}

// ----------hamburger menu-----------------
queryClass('.hamburger-menu').addEventListener('click', function() {
  if(window.innerWidth < 992) {
    //cek class d-none
    if( queryClass('.navbar1-link').classList.contains('d-none') == true ) {
      // navbar-link
      removeClass('.navbar1-link','d-none');
      addClass('.navbar1-link','d-flex');
      setTimeout(() => {
        addClass('.navbar1-link ul','true');
      }, 100)
      // hamburger menu
      addClass('.hamburger-1', 'true');
      addClass('.hamburger-2', 'true');
      addClass('.hamburger-3', 'true');
    }  else {
      // navbar-link
      removeClass('.navbar1-link','d-flex');
      removeClass('.navbar1-link ul','true');
      setTimeout(() => {
        addClass('.navbar1-link','d-none');
      }, 750)
      // hamburger menu
      removeClass('.hamburger-1', 'true');
      removeClass('.hamburger-2', 'true');
      removeClass('.hamburger-3', 'true');
    }
  }
})

// -------------animate----------------
removeClass('.banner h3', 'toUp');
setTimeout(() => {
  removeClass('.banner h1', 'toUp');
  removeClass('.banner p', 'toUp');
}, 500)

window.addEventListener('scroll', () => {
  let thisScroll = this.scrollY;
  // tabel data mews
  if(thisScroll > queryClass('.hotNews').offsetTop - 200) {
      removeClass('.hotNews .left','toRight');
      removeClass('.hotNews .right', 'toLeft');
  }

  // dataTabel
  if(thisScroll > queryClass('.dataTabel').offsetTop - 400 ) {
    foreachLoopRemove('tbody tr.card1','toUp',200);
  }
})