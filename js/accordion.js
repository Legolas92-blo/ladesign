const accordionItem = document.querySelectorAll('.accordion__item');
const accordionTitle = document.querySelectorAll('.accordion__title');


function removeClassItem () {
  accordionItem.forEach((child) => child.classList.remove('active-accordion-item'));
}

export default accordionTitle.forEach((item) => {
  item.addEventListener('click', (event) => {
    const parent = item.parentNode;
    event._isClick = true;

    if(parent.classList.contains('active-accordion-item')) {
      parent.classList.remove('active-accordion-item');
    } else {
      
      removeClassItem();
      parent.classList.add('active-accordion-item');
    }
  })
})

document.addEventListener('click', (event) => {
  if(!event._isClick) {
    removeClassItem();
  }
} )