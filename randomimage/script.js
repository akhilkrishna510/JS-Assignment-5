function getRandomImage() {
    var randomImage = new Array();
    randomImage[0] = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
    randomImage[1] = "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
    randomImage[2] = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";
    var rndimg = Math.floor(Math.random()*randomImage.length); 
    return document.getElementById("randomimage").innerHTML = '<img src="'+randomImage[rndimg]+'" />';
}