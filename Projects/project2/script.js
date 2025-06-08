let index = 1;
showImages(index);

// Move the current index.
function nextImage(n){
    showImages(index += n);
}

// Display the image at the current index.
function showImages(n){
    let myImages = document.getElementsByClassName("images"); // Includes all elements with matching class.

    if (n > myImages.length){
        index = 1
    }    

    if (n < 1){
        index = myImages.length
    }

    // Set all images to NOT be displayed.
    for (let i = 0; i < myImages.length; i++) {
        myImages[i].style.display = "none";  
    }

    // Block the above command, to show the current image.
    myImages[index-1].style.display = "block";  
}