const element = document.getElementById('middle');
const elementRect = element.getBoundingClientRect();
const absoluteElementTop = elementRect.top + window.pageYOffset;
const middle = absoluteElementTop - (window.innerHeight / 2);
window.scrollTo(0, middle);