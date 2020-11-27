// header //
const header = document.querySelector(`.header`);
const btnMenuOpen = header.querySelector(`.header__btn-menu`);
const btnMenulose = header.querySelector(`.header__btn-nav-close`);
const headerMenu = header.querySelector(`.header__wrapper-nav`);

btnMenuOpen.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  headerMenu.classList.add(`header__wrapper-nav--open`);
  document.body.style.overflow = 'hidden';
});
btnMenulose.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  headerMenu.classList.remove(`header__wrapper-nav--open`);
  document.body.style.overflow = '';
});

const subMenuLink = document.querySelectorAll(`.nav-menu__link-arrow`);
  subMenuLink.forEach(link => {
    link.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    let linkPreviousSibling = link.previousSibling;
    
    linkPreviousSibling.classList.toggle(`nav-menu__link--open`);
    let container = evt.target.closest(`.nav-menu__item`);
    container.querySelector(`.nav-menu__sub-list`).classList.toggle(`nav-menu__sub-list--open`);
  });
})

function popupSearch() {
  const headerSearch = document.querySelector(`.header__search`);
  const popup = document.querySelector(`.popup-search`);
  const popupClose = popup.querySelector(`.popup-search__close`);
  
  if (!headerSearch) return;

  headerSearch.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    popup.classList.add(`popup-search--open`);
  });
  popupClose.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    popup.classList.remove(`popup-search--open`);
  });
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === 27) {
      if (popup.matches(`.popup-search--open`)) {
        popup.classList.remove(`popup-search--open`);
      }
    }
  })
}
popupSearch();


// header end //
