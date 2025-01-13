const navlinks = document.querySelectorAll('header nav a')
const logolink = document.querySelector('.logo')
const sections = document.querySelectorAll('section')
const menuicon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')

menuicon.addEventListener('click',() => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

const activepage = () => {
   const header = document.querySelector('header')
   const barsbox = document.querySelector('.bars-box')

   header.classList.remove('active')
   setTimeout(() => {
       header.classList.add('active')
   },1000)

   navlinks.forEach(link => {
        link.classList.remove('active')
    })

   barsbox.classList.remove('active')
   setTimeout(() => {
        barsbox.classList.add('active')
    },1000)

   sections.forEach(section => {
        section.classList.remove('active')
    })

    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')

}

navlinks.forEach((link,idx) => {
    link.addEventListener('click',() => {
        if (!link.classList.contains('active')){
            activepage()

            link.classList.add('active')

            setTimeout(() => {
                 sections[idx].classList.add('active')
            },1000)
        }
    })
})

logolink.addEventListener('click',() => {
    if (!navlinks[0].classList.contains('active')){
        activepage()

        navlinks[0].classList.add('active')
        
        setTimeout(() => {
            sections[0].classList.add('active')
       },1000)
    }
})


const resumeBtns = document.querySelectorAll('.resume-btn')

resumeBtns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
          const resumDetails = document.querySelectorAll('.resume-detail')

        resumeBtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumDetails.forEach(detail => {
            detail.classList.remove('active')
        })
        resumDetails[idx].classList.add('active')
    })
})

const arrowright = document.querySelector('.portfolio-box .navigation .arrow-right')
const arrowleft = document.querySelector('.portfolio-box .navigation .arrow-left')

let index = 0

const activePortfolio = () => {
    const imgslide = document.querySelector('.portfolio-carousel .img-slide')
    const portfolioDetails = document.querySelectorAll('.portfolio-detail')

    imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    })
    portfolioDetails[index].classList.add('active')
}

arrowright.addEventListener('click', () => {
    if(index < 9) {
        index++
        arrowleft.classList.remove('disabled')
    }
    else{
        index = 10
        arrowright.classList.add('disabled')
    }

    activePortfolio()
})

arrowleft.addEventListener('click', () => {
    if(index > 1) {
        index--
        arrowright.classList.remove('disabled')
    }
    else{
        index = 0
        arrowleft.classList.add('disabled')
    }

    activePortfolio()
})

// ------email js-----
const contactform = document.getElementById('contact-form'),
      contactname = document.getElementById('contact-name'),
      contactemail = document.getElementById('contact-email'),
      contactproject = document.getElementById('contact-project'),
      contactmessage = document.getElementById('contact-message')

const sendemail = (e) => {
    e.preventDefault()
    
    if(contactname.value === '' || contactemail.value === ''|| contactproject.value === ''){
        contactmessage.classList.remove('color-blue')
        contactmessage.classList.add('color-red')

        contactmessage.textContent = 'Write the message📝'
    }else{
        emailjs.sendForm('service_qyob67j','template_j8idmap','#contact-form','wV204D82ncTCfNF61')
            .then(() => {
                contactmessage.classList.add('color-blue')
                contactmessage.textContent = 'Message sent ✅'

                setTimeout(() =>{
                    contactmessage.textContent = ''
                },5000)
            })
    }

}   
contactform.addEventListener('submit',sendemail) 
console.log(contactform, contactname, contactemail, contactproject, contactmessage);
