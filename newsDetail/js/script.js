

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
removeClass('.body-content svg', 'toUp');
setTimeout(() => {
  removeClass('.body-content img', 'toUp');
  removeClass('.body-content .right', 'toUp');

}, 500)