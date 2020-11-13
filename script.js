
//created an array with hours of the day 

$(document).ready(function () {

    
    const container = $(".container")
    const dayHours = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
    
    //displayed current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


    //created a for loop to display day hours 
    for (let i = 0; i < dayHours.length; i++) {
        //(dayHours[i]);
        const div = $('<div class="col-2 time-section"></div>')
        div.text(dayHours[i]);
        container.append(div);

        const textarea = $('<textarea class="col-10 id="input"></textarea>')
        textarea.attr("placeholder", "Enter note here");
        container.append(textarea);

        const button = $('<button class="col-2 btn btn-primary saveBtn" id="save"></button>')
        button.text("Save");
        container.append(button);
    }


    //reset button 
        const button = $('<button class="btn btn-success clear"></button>')
        button.text("Clear Schedule");
        container.append(button);

        $(button).on("click", function (event) {
            event.preventDefault();
            localStorage.button();
            location.reload();
        })

});


//current date and time 
let currentTime = new Date().getHours();

 //determine if each row is past, present of future 
 