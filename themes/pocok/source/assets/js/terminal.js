var init = false;
function ArrayPlusDelay(array, elem) {
    var element = document.getElementById(elem);
    recMainList(element, array, 0)
}

function recMainList (element, array, index) {
    if (index > array.length - 1) {
        index = 0;
    }
    setTimeout(function () {
        var items = document.getElementsByClassName('terminal-logs__item');
        recList(element, array[index].items, 0);
        if (items.length > 3) {
            element.innerHTML = items[0].outerHTML + items[1].outerHTML + items[2].outerHTML + items[3].outerHTML + items[4].outerHTML + items[5].outerHTML + items[6].outerHTML;
        }
        recMainList(element, array, ++index)
    }, init ? array[index].delay : 2500);
    init = true
}

function recList (element, list, index) {
    if (index > list.length - 1) {
        return;
    }
    setTimeout(function () {
        var item = '<li class="terminal-logs__item">' + list[index] + '</li>' + element.innerHTML;
        element.innerHTML = item;
        recList(element, list, ++index)
    }, 350);
}

var data = [
    {
        delay: 5500,
        items: ['pocok.yaml created', 'docker-compose.yaml created', 'Project init completed!']
    },
    {
        delay: 5000,
        items: ['Pulling helloworld (ubuntu:14.04)...', '14.04: Pulling from library/ubuntu', 'Status: Image is up to date for ubuntu:14.04', 'Starting my-project_helloworld_1', 'my-project_helloworld_1   /bin/echo Hello world   Exit 0']
    },
    {
        delay: 7000,
        items: ['Project Added']
    },
    {
        delay: 5500,
        items: ['react-app', 'wordpress', 'my-project']
    }
]

ArrayPlusDelay(data, 'terminal-logs')

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('terminal-txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".terminal-txt-rotate > .wrap { border-right: 0.08em solid rgba(255,255,255,.4) }";
    document.body.appendChild(css);
};