
function updateVotingResult () {
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=7cd7a288a851a28b&recipe=mazarint%C3%A5rta",
        success: function(data) {
            //return data;
            var rating = data.rating.toFixed(1);
            $(".rating strong").text(rating);
        },
    });
    //return votingResult.success();
    /*var votResult = getVotingResult.success;
    var votRate = votResult.responseJSON.rating;
    $(".rating strong").text(votRate);*/
}
    
function putVoteInDB (rating) {
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=7cd7a288a851a28b&recipe=mazarint%C3%A5rta&rating=" + rating,
        success: function(data) {  
            updateVotingResult();
        }, 
    });
}


    

// source http://api.jquery.com/hover/
$(document).ready(function () {
    $(".votingStars span").click(
        function () {
            $(this).prevAll().text("\u2605");
            $(this).text("\u2605");
            $(this).nextAll().text("\u2606");
            
            $(this).animate({fontSize: '5em'}, "slow");
            $(this).animate({fontSize: '1em'}, "slow");
            
            var rating = $(this).index() + 1;
            putVoteInDB(rating);
        }
    );
    
    updateVotingResult();
    
});




// Key 7cd7a288a851a28b
// GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=7cd7a288a851a28b&recipe=mazarint%C3%A5rta
// GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=7cd7a288a851a28b&recipe=mazarint%C3%A5rta&rating=4
