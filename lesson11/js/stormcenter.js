function adjustRating(rating) {
    let ratingDisplay = document.querySelector(".storm-severity-value");
    ratingDisplay.innerHTML = rating;

    switch (true) {
        case (rating < 3):
            ratingDisplay.style.color = "blue";
            break;
        case (rating > 5):
            ratingDisplay.style.color = "red";
            break;
        default:            
            ratingDisplay.style.color = "tomato";
    } 
}