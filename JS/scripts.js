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

// slider
let sliderLogosList = document.getElementsByClassName("sliderLogosList")[0];
let squares = document.getElementsByClassName("squares");
let sliderSquares = document.getElementsByClassName('sliderSquares')[0];
let logos = document.getElementsByClassName('logos');

window.addEventListener('load', function (){
    if(window.innerWidth <= 1140){
        squares[squares.length - 1].style.display = 'block';
        document.getElementsByClassName('sliderLogos')[0].style.width = '690px';
    }
    if(window.innerWidth <= 1000){
        sliderSquares.style.display = "none";
        document.getElementsByClassName('sliderLogos')[0].style.width = '110%';

        // for(let i = 0; i < logos.length; i++){
        //     logos[i].addEventListener("click", function () {}

        let manager = new Hammer(sliderLogosList);
        manager.on("pan", handleDrag);
        let lastPosX = 0;
        let isDragging = false;

        function handleDrag(ev) {
            let elem = ev.target;

            if ( ! isDragging ) {
                isDragging = true;
                lastPosX = elem.offsetLeft;
            }

            let posX = ev.deltaX + lastPosX;
            elem.style.left = posX + "px";

            if (ev.isFinal) {
                isDragging = false;
            }
        }
    }
});

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function () {
        for(let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = 'white';
        }
        switch (this.getAttribute('data-id')) {
            case "first":
                sliderLogosList.style.marginLeft = '0';
                this.style.backgroundColor = '#ffdb00';
                break;
            case "second":
                sliderLogosList.style.marginLeft = window.innerWidth < 1140 ? '-690px': '-920px';
                this.style.backgroundColor = '#ffdb00';
                break;
            case "third":
                sliderLogosList.style.marginLeft = window.innerWidth < 1140 ? '-1380px' : '-1840px';
                this.style.backgroundColor = '#ffdb00';
                break;
            case "fourth":
                sliderLogosList.style.marginLeft = '-2070px';
                this.style.backgroundColor = '#ffdb00';
                break;
            default:
                sliderLogosList.style.marginLeft = '0';
                this.style.backgroundColor = '#ffdb00';
                console.log("Sorry, we are out of.");
        }
        });
}

// test

// var myBlock = document.getElementById('myElement');
// var mc = new Hammer(myBlock);
// mc.on("pan", handleDrag);
// var lastPosX = 0;
// var isDragging = false;
//
// function handleDrag(ev) {
//     var elem = ev.target;
//
//     if ( ! isDragging ) {
//         isDragging = true;
//         lastPosX = elem.offsetLeft;
//     }
//
//     var posX = ev.deltaX + lastPosX;
//     elem.style.left = posX + "px";
//
//     if (ev.isFinal) {
//         isDragging = false;
//     }
// }

