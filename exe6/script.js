 $(document).ready(function() {
            $('#myForm').submit(function(event) {
                event.preventDefault();
                if ($('#name').val().trim() === '') {
                    $('#nameError').show();
                } else {
                    $('#nameError').hide();
                }
                if ($('#email').val().trim() === '') {
                    $('#emailError').show();
                } else {
                    $('#emailError').hide();
                }
                if ($('#name').val().trim() !== '' && $('#email').val().trim() !== '') {
                    alert('Form submitted successfully!');
                }
            });
        });