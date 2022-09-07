// ================================================== loader
// variable
let loader = document.querySelector('.load');
window.addEventListener('load', () => {
    loader.style.opacity = '0';
    // loader.style.width = '0';
    // setTimeout(() => {
    //     loader.lastElementChild.style.opacity = '0';
    // }, 250)
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});
// ================================================= end loader
// ================================================= intro
let buttonGroup = document.querySelectorAll('button');
let headingText = document.querySelector('.banner .container-text .text .heading');
// let textHeading = 'We are ready to bring beautiful memories into your album '.split(" ");
buttonGroup.forEach((e) => {
    e.style.opacity = '0';
    e.style.transition = '0s';
})
if(loader.style.display = 'none') {
//     function showText () {
//         let index = 0;
//         let text = '';  
//         let textPrint = setInterval(() => {
//             text +=  `<span class=\"text-print${index}\ text-print" style='opacity:1'>${textHeading[index]}</span>`;
//                 text += ' ';
//                 headingText.innerHTML= text;
//                 index += 1;
//                 if (index == textHeading.length) {
//                 clearInterval(textPrint);
//             }
//         }, 10)
//         let textSpan = document.querySelector('.text-print');
//         console.log(textSpan)
//     }
//     showText()

setTimeout(() => {
    headingText.style.opacity = 1;
    }, 50)
}

setTimeout(() => {
    buttonGroup.forEach((e) => {
        e.style.opacity = '1';
        e.style.transition = '0';
    })
    // buttonGroup[0].style.opacity = '1';
    // buttonGroup[1].style.opacity = '1';
    // buttonGroup[0].style.transition = '0.5s';
    // buttonGroup[1].style.transition = '0.5s';
}, 100)
// ================================================= end intro
// ========================================== function hidden & show
function hiddenEl(name, timeOut) {
    name.style.opacity = '0';
    setTimeout(() => {
        name.style.display = 'none';
    }, timeOut);
};

function showOpEL(name, timeOut, display) {
    name.style.display = display;
    setTimeout(() => {
            name.style.opacity = '100%';
    }, timeOut);

}
// ========================================== end hidden & close
// ================== create variable
// navbar
const navbar = document.querySelector('.navbar');
// visit button
let visit = document.querySelectorAll('.visit .fa-caret-right');
// end visit button
// ==scroller (offer)
let scrollerContainer = document.querySelectorAll('.offer .card-group');
let offerNextButton = document.querySelector('.offer .content .next-button');
// ==end scroller (offer);
// ==why us
let ourInfo = document.querySelectorAll('.us .container .text .ul .info');
let usTitle = document.querySelector('.us .container .title .text');
// count number
// count 1
function countNG1() {
    let index1 = 1;
    let count1 = 0; 
    let countN1= setInterval(function() {
    index1++
    let num = 48903;
    let countChild = countNumber(num, index1, count1);
    count1 += countChild;
    document.querySelector('.us .side .info-container .info:nth-child(1) .content').innerHTML = count1;
    if (count1 == num || count1 > num) {
        clearInterval(countN1);
    }
    
}, 10);
};
// count2
function countNG2() {
    let index2 = 1;
let count2 = 0;
let countN2= setInterval(function() {
    index2++
    let num = 48803;
    let countChild = countNumber(num, index2, count2);
    count2 += countChild;
    // console.log(`countChild: ${countChild}`);
    // console.log(`count2: ${countN2}`)
    document.querySelector('.us .side .info-container .info:nth-child(2) .content').innerHTML = count2;
    if (count2 == num || count2 > num) {
        clearInterval(countN2);
    }
}, 10)
}

function countNG3() {
    let index3 = 1;
    let count3 = 0;
    let countN3 = setInterval(function() {
    index3++
    let num = 48;
    let countChild = countNumber(num, index3, count3);
    count3 += countChild;
    document.querySelector('.us .side .info-container .info:nth-child(3) .content').innerHTML = `${count3} years`;
    if (count3 == num || count3 > num) {
        clearInterval(countN3);
    }
}, 100)
}

// ==end why us
// start
visit.forEach(function (e) {
    // e.parentElement.style.display = 'none';
    e.parentElement.style.opacity = '0';
})



