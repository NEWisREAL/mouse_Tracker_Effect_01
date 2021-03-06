const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2 = document.querySelector('.circle2');
const CIRCLE3 = document.querySelector('.circle3');
const CIRCLE4 = document.querySelector('.circle4');
const CIRCLE5 = document.querySelector('.circle5');
const CIRCLE6 = document.querySelector('.circle6');
const CIRCLE7 = document.querySelector('.circle7');
const CIRCLE8 = document.querySelector('.circle8');
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var hrPos = e.clientX - 26;
    var vrPos = e.clientY - 26;
    var hrMrPos = windowWidth - e.clientX - 26;
    var vrMrPos = windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = hrPos + 'px';
    CIRCLE.style.top = vrMrPos + 'px';
    CIRCLE2.style.left = hrMrPos + 'px';
    CIRCLE2.style.top = vrPos + 'px';
    CIRCLE3.style.left = hrMrPos + 'px';
    CIRCLE3.style.top = vrMrPos + 'px';
    CIRCLE4.style.left = hrPos + 'px';
    CIRCLE4.style.top = vrPos + 'px';
    
    //Outside
    CIRCLE5.style.left = hrPos /2 + 'px';
    CIRCLE5.style.top = vrMrPos /2 + 'px';
    CIRCLE6.style.left = hrMrPos /2 + 'px';
    CIRCLE6.style.top = vrPos /2 + 'px';
    CIRCLE7.style.left = hrMrPos /2 + 'px';
    CIRCLE7.style.top = vrMrPos /2 + 'px';
    CIRCLE8.style.left = hrPos /2 + 'px';
    CIRCLE8.style.top = vrPos /2 + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.borderColor = "green";
}


function changeColorOnTouch2() {
    CIRCLE2.style.borderColor = "green";
}

function changeColorOnTouch3() {
    CIRCLE3.style.borderColor = "green";
}


// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLE2.addEventListener('mouseenter', changeColorOnTouch2, false);
CIRCLE3.addEventListener('mouseenter', changeColorOnTouch3, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);
CIRCLE3.addEventListener('mouseleave', function(){CIRCLE3.removeAttribute("style");}, false);
