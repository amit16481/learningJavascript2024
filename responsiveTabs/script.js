// script.js
$(document).ready(function() {
    // Tab click event
    $('.tab').click(function() {
        var contentId = $(this).data('content');

        // Remove active class from all tabs and content
        $('.tab, .content').removeClass('active');

        // Add active class to the clicked tab and corresponding content
        $(this).addClass('active');
        $('#' + contentId).addClass('active');
        
    });

    // Dropdown change event
    $('.dropdown').change(function() {
        var contentId = $(this).val();

        // Remove active class from all tabs and content
        $('.tab, .content').removeClass('active');

        // Set the corresponding tab and content to active
        $('.tab[data-content="' + contentId + '"]').addClass('active');
        $('#' + contentId).addClass('active');
    });
});
