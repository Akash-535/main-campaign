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
                isActiveTab.classList.remove('active', 'bg-twilight', 'text-white', 'py-5', 'px-8', 'font-bold','text-[22px]','max-lg:text-lg','max-md:text-base','max-sm:text-sm');
            isActiveTab.classList.add('bg-roseWhite', 'text-steel','py-4', 'px-6',);
        }

        contents.forEach(content => content.classList.add('hidden'));
        
        // Add active classes to the clicked tab
        tab.classList.add('active', 'bg-twilight', 'text-white', 'py-5', 'px-8', 'font-bold','text-[22px]','max-lg:text-lg','max-md:text-base','max-sm:text-sm',);
        tab.classList.remove('bg-roseWhite', 'text-steel', 'py-4', 'px-6',);
        
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('hidden');
        targetContent && targetContent.classList.add('flex');
    });
});