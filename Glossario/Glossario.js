const itemtitle = document.querySelectorAll('.nav-item-title');

itemtitle.forEach(itemtitle => {
    itemtitle.addEventListener('click', () => {

        const item = itemtitle.parentElement;

        item.classList.toggle('ativo');
    });
});