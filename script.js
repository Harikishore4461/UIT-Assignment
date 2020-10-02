function onvalidate() {
    var name = document.getElementById("name").value
    if (name.trim() !== "") {
        alert("success")
        return true
    }
    else {
        alert("failure")
        return false
    }
}
function dark() {
    document.documentElement.style.setProperty('--main-bg-color1', 'black')
    document.documentElement.style.setProperty('--main-bg-color2', '#FFF5D7')
    document.documentElement.style.setProperty('--main-color', 'tomato')
    document.documentElement.style.setProperty('--main-color1', 'wheat')
}
function cool() {
    document.documentElement.style.setProperty('--main-bg-color1', 'black')
    document.documentElement.style.setProperty('--main-color', '#7efc00b2')
    document.documentElement.style.setProperty('--main-bg-color2', '#F9F7F7')
    document.documentElement.style.setProperty('--main-color1', 'yellowgreen')

}

var images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
let source = 0;
console.log(typeof (source));

function slide(change) {
    var image = document.getElementById("image");
    for (i = 0; i < images.length; i++) {
        if (image.src.endsWith(images[i])) {

            source = i;
        }
    }
    switch (change) {
        case "forward": {
            console.log(source)
            if (source != 2) {
                image.src = ".." + images[++source]
                console.log(image.src)
                return true
            }
            else {
                image.src = ".." + images[0]
                return true
            }
        }
        case "backward": {
            if (source != 0) {
                image.src = ".." + images[--source]
                return true

            }
            else {
                image.src = ".." + images[2]
                return true

            }
        }
        default: return 1
    }
}
function onLoad() {
    var image = document.getElementById("image");

    setInterval(() => {
        if (source != 3) {
            image.src = '..' + images[source]
            source++;
        }
        else {
            image.src = '..' + images[0]
            source = 0
        }

    }, 3000)
}
