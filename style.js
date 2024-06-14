// slider background starts here

const images = [
  'https://M-Hajjar.github.io/hosted-assets/dslider3.jpg',
  'https://M-Hajjar.github.io/hosted-assets/dslider2.jpg',
  'https://M-Hajjar.github.io/hosted-assets/dslider1.jpg',
  'https://M-Hajjar.github.io/hosted-assets/slider1.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  document.querySelector('.home').style.backgroundImage = `url('${images[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}
setInterval(changeBackgroundImage, 5000);

// accordion slider starts here

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// back to top buttun starts here

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// newsletter messege starts here

document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("emailInput").value;


    if (email.trim() === "") {
        alert("Please enter your email address.");
        return;
    }

    document.getElementById("subscribeMessage").innerText = "Thanks for Subscribing!";
    document.getElementById("subscribeMessage").style.display = "block";

    document.getElementById("emailInput").value = "";
});

// our doctors section starts here
document.addEventListener("DOMContentLoaded", function() {
  showDepartment('neurology');
});

function showDepartment(department) {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    if (card.getAttribute('data-department') === department || department === 'all') {
      card.classList.add('slide-in');
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
      card.classList.remove('slide-in');
    }
  });
}
