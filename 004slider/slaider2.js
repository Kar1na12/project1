// var slaider1 = createSlider();
// {
//     // button1: document.getElementById("button1"),
//     // button2: document.getElementById("button2"),
//     // sliderImg1: document.getElementById("sliderImg"),
//     button1: null,
//     button2: null,
//     sliderImg1: null,

//     vseImg: [
//         "https://www.brutka.com/img/javascript-logo.png",
//         "https://commons.bmstu.wiki/images/8/88/Java_logo.png",
//         "https://bestprogrammer.ru/wp-content/uploads/2021/01/proekty-Python.jpg",
//     ],
//     nullok: 0,
//     start: function(elementId) {
//         var that = this;
//         var ElementSelector = "#" + elementId;
//         var element = document.querySelector(ElementSelector);
//         this.button1 = element.querySelector(".button-prev");
//         this.button2 = element.querySelector(".button-next");
//         this.sliderImg1 = element.querySelector(".slider-img");

//         this.button1.addEventListener("click", function(event) {
//             that.listaiGo(event);
//         });
//         this.button2.addEventListener("click", function(event) {
//             that.listaiNazad(event);
//         });

//         this.sliderImg1.src = this.vseImg[this.nullok];
//         this.button1.disabled = true;
//     },
//     listaiGo: function(event) {
//         this.nullok--;
//         this.sliderImg1.src = this.vseImg[this.nullok];
//         this.button2.disabled = false;
//         if (this.nullok === 0) {
//             this.button1.disabled = true;
//         }
//     },

//     listaiNazad: function(event) {
//         this.nullok++;
//         this.sliderImg1.src = this.vseImg[this.nullok];
//         this.button1.disabled = false;
//         if (this.nullok === 2) {
//             this.button2.disabled = true;
//         }
//     },
// };