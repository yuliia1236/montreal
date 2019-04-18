// to top button

window.addEventListener("scroll", showToTopButton);
let toTopBtn = document.getElementById('toTopBtn');
// toTopBtn.addEventListener("onmouseover", function(){
//     toTopBtn.style.visibility = "visible";
// });                                                          ???
let currentScroll, tempScroll = 0;

function showToTopButton() {
    currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (tempScroll < currentScroll) {
        tempScroll = currentScroll;
    } else if ((tempScroll > currentScroll) && (currentScroll > 600)){
        setTimeout(function () {
            toTopBtn.classList.add('hidden');
            // toTopBtn.style.display = "none";
        }, 3000);
        toTopBtn.classList.remove('hidden');
        //  toTopBtn.style.display = "block";
        tempScroll = currentScroll;
    }
}

//auto slider

let statsBlocksContainers = document.querySelectorAll('.statsBlocksContainers');
let currenStatsBlockContainer = 0;

window.onload = function () {
    if(window.innerWidth <= 520){
        setInterval(slidesAutoChanger, 3000);
    } else if(window.innerWidth <= 1000){
        setInterval(slidesAutoChanger_2, 3000);
    }
};

function slidesAutoChanger() {
    statsBlocksContainers[currenStatsBlockContainer].style.display = "none";
    currenStatsBlockContainer = (currenStatsBlockContainer + 1)%statsBlocksContainers.length;
    statsBlocksContainers[currenStatsBlockContainer].style.display = "flex";
}

function slidesAutoChanger_2() {
    statsBlocksContainers[currenStatsBlockContainer].style.display = "none";
    statsBlocksContainers[currenStatsBlockContainer + 1].style.display = "none";
    currenStatsBlockContainer = (currenStatsBlockContainer + 2)%statsBlocksContainers.length;
    statsBlocksContainers[currenStatsBlockContainer].style.display = "flex";
    statsBlocksContainers[currenStatsBlockContainer + 1].style.display = "flex";
}

//

