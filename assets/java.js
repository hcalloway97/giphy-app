console.log("connected")
var topics = [
    "lion","dog","elephant", "lizard"
]


topics.forEach(function(item){
    console.log("ITEM: ", item);
    var btn = $("<button>");
    btn.addClass('giph');
    btn.attr("data-type", item);
    btn.text(item)

    $('#buttons').append(btn)
})

$(".giph").click(function(){
    console.log($(this).attr('data-type'))
    var term = $(this).attr('data-type')
    // Do api call here using the value clicked on
   // 'giphy.com' + term

});






/* ADD a input tag to html
    add a button with is for click event
    look up .push() for array
    reload the page to show updated buttons or wrap
    forEach loop in function and clear buttons before re-running
    function

*/