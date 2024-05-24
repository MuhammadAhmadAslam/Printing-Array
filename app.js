var arr =['Ahmad','Hammad','Hamza','AbdulHadi','Daniyal','Zohaib']
var i = 0
var j = 0
var timer = setInterval(() => {
    i++
    if (i <= arr.length) {
        console.log(arr[j++]);
    }
}, 10000);


var i1 = 0;
var i2 = 0;
var imageArray = ['img/i1.jpeg','img/i2.jpeg','img/i3.jpeg','img/i4.jpeg']
var images = document.getElementById('img')
var timer2 = setInterval(() => {
    i1++
    if (i <= imageArray.length) {
        images.src = imageArray[i2++]
    }
}, 10000);