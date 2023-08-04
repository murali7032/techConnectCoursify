const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const signUpBtn = document.getElementById('signUpBtn');
const signUpForm = document.getElementById('signupForm');

signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
});

// function scrolltoabout(){
//    var ele=document.getElementById("about");
//    ele.scrollIntoView({behavior:'smooth',block:'start'});
// }

// function scrolltoservices(){
//     var serv=document.getElementById("services");
//     serv.scrollIntoView({behavior:'smooth',block:'start'});
// }

// function scrolltotestimonials(){
//     var test=document.getElementById("testimonials");
//     test.scrollIntoView({behavior:'smooth',block:'start'});
// }

// function scrolltocontact(){
//     var con=document.getElementById("contact");
//     con.scrollIntoView({behavior:'smooth',block:'start'});
// }


const navbarLinks = document.querySelectorAll('nav ul li a');

navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const signInBtn = document.getElementById('signInBtn');
const signInForm = document.getElementById('signInForm');

signInBtn.addEventListener('click', (event) => {
  event.preventDefault();
  signInForm.style.display = signInForm.style.display === 'none' ? 'block' : 'none';
});