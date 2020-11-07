function adjustRating(rating) {
    document.querySelector(".storm-severity-value").innerHTML = rating;
    switch (true) {
        case (rating < 4):
            document.querySelector("input.storm-severity").innerHTML = rating;

    } 
}