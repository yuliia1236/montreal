// to top button

window.addEventListener("scroll", showToTopButton);
let toTopBtn = document.getElementById('toTopBtn');
// toTopBtn.addEventListener("onmouseover", function(){
//     toTopBtn.style.visibility = "visible";
// });                                                                        ???
let currentScroll, tempScroll = 0;

function showToTopButton() {
    currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (window.pageYOffset > 600 || document.documentElement.scrollTop > 600) {
        if(tempScroll < currentScroll){
            tempScroll = currentScroll;
        } else if (tempScroll > currentScroll) {
            setTimeout(function() {
                toTopBtn.classList.add('hidden');
                // toTopBtn.style.display = "none";
            },2500);
            toTopBtn.classList.remove('hidden');
            //  toTopBtn.style.display = "block";
            tempScroll = currentScroll;
        }
    } else {
        toTopBtn.classList.add('hidden');
        // toTopBtn.style.display = "none";
    }
}