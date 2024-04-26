function pointer(clickedDiv) {
    var divs = document.querySelectorAll('.main-pointer');
    divs.forEach(function(div) {
        div.classList.remove('active');
    });
    clickedDiv.classList.add('active');
}