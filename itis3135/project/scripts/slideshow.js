let slideIndex = 1; // Declare slideIndex first

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementsByClassName("caption")[0];
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption");
}

showSlides(slideIndex); // Use slideIndex after it's declared

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.querySelector(".prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    plusSlides(1);
});
