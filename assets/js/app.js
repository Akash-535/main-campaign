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
                isActiveTab.classList.remove('active', 'bg-twilight', 'text-white', 'font-bold',);
            isActiveTab.classList.add('bg-roseWhite', 'text-steel',); }
        contents.forEach(content => content.classList.add('hidden'));     
        tab.classList.add('active', 'bg-twilight', 'text-white', 'font-bold',);
        tab.classList.remove('bg-roseWhite', 'text-steel',);
        
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('hidden');
    });
});
// Tab 2
const tabTwo = document.querySelectorAll('.tabTwo');
const contentsTwo = document.querySelectorAll('.tabsInfoTwo');

tabTwo.forEach(tab => {
    tab.addEventListener('click', () => {
        const isActiveTab = document.querySelector('.tabTwo.active');
        if (isActiveTab) {
                isActiveTab.classList.remove('active', 'bg-twilight', 'text-white', 'font-bold',);
            isActiveTab.classList.add('bg-roseWhite', 'text-steel',); }
        contentsTwo.forEach(content => content.classList.add('hidden'));     
        tab.classList.add('active', 'bg-twilight', 'text-white', 'font-bold',);
        tab.classList.remove('bg-roseWhite', 'text-steel',);
        
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('hidden');
    });
});