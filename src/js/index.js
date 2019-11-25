import block from '@js/block.tpl';

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('App started...');
  document.body.innerHTML = block({ title: 'Block title' });
}, false);

