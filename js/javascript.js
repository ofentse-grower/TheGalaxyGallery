// portfolio item filter
const filterContainer = document.querySelector('.dog-filter'),
    filterbtns = filterContainer.children,
    totalFilterbtn = filterbtns.length,
    lightboxclose = document.querySelector(".lightbox-close"),
    dogItems = document.querySelectorAll(".dog-item"),
    totaldogItem = dogItems.length;



for (let i = 0; i < totalFilterbtn; i++) {

    filterbtns[i].addEventListener('click', function() {
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filtervalue = this.getAttribute("data-filter");
        console.log(filtervalue)
        for (let k = 0; k < totaldogItem; k++) {
            if (filtervalue === dogItems[k].getAttribute("data-category")) {

                dogItems[k].classList.remove("hide");
                dogItems[k].classList.add("show");

            } else {
                dogItems[k].classList.remove("show");
                dogItems[k].classList.add("hide");
            }
            if (filtervalue === "All") {
                dogItems[k].classList.remove("hide");
                dogItems[k].classList.add("show");
            }
        }
    })

}


// portfolio lightbox

const lightbox = document.querySelector('.lightbox'),
    lightboxImg = lightbox.querySelector('.lightbox-img'),
    lightboxText = lightbox.querySelector('.caption-text'),
    lightboxCounter = lightbox.querySelector('.caption-counter');

let itemIndex = 0;


for (let i = 0; i < totaldogItem; i++) {
    dogItems[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function prevItem() {

    if (itemIndex === 0) {
        totaldogItem - 1
    } else {
        itemIndex--;
    }
    changeItem(itemIndex)
}

function nextItem() {
    if (itemIndex === totaldogItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem(itemIndex)
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    imgSrc = dogItems[itemIndex].querySelector(".dog-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = dogItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " " + "of" + "   " + totaldogItem;

}
//close lightbox

lightbox.addEventListener("click", function(event) {
    if (event.target === lightboxclose || event.target == lightbox) {
        toggleLightbox();
    }
})