'use script'

$(function(){
    $("#resume-selector").children().on("click", function() {
        $(`${$(this).attr('class')}-content`).css({
            opacity: 1
        })
    })
})