// date selector

$(document).ready(function() {
    $('#date-range').daterangepicker({
        opens: 'left',
        autoApply: true,
        showCustomRangeLabel: false,
        minDate: moment().startOf('day'),
        locale: {
            format: 'YYYY-MM-DD'
        }
    }, function(start, end) {
        if (end.diff(start, 'days') <= 3) {
            $('#time-picker-container').show();
            $('#time-range').flatpickr({
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                defaultHour: 12,
                defaultMinute: 0
            });
        } else {
            $('#time-picker-container').hide();
        }
    });
});

function showOptions() {
    document.getElementById("space-type-options").style.display = "block";
}