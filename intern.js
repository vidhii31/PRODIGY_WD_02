// Change menu style on scroll
window.onscroll = function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#555';
        
    
    } 
    else {
        nav.style.backgroundColor = 'black';
    }
  
};
