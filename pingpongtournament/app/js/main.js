$(document).ready(function () {

//create array
let playerList = [];

//on submit add player to PlayerList array 
$("#submit").on("click", (event) => {

    event.preventDefault(); 
    //add a new player
    let newPlayer = $("#add").val();
    // clear text field on submit
    $("#add").val('').removeAttr('checked');
    // only submit completed field 
    if (newPlayer.length > 0) {
    //pushes the player to playerList array
    playerList.push(newPlayer);
    //output players to list
    $("<ul>"+newPlayer+"</ul>").appendTo("#list");
    
    }
});

    //shuffle function 
    function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    
    }   

    return array;
}

        let button = $("#randomise");
        button.on("click", () => {
        //CSS animate 
        $('#game').addClass('animated shake');
        //Stop adding on shuffle
        $('#game').empty(); 
            
            //create pairs array
            let pairs = [];
            //shuffle array 
            let fixtures = shuffle( playerList );
            //loop to split objects into couples 
            for (let i = 0; i < fixtures.length; i += 2) {
            pairs.push(fixtures.slice(i, i+2)); 
            
            };

                //for each pair
                pairs.forEach(function(item, array) {
                
                //print to game output
                $('#game').append('<ul>' + item[0] + ' vs ' + item[1] + '</ul>'); 
                
                })

        });


}); 