// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculate').click(function () {
        // Get the number of hours from the input
        var hours = parseFloat($('#hours').val());

        // Validate that the input is a positive number
        if (isNaN(hours) || hours <= 0) {
            $('#hours-error').text('Please enter a positive number.');
            return;
        }

        // Clear any previous error message
        $('#hours-error').text('');

        // Get the charge per hour
        var chargePerHour = parseFloat($('#charge').val());

        // Calculate the total
        var total = hours * chargePerHour;

        // Display the total in the output box
        $('#total').val(total.toFixed(2));
    });
});