document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
    setTimeout(() =>{
      document.querySelector('.subscription').classList.remove('done');
    }, 5000);
  });