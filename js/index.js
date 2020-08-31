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

const nav = document.querySelector('a')
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



const nav7 = document.querySelector('nav');
const addElement = document.createElement('a')
addElement.textContent = 'GoodJob'

addElement.setAttribute('href','#')
nav7.appendChild(addElement)

const nav8 = document.querySelector('nav');
const addElement2 = document.createElement('a')
addElement2.textContent = 'Look Here'
nav8.prepend(addElement2)
addElement2.setAttribute('href', '#')


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
header.innerHTML = 'Dom <br> is <br> Awesome'
const button = document.querySelector ('button')
button.textContent = 'Get Started'

const snippet = document.querySelector('.cta #cta-img' )
snippet.src = "img/header-img.png"

const paragraph = document.querySelectorAll ('.text-content p')
paragraph[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
console.log(paragraph)

paragraph[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg = document.querySelector ('.middle-img')
middleImg.src = 'img/mid-page-accent.jpg'

paragraph[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

paragraph[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

paragraph[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// const h4tc = document.querySelectorAll ('.text-content h4')
// h4tc[0].textContent = 'Features'

const h4Middle= document.querySelectorAll('.text-content h4')
h4Middle[0].textContent = 'Features'
h4Middle[1].textContent = 'About'
h4Middle[2].textContent= 'Services'
h4Middle[3].textContent ='Product'
h4Middle[4].textContent = 'Vision'


const h4contact = document.querySelector('.contact h4' )
h4contact.textContent = "Contact"


const add1 = document.querySelector('.contact p:nth-of-type(1)')
add1.innerHTML ='123 Way 456 <br> Street Somewhere, USA'
const add2 = add1.nextElementSibling
add2.textContent ="1(888) 888-8888"
const add3 = add2.nextElementSibling
add3.textContent ="sales@greatidea.io"




const footer = document.querySelector('footer')
footer.textContent = 'Copyright Great Idea! 2018'




// const h4tc = document.querySelectorAll('.top-content .text-content h4')
// // h4tc.textContent = "Features"

const h4tc = document.querySelectorAll('h4');

console.log(h4tc)



