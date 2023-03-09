function validateForm(){
    var name = document.forms['form-contact']['name'].value;
    var email = document.forms['form-contact']['email'].value;
    var destination = document.forms['form-contact']['destination'].value;

    if(name == "" || email == "" || destination == 0){
        Swal.fire({
            // title: 'Error!',
            text: 'Form Cannot be Empty',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    } else {
        Swal.fire({
            title: 'Success!',
            text: 'Your submission has benn sent',
            icon: 'success',
            confirmButtonText: 'OK'
          })
    }
    return false;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("section");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}