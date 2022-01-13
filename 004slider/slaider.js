// var cont1 = document.querySelector("#slider-one");
// var cont2 = document.querySelector("#slider-two");
var slaider1 = new Slider;
var slaider2 = new Slider();
slaider1.start("slider-one");
slaider2.start("slider-two");

// var languageJS = {
//     word: 0,
//     name: "java script",
//     basicKnowledge: "HTML, CSS, базы данных, ООП",
//     start: function() {
//         this.word = 10;
//     },
// };
////////////////////////////////////////////////////КОД ДО ИЗМЕНЕНИЯ
// var button1 = document.getElementById("button1");
// var button2 = document.getElementById("button2");
// var sliderImg1 = document.getElementById("sliderImg");
// button1.addEventListener("click", listaiGo);
// button2.addEventListener("click", listaiNazad);

// var vseImg = [
//     "https://www.brutka.com/img/javascript-logo.png",
//     "https://commons.bmstu.wiki/images/8/88/Java_logo.png",
//     "https://bestprogrammer.ru/wp-content/uploads/2021/01/proekty-Python.jpg",
// ];

// var nullok = 0;
// sliderImg1.src = vseImg[nullok];
// button1.disabled = true;

// function listaiGo(event) {
//     nullok--;
//     sliderImg1.src = vseImg[nullok];
//     button2.disabled = false;
//     if (nullok === 0) {
//         button1.disabled = true;
//     }
// }

// function listaiNazad(event) {
//     nullok++;
//     sliderImg1.src = vseImg[nullok];
//     button1.disabled = false;
//     if (nullok === 2) {
//         button2.disabled = true;
//     }
// }