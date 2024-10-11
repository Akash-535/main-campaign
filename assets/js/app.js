// ==navbar
function navMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');

    const navBtn = document.getElementById('navBtn');
    navBtn.classList.toggle('active');
    document.body.classList.toggle("overflow-hidden")
}

// tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tabsInfo');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const isActiveTab = document.querySelector('.tab.active');
        if (isActiveTab) {
                isActiveTab.classList.remove('active', 'bg-twilight', 'text-white', 'font-bold','hover:bg-opacity-100');
            isActiveTab.classList.add('bg-roseWhite', 'text-steel',); }
        contents.forEach(content => content.classList.add('hidden'));     
        tab.classList.add('active', 'bg-twilight', 'text-white', 'font-bold','hover:bg-opacity-100');
        tab.classList.remove('bg-roseWhite', 'text-steel',);
        
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('hidden');
    });
});
// Tabs 2
const tabTwo = document.querySelectorAll('.tabTwo');
const contentsTwo = document.querySelectorAll('.tabsInfoTwo');

tabTwo.forEach(tab => {
    tab.addEventListener('click', () => {
        const isActiveTab = document.querySelector('.tabTwo.active');
        if (isActiveTab) {
                isActiveTab.classList.remove('active', 'bg-twilight', 'text-white', 'font-bold', 'hover:bg-opacity-100');
            isActiveTab.classList.add('bg-roseWhite', 'text-steel',); }
        contentsTwo.forEach(content => content.classList.add('hidden'));     
        tab.classList.add('active', 'bg-twilight', 'text-white', 'font-bold', 'hover:bg-opacity-100');
        tab.classList.remove('bg-roseWhite', 'text-steel',);
        
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('hidden');
    });
});

// slider
$(".slider").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    centerMode: true,
       slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                               
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
});
// footer slider
$(".slider-footer").slick({
    speed: 2000,
      cssEase: 'linear',
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    nextArrow: ".prev",
    prevArrow: ".next",  
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed:0,
                dots: true,
                                   }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed:0,
                dots: true,
                         }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                  autoplay:true,
                autoplaySpeed:0,
                dots: true,
                           }
        },
      
    ]
});
// card 3d hover
const card = document.querySelectorAll('.card');
        card.forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const cardBox = card.getBoundingClientRect();
                const cardWidth = cardBox.width;
                const cardHeight = cardBox.height;
                const centerX = cardBox.left + cardWidth / 2;
                const centerY = cardBox.top + cardHeight / 2;

                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                const rotateX = (mouseY / cardHeight) * 25;
                const rotateY = -(mouseX / cardWidth) * 25;
                card.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
            });
        });

     // Back to top button js
let topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => topBtn.style.opacity = window.scrollY > 150 ? 1 : 0;