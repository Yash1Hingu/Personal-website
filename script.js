function revels() {
    var revels = document.querySelectorAll('.revel');
    
    for(let i =0;i < revels.length;i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revels[i].getBoundingClientRect().top;
        var elementVisiable = 150;
        if(elementTop < windowHeight - elementVisiable) {
            revels[i].classList.add('active')
        } else {
            revels[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll',revels)
