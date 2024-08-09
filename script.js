$(document).ready(function() {
    // Keep the navigation bar fixed
    $('nav').css({
        'position': 'fixed',
        'top': '0',
        'width': '100%',
        'z-index': '1000'
    });

    // Form validation
    $('#contact-form').on('submit', function(event) {
        let valid = true;

        // Validate First Name
        const firstName = $('#first-name').val();
        if (firstName.length < 5) {
            alert('First name must be at least 5 characters.');
            valid = false;
        }

        // Validate Last Name
        const lastName = $('#last-name').val();
        if (lastName.length < 5) {
            alert('Last name must be at least 5 characters.');
            valid = false;
        }

        // Validate Email
        const email = $('#email').val();
        if (!email.includes('@')) {
            alert('Email must contain the domain name.');
            valid = false;
        }

        // Validate Date
        const date = $('#date').val();
        const dateRegex = /^\d{2}\/\d{2}\/\d{2}$/;
        if (!dateRegex.test(date)) {
            alert('Date must be in the format dd/mm/yy.');
            valid = false;
        }

        // Validate Phone
        const phone = $('#phone').val();
        if (phone.length !== 10 || isNaN(phone)) {
            alert('Phone must contain 10 digits.');
            valid = false;
        }

        // Validate Message
        const message = $('#message').val();
        if (message.length < 50) {
            alert('Message must be at least 50 characters.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Button click action
    $('.custom-button').on('click', function() {
        alert('Button was clicked!');
    });

    // Lightbox for gallery items
    $('.lightbox-trigger').on('click', function() {
        const src = $(this).attr('src');
        const isVideo = $(this).is('video');

        if (isVideo) {
            $('#lightbox-video').attr('src', src).show();
            $('#lightbox-img').hide();
        } else {
            $('#lightbox-img').attr('src', src).show();
            $('#lightbox-video').hide();
        }

        $('#lightbox').fadeIn();
    });

    // Close lightbox when clicking outside content or on close button
    $('#lightbox').on('click', function(e) {
        if ($(e.target).is('#lightbox, .close')) {
            $('#lightbox').fadeOut();
            $('#lightbox-img').attr('src', '');
            $('#lightbox-video').attr('src', '').hide();
        }
    });
});
