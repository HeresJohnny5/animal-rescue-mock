/* SPINNER SCRIPT */
// $(document).ready(function(){
//   $('#spinner').fadeOut('slow');
// });

function showSite() {
  // hide spinner
  document.querySelector('.spinner-container').style.display = 'none';
  // show the site
  document.querySelector('.loading').style.display = 'block';
}

function something() {
  // 2 images in CSS
  // ../img/krista-mangulsone-53122-unsplash.jpg
  // ../img/eric-ward-610868-unsplash.jpg

  // set spinner

  let images = [
    './img/laula-co-567341-unsplash.jpg',
    './img/yerlin-matu-481826-unsplash.jpg',
    './img/jairo-alzate-45522-unsplash.jpg',
    './img/justin-veenema-156591-unsplash.jpg',
    './img/erik-jan-leusink-561776-unsplash.jpg',
    './img/fotografierende-1242091-unsplash.jpg',
    './img/edgar-chaparro-715192-unsplash.jpg',
    './img/isabela-ferreira-780664-unsplash.jpg',
    './img/diana-parkhouse-1166627-unsplash.jpg',
    './img/caleb-woods-248879-unsplash.jpg',
    './img/rebekah-howell-467459-unsplash.jpg',
    './img/Cover-2019-tb-1.png',
    './img/WLC-Baby-Shower-Thumbnail.png',
    './img/barkshadyside.jpg',
    './img/DSGPM_Logo1_Stacked_3C.png',
    './img/ColonyLogo-400x195.png',
    './img/logo.png'
  ];

  images.forEach(src => {
    var img = document.createElement('img');
    img.src = src;
  });

  showSite();
}

something();

/* TYPEDJS SCRIPT */
var options = {
  backDelay: 500,
  backSpeed: 60,
  cursorChar: "|",
  strings: ["Adopt ^1000", "Donate ^1000", "Volunteer ^1000"],
  startDelay: 600,
  stringsElement: null,
  typeSpeed: 60,
  loop: true
}

var typed = new Typed(".typedjs-strings", options);