const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('a:nth-of-type(1)')
nav.textContent ="Services"
const nav2 = nav.nextElementSibling
nav2.textContent ="Product"
const nav3 = nav2.nextElementSibling
nav3.textContent ="Vision"
const nav4 = nav3.nextElementSibling
nav4.textContent ="Features"
const nav5 = nav4.nextElementSibling
nav5.textContent ="About"
const nav6 = nav5.nextElementSibling
nav6.textContent ="Element"

// const nav7 = nav.appendChild(document.createElement(‘a’));
// nav7.href=‘#’;
// nav7.textContent= ‘Info’
// const newNav = document.createElement (‘a’);
// newNav.textContent = ‘Prepend’;
// newNav.href= ‘#’;
// nav.prepend(newNav);





const allLinks = document.querySelectorAll ('a')
for (let i =0; i < allLinks.length; i++){
  allLinks[i].style.color = 'green'
}

const header = document.querySelector('h1')
header.textContent = 'Dom is Awesome'
const button = document.querySelector ('button')
button.textContent = 'Get Started'

const snippet = document.querySelector('.cta #cta-img' )
snippet.src = "img/header-img.png"

const paragraph = document.querySelector ('.top-content .text-content p:nth-of-type(1)')
paragraph.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const paragraph2 = document.querySelector ('.top-content .text-content p:nth-of-type(2)')
paragraph2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg = document.querySelector ('.middle-img')
middleImg.src = 'img/mid-page-accent.jpg'


const paragraph3 = document.querySelector ('.bottom-content .text-content p:nth-of-type(1)')
paragraph3.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

const paragraph4 = document.querySelector ('.bottom-content .text-content p:nth-of-type(2)')
paragraph4.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const paragraph5 = document.querySelector ('.bottom-content .text-content p:nth-of-type(3)')
paragraph5.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'






const h4contact = document.querySelector('.contact h4' )
h4contact.textContent = "Contact"


const add1 = document.querySelector('.contact p:nth-of-type(1)')
add1.innerHTML ='123 Way 456 Street Somewhere, USA'
const add2 = add1.nextElementSibling
add2.textContent ="1(888) 888-8888"
const add3 = add2.nextElementSibling
add3.textContent ="sales@greatidea.io"




const footer = document.querySelector('footer')
footer.textContent = 'Copyright Great Idea! 2018'




// const h4tc = document.querySelectorAll('.top-content .text-content h4')
// // h4tc.textContent = "Features"

const h4tc = document.querySelectorAll('.text-content h4');

console.log(h4tc)



