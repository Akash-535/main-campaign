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
        isActiveTab && isActiveTab.classList.remove('active')
        contents.forEach(content => content.classList.add('hidden'));
        tab.classList.toggle('active');
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('hidden')
        targetContent && targetContent.classList.add('flex')
    });
});