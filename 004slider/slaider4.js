function Slider(params) {
    this.button1 = null;
    this.button2 = null;
    this.sliderImg1 = null;

    this.vseImg = [
        "https://www.brutka.com/img/javascript-logo.png",
        "https://commons.bmstu.wiki/images/8/88/Java_logo.png",
        "https://bestprogrammer.ru/wp-content/uploads/2021/01/proekty-Python.jpg",
    ];
    this.nullok = 0;
    this.start = function(elementId) {
        var that = this;
        var ElementSelector = "#" + elementId;
        var element = document.querySelector(ElementSelector);
        this.button1 = element.querySelector(".button-prev");
        this.button2 = element.querySelector(".button-next");
        this.sliderImg1 = element.querySelector(".slider-img");

        this.button1.addEventListener("click", function(event) {
            that.listaiGo(event);
        });
        this.button2.addEventListener("click", function(event) {
            that.listaiNazad(event);
        });

        this.sliderImg1.src = this.vseImg[this.nullok];
        this.button1.disabled = true;
    };
    this.listaiGo = function(event) {
        this.nullok--;
        this.sliderImg1.src = this.vseImg[this.nullok];
        this.button2.disabled = false;
        if (this.nullok === 0) {
            this.button1.disabled = true;
        }
    };

    this.listaiNazad = function(event) {
        this.nullok++;
        this.sliderImg1.src = this.vseImg[this.nullok];
        this.button1.disabled = false;
        if (this.nullok === 2) {
            this.button2.disabled = true;
        }
    };
};

var sliderFactory = {
    createSlider: function(params) {
        var newSlider = new Slider();
        return newSlider;
    },
};
// button1: document.getElementById("button1"),
// button2: document.getElementById("button2"),
// sliderImg1: document.getElementById("sliderImg"),