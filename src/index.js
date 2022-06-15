document.querySelector('.header__bars').addEventListener('click', () => {
    document.querySelectorAll('main, footer, .header__info div, .header__ph').forEach((selector) => {
        selector.style.display = 'none';
    });
    document.querySelector('.header__bars').style.display = 'none';
    document.querySelector('.header__xmark').style.display = 'block';
    document.querySelector('.header__nav').style.display = 'flex';
})

document.querySelector('.header__xmark').addEventListener('click', function() {
    document.querySelectorAll('main, footer, .header__info-name, .header__info-desc, .header__ph').forEach((selector) => {
        selector.style.display = 'block';
    });
    document.querySelector('.header__bars').style.display = 'block';
    document.querySelectorAll('.header__xmark, .header__nav').forEach((selector) => { selector.style.display = 'none' })
})