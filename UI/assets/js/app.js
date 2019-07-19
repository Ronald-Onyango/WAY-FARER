const changeImage = () => {
    if (document.getElementById("seat").src == "file:///C:/Users/Ndiwa/Desktop/WAY-FARER/UI/assets/js/seat.png") 
        {
            document.getElementById("seat").src = "file:///C:/Users/Ndiwa/Desktop/WAY-FARER/UI/assets/js/seat_booked.png";
        }
    else if (document.getElementById("seat").src == "./assets/js/seat_booked.png") 
        {
            document.getElementById("seat").src = "file:///C:/Users/Ndiwa/Desktop/WAY-FARER/UI/assets/js/seat.png";
        }
    }