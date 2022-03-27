document.querySelectorAll('.video-container video').forEach(vid =>{
  vid.onclick = () => {
    document.querySelector('.pop-video').style.display = 'block';

    document.querySelector('.pop-video video').src =  vid.getAttribute('src');

  }
});

document.querySelector ('.pop-video span').onclick = () => {
  document.querySelector('.pop-video').style.display = 'none';
}