// offerNextButton.previousElementSibling.style.opacity = '0';
// ================== function
// count number
function countNumber(n, index, count) {
    let tambah;
    // mencari tahu n ditambah berapa berapa
    if (n <= 40) {
        tambah = 2;
    } else if (n > 40 && n <= 400) {
        tambah = 10;
    } else if (n > 400 && n <= 1000) {
        tambah = 20;
    } else if (n > 1000 && n <= 10000) {
        tambah = 100;
    } else {
        tambah = 500;
    }
    // menghitung pengulangan sudah berapa kali
    // index++;
    // cari modulus
    let modulus = n % tambah;
    let hasilBagi;
    if (modulus !== 0) {
        hasilBagi = Math.floor(n / tambah);
        // console.log(`hasilbagi: ${hasilBagi}`)
        // console.log(`index: ${index}`)
        // console.log(`tambah: ${tambah}`)
        if (index == hasilBagi) {
            tambah = modulus;
        }
    }
    // count += tambah;

    return tambah;
    // cetak
    // document.querySelector(IOC).innerHTML = count;
    // if (count == n || count > n) {
    //     clearInterval(variabel);
    // }
}

// when scroll
function whenScroll() {
    // let bannerHeight = navbar.parentElement.offsetHeight;
    let heightEl = [navbar.parentElement.offsetHeight, document.querySelector('#about').offsetHeight , document.querySelector('.us').offsetHeight, document.querySelector('.gallery').offsetHeight, document.querySelector('.our-client').offsetHeight, document.querySelector('.contact-us').offsetHeight, document.querySelector('.footer').offsetHeight];
    let value = window.scrollY;
    if (value > heightEl[0] - 50) {
        navbar.classList.add('show-navbar');
    } else {
        navbar.classList.remove('show-navbar');
    }

    // why us
    if (value > 1356) {
        if(document.querySelector('.us .side .info-container .info:nth-child(1) .content').innerHTML == 0) {
            countNG1();
            countNG2();
            countNG3();
        }
    }

    if (value > (heightEl[0] + heightEl[1] - 100) && value < (heightEl[0] + heightEl[1] + heightEl[2] - 400)) {
        // us
        usTitle.style.width = '55%';
        usTitle.style.cursor = 'pointer';
        usTitle.addEventListener('mouseenter', () => {
            usTitle.style.width = '33%';
        })
        usTitle.addEventListener('mouseleave', () => {
            usTitle.style.width = '55%';
        })
        // gallery
    } else {
        usTitle.style.width = '33%';
    }

    if (value > (heightEl[0] + heightEl[1] + heightEl[2] - 80) && value < (heightEl[0] + heightEl[1] + heightEl[2] + 300)) {
        // us
        document.querySelector('.gallery .heading .title .text').style.width = '55%';
        document.querySelector('.gallery .heading .title .text').style.cursor = 'pointer';
        document.querySelector('.gallery .heading .title .text').addEventListener('mouseenter', () => {
            document.querySelector('.gallery .heading .title .text').style.width = '33%';
        })
        document.querySelector('.gallery .heading .title .text').addEventListener('mouseleave', () => {
            document.querySelector('.gallery .heading .title .text').style.width = '55%';
        })
        // gallery
    } else {
        document.querySelector('.gallery .heading .title .text').style.width = '33%';
    }

    // contact us
    if (value > (heightEl[0] + heightEl[1] + heightEl[2] + heightEl[3] + heightEl[4] - 80) && value < (heightEl[0] + heightEl[1] + heightEl[2] + heightEl[3] + heightEl[4] + heightEl[5] + heightEl[6] + 400)) {
        // let lineContact = document.querySelector('.contact-us .container-form .lineH .line');
        document.querySelector('.contact-us .container-form .lineH .line').style.width = '90%';
        document.querySelector('.contact-us .container-form .lineH .line').style.cursor = 'pointer';
        document.querySelector('.contact-us .container-form .lineH .line').addEventListener('mouseenter', () => {
            document.querySelector('.contact-us .container-form .lineH .line').style.width = '33%';
        })
        document.querySelector('.contact-us .container-form .lineH .line').addEventListener('mouseleave', () => {
            document.querySelector('.contact-us .container-form .lineH .line').style.width = '55%';
        })
    } else {
        document.querySelector('.contact-us .container-form .lineH .line').style.width = '43%';
    }
    // end why us
}
// ================== event
ourInfo.forEach(function (e) {
    e.addEventListener('click', function () {
        let dataCaret = e.getAttribute('data-caret');
        if (dataCaret == 'down') {
            e.setAttribute('data-caret', 'up');
            e.firstElementChild.firstElementChild.classList.replace('fa-caret-down', 'fa-caret-up');
            e.lastElementChild.style.height = '100%';
            e.lastElementChild.style.marginBottom = '3%';
            e.lastElementChild.style.marginTop = '1%';
            e.lastElementChild.style.opacity = '100%';
            e.lastElementChild.style.fontSize = 'medium';
        } else if (dataCaret == 'up') {
            e.setAttribute('data-caret', 'down');
            e.firstElementChild.firstElementChild.classList.replace('fa-caret-up', 'fa-caret-down');
            e.lastElementChild.style.height = '0px';
            e.lastElementChild.style.marginBottom = '0';
            e.lastElementChild.style.fontSize = '0px';
            e.lastElementChild.style.opacity = '0';
        }
    })
})
// navbar
window.addEventListener('scroll', whenScroll);
// visit button
visit.forEach(function (e) {
    e.parentElement.parentElement.parentElement.addEventListener('mouseenter', (e) => {
        let visitS = e.target.querySelector('.visit');
        // visitS.style.display = 'flex';
        visitS.style.opacity = '100%';
    })
    e.parentElement.parentElement.parentElement.addEventListener('mouseleave', (e) => {
        let visitS = e.target.querySelector('.visit');
        // visitS.style.display = 'none';
        visitS.style.opacity = '0';
    })
});

