'use script'

$(function () {

    $(`.resume .resume-selector div`).on(`click`, function () {

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TABS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        //remove the active from the old one
        $(".resume").find(`.resume-selector div.active`).removeClass(`active`);
        //add the active class tot he li that you clicked on
        $(this).addClass(`active`)

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PANELS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

        // figure out which panel we want to show
        let $resumeConetentShow = $(this).attr(`rel`);

        //hide the current panel
        $(".resume").find(`.resume-content .active`).slideUp(300, showResumeContent);

        //find the next and display it
        function showResumeContent() {
            $(this).removeClass(`active`);
            $(`#${$resumeConetentShow}`).show(300, function () {
                $(this).addClass(`active`);
            })
        }
    })
})

