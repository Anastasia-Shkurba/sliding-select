const menu = document.querySelector('menu');
const select = document.querySelector('#select');

menu.onmousemove = handleSelectOn;
menu.onmouseleave = handleSelectOff;

function handleSelectOn(e) {
  if (e.target.tagName !== 'A') return;

  const anchor = e.target;
  const { left, width } = anchor.getBoundingClientRect();
  
  updateSelect(left, width);
}

function handleSelectOff() {
  const {hash} = location;

  if (!hash) {
    const { left, width } = select.getBoundingClientRect();

    updateSelect(left + width/2, 0);

    return;
  }

  const anchor = menu.querySelector(`a[href="${hash}"]`);
  const { left, width } = anchor.getBoundingClientRect();
  
  updateSelect(left, width);
}

function updateSelect(left, width) {
  select.style.left = `${left}px`;
  select.style.width = `${width}px`;
}

