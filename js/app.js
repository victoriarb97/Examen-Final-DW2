// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
    id: 'com.app',
    root: '#app',
    theme: 'md',
    view: {
        pushState: true
    },
    cache: false,
    cacheDuration: 0,
    modalTitle: 'Bookshop App',
    panel: {
        swipe: true,
    },
    routes: [
        { path: '/', url: 'index.html', name: 'home' },
        { path: '/list/', url: 'list.html', name: 'list' },
        { path: '/profile/', url: 'profile.html', name: 'profile' },
        { path: '/info/', url: 'info.html', name: 'info' }
    ],
    dialog: {
        title: 'Bookshop App',
        buttonOk: 'Aceptar',
    },
    popup: {
        closeOnEscape: true,
        backdrop: false
    },
    sheet: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    actions: {
        closeOnEscape: true,
    }
});
app.on('pageInit', function (page) {
  if (page.name === 'info') {
    app.swiper.create('.swiper-container', {
      pagination: { el: '.swiper-pagination' },
      spaceBetween: 10,
      slidesPerView: 1,
    });
  }
});





