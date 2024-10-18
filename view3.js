// Change main image when thumbnail is clicked
function changeImage(imageSrc) {
    document.getElementById('mainProductImage').src = imageSrc;
}

// Add active class to the selected size button
function selectSize(button) {
    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.size-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add active class to the clicked button
    button.classList.add('active');
}
