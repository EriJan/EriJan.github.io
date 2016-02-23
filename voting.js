
// Key 7cd7a288a851a28b
// GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=7cd7a288a851a28b&recipe=mazarint%C3%A5rta
// GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=7cd7a288a851a28b&recipe=mazarint%C3%A5rta&rating=4

function updateVotingResult () {
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=7cd7a288a851a28b&recipe=mazarint%C3%A5rta",
        success: function(data) {
            //return data;
            var rating = data.rating.toFixed(1);
            $(".rating strong").text(rating);
            $(".rating em").text(data.votes);
        },
    });
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

$(document).ready(function () {
    $(".votingStars span").click(
        function () {
            $(this).prevAll().text("\u2605");
            $(this).text("\u2605");
            $(this).nextAll().text("\u2606");
            
            $(this).animate({fontSize: '2em'}, "slow");
            $(this).animate({fontSize: '1em'}, "slow");
            
            var rating = $(this).index() + 1;
            putVoteInDB(rating);
        }
    );
    updateVotingResult();    
});

$(document).ajaxStart(function(){
     $("#wait").html("<img src='wait.gif'>");
});

$(document).ajaxComplete(function(){
     $("#wait").html("");
});
