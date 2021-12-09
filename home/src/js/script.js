document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        focus  : 'center',
        autoplay: true,
      } );
    splide.mount();
  } );


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

// foreach loops Add
function foreachLoopAdd(queryClassAll, classAdd) {
  // variabel
  let j = document.querySelectorAll(queryClassAll);
  // action
  for(let k = 0; k < j.length; k++){
      j[k].classList.add(classAdd);
  }
} 

// ----------hamburger menu------------------

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

// ---------------animate-------------------
// 1.banner
removeClass('.banner h3', 'toUp');
setTimeout(() => {
  removeClass('.banner h1', 'toUp');
  removeClass('.banner p', 'toUp');
  setTimeout(() => {
    removeClass('.banner .button', 'toUp');
  }, 500);
}, 500)

window.addEventListener('scroll', () => {
  let thisScroll = this.scrollY;

  // 2.content1
  if(thisScroll > queryClass('.content1').offsetTop - 200) {
    foreachLoopRemove('.content1 .card1', 'toRight', 200);
    removeClass('.otherNews','toRight');
    removeClass('.content1 .rightContent', 'toLeft');
  }

  // 3.
  if(thisScroll > queryClass('.content2').offsetTop - 200) {
    // content1
    foreachLoopAdd('.content1 .card1', 'toRight', 200);
   addClass('.otherNews','toRight');
   addClass('.content1 .rightContent', 'toLeft');

    // content2
    removeClass('.content2 .left svg','toUp');
    setTimeout(() => {
      removeClass('.content2 .left img', 'toUp');
    },200);

    removeClass('.content2 .right h2','toRight');
    setTimeout(() => {
      removeClass('.content2 .right h5', 'fade1');
      removeClass('.content2 .right .paragraph', 'fade1');
    }, 300);
  }

  // 4.content3
  if(thisScroll > queryClass('.content3').offsetTop - 200) {
    // content2
    addClass('.content2 .left svg','toUp');
    addClass('.content2 .left img', 'toUp');
    addClass('.content2 .right h2','toRight');
    addClass('.content2 .right h5', 'fade1');
    addClass('.content2 .right .paragraph', 'fade1');

    //content3 
    removeClass('.content3 h2','toRight');
    setTimeout(() => {
      foreachLoopRemove('.content3 .card2', 'toUp', 100);
    },200);
  }

  // 5
  if(thisScroll > queryClass('.content4').offsetTop - 200) {
    //content3 
    addClass('.content3 h2','toRight');
    foreachLoopAdd('.content3 .card2', 'toUp', 100);

    // content4
    removeClass('.content4 h2', 'fade1');
    setTimeout(() => {
      foreachLoopRemove('.content4 .card3','toUp', 100);
    },200);
  }

  // 6
  if(thisScroll > queryClass('.galeri').offsetTop - 400) {
    // content4
    addClass('.content4 h2', 'fade1');
    foreachLoopAdd('.content4 .card3','toUp', 100);

    // galeri
    removeClass('.galeri h2', 'fade1');
    setTimeout(() => {
      foreachLoopRemove('.galeri .card4','toUp', 100);
    },200);
  }

  // 7
  if(thisScroll > queryClass('.testimoni').offsetTop - 200) {
    // galeri
    addClass('.galeri h2', 'fade1');
    foreachLoopAdd('.galeri .card4','toUp', 100);

    // testimoni
    removeClass('.testimoni h2','fade1');
    removeClass('.testimoni .testimoniMain','toUp');
  }
})