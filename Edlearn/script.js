const menuBtn = document.querySelector('.btn-menu');
const navBar = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    const isOpened = menuBtn.getAttribute('aria-expanded');
    const btnState = menuBtn.getAttribute('data-state');

    navBar.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', `${isOpened === 'true' ? 'false' : 'true'}`);

    menuBtn.setAttribute('data-state', `${!btnState || btnState === 'closed' ? 'opened' : 'closed'}`);
})