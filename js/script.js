const animateItems = document.querySelectorAll('._am-item');

if (animateItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll(params) {
      for (let i = 0; i < animateItems.length; i++) {
         const animItem = animateItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 2;

         let animItemPoint = window.innerHeight + animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight + window.innerHeight / animStart;
         }

         if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_no-hide')){
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
         scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
   }

   setTimeout (() => {
      animOnScroll();
   }, 500);
}

const linkToServices = document.getElementById("services");
const linkToServicesFooter = document.getElementById("services-footer");
const services = document.querySelector('.services');

function scrollToServices () {
   if (menuBurger.classList.contains('burger_active')) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('burger_active');
      menuBody.classList.toggle('burger_active');
   }
   services.scrollIntoView({block: "start", behavior: "smooth"});
}

if (linkToServices) {
   linkToServices.addEventListener("click", scrollToServices);
   linkToServicesFooter.addEventListener("click", scrollToServices);
}


const linkToReviews = document.getElementById("reviews");
const linkToReviewsFooter = document.getElementById("reviews-footer");
const reviews = document.querySelector('.reviews');

function scrollToReviews () {
   if (menuBurger.classList.contains('burger_active')) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('burger_active');
      menuBody.classList.toggle('burger_active');
   }
   reviews.scrollIntoView({block: "start",  behavior: "smooth"});
}

if (linkToReviews) {
   linkToReviews.addEventListener("click", scrollToReviews);
   linkToReviewsFooter.addEventListener("click", scrollToReviews);
}


const linkToContacts = document.getElementById("contacts");
const linkToContactsFooter = document.getElementById("contacts-footer");
const contacts = document.querySelector('.contacts');

function scrollToContacts () {
   if (menuBurger.classList.contains('burger_active')) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('burger_active');
      menuBody.classList.toggle('burger_active');
   }
   contacts.scrollIntoView({block: "start",  behavior: "smooth"});
}

if (linkToContacts) {
   linkToContacts.addEventListener("click", scrollToContacts);
   linkToContactsFooter.addEventListener("click", scrollToContacts);
}



const menuBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.navigation');

if (menuBurger) {
   menuBurger.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('burger_active');
      menuBody.classList.toggle('burger_active');
   })
}
