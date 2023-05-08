$(document).ready(function () {
    fetchHomeContent();

    function fetchHomeContent() {
        $.ajax({
            url: './data/index.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                updateHomeContent(data);
            },
            error: function () {
                console.error('Failed to fetch home content');
            }
        });
    }

    function updateHomeContent(content) {
        $('#new-to-rugby-text').text(content.new_to_rugby);
        $('#join-the-club-text').text(content.join_the_club);
        $('#rugby-basics-text').text(content.rugby_basics);
    }
});
