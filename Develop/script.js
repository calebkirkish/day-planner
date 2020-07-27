// get the date
    // check if the date already has an entry in LS
    // If it is then set the variable to the object and populate the table with the object
    // If it isnt then set set it and creat a new object with empty strings
    // When a user edits a field turn conteneditable to true
    // when a user saves add the data to the object and set it in local storage again

    let now = moment();
    console.log(now.format());
    
    // When I click on the cell-save cell do this:
    $(".cell-save").on("click", function(){
        // $(this) = button
        var time = $(this).attr('id');
        console.log(time);
// id =`${time}-text`   or time + "-text"  inputID = textarea id
        var inputID = '#' + time + "-text";
        var textInput = $(inputID).val();
        console.log(inputID);
        console.log(textInput);
        // localStorage.setItem(key, value) so inputID = key, textInput = value
        window.localStorage.setItem(inputID, textInput);

    });

    $(".cell-info").each(function () {
        //$(this) = textarea((
        //console.log($(this));
        var key ="#" + $(this).children().attr('id');
        
        var value = window.localStorage.getItem(key);
        $(key).text(value);
        // console.log(key);
        // console.log(value);
    });