// scroller button (offer)
scrollerContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    offerNextButton.addEventListener('click', function () {
        item.scrollLeft += containerWidth;

        offerNextButton.previousElementSibling.style.opacity = '100%';
        if (item.scrollLeft >= containerWidth) {
            offerNextButton.style.opacity = '0';
        }
    })
    offerNextButton.previousElementSibling.addEventListener('click', function () {
        item.scrollLeft -= containerWidth;

        offerNextButton.style.opacity = '100%';
        if (item.scrollLeft <= containerWidth) {
            offerNextButton.previousElementSibling.style.opacity = '0';
        }
    })
})
// end scroller (offer);
// tag
let tag = document.querySelectorAll('.gallery .tag');
let imageGallery = document.querySelectorAll('.gallery .content .image')
tag[0].style.backgroundColor = 'rgb(13, 28, 51)'
let ordermin = -1;
tag.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        e.style.backgroundColor = 'rgb(13, 28, 51)';
    })

    e.addEventListener('mouseleave', () => {
        e.style.backgroundColor = '#000813';
    })

    e.addEventListener('click', () => {
        tag.forEach((e) => {
            e.style.backgroundColor = '#000813';
            // e.style.order = '0';
            e.style.fontColor = 'white';
        })
        e.style.padding = '0';
        e.style.opacity = '0';
        setTimeout(() => {
            e.style.order = `${ordermin}`;
            ordermin = (ordermin - 3);
            e.style.padding = '1.2% 5%';
            e.style.opacity = '1';
            e.style.backgroundColor = 'rgb(13, 28, 51)';
            e.style.fontColor = 'rgba(0,0,0,0)';
        }, 400)
        if (e.id == 'all') {
            imageGallery.forEach((e) => {
                e.style.display = 'block';
                e.style.opacity = '1';
            })
        } else {
            imageGallery.forEach((e) => {
                e.style.display = 'none';
                e.style.opacity = '0';
            })
        }
        // use e.id for get id value
        let showImage = document.querySelectorAll(`.gallery .content .${e.id}`)

        showImage.forEach((e) => {
            setTimeout(function() {
                e.style.display ='block';
                e.style.opacity = '1';
            }, 390);
        })
    })
})


//  ================================================ alert
// variable
function timeC () {
    let alertContainer = document.querySelector('.container-alert');
    let timeLeft = document.querySelector('.container-alert .alert .side .auto-close .number-auto');
    let closeButton = document.querySelector('.container-alert .alert .close-icon');
    let contactButton = document.querySelector('.button-contact');
    // start
    alertContainer.style.display = 'none';
    alertContainer.style.opacity = '0';
    // end
    contactButton.addEventListener('click', () => {
        let index = 8;
        let i = index;
        showOpEL(alertContainer, 200, 'flex')
        let count = setInterval(() => {
            timeLeft.innerHTML = i;
            i--
            if (i < 0 || alertContainer.style.display == 'none') {
                clearInterval(count);
                hiddenEl(alertContainer, 200)
            }
        }, 1000)
    })

    closeButton.addEventListener('click', () => {
        hiddenEl(alertContainer, 200);
    })
}
timeC();
// ================================================ end alert