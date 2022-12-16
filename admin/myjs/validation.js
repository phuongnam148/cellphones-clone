$(function () {

    /* For advanced usage and examples please check out
     *  Jquery Validation   -> https://github.com/jzaefferer/jquery-validation
     */

    /* Initialize Form Validation */
    $('#form-validation').validate({
        errorClass: 'help-block',
        errorElement: 'span',
        errorPlacement: function (error, e) {
            e.parents('.form-group > div').append(error);
        },
        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
            $(e).closest('.help-block').remove();
        },
        success: function (e) {
            // You can use the following if you would like to highlight with green color the input after successful validation!
            e.closest('.form-group').removeClass('has-success has-error'); // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
            e.closest('.help-block').remove();
            e.closest('.help-inline').remove();
        },
        rules: {
            val_username: {
                required: true,
                minlength: 2
            },
            val_password: {
                required: true,
                minlength: 5
            },
            val_confirm_password: {
                required: true,
                minlength: 5,
                equalTo: '#val_password'
            },
            val_email: {
                required: true,
                email: true
            },
            val_website: {
                required: true,
                url: true
            },
            val_date: {
                required: true,
                date: true
            },
            val_range: {
                required: true,
                range: [1, 100]
            },
            val_number: {
                required: true,
                number: true
            },
            val_digits: {
                required: true,
                digits: true
            },
            val_skill: {
                required: true
            },
            val_credit_card: {
                required: true,
                creditcard: true
            },
            val_terms: {
                required: true
            }
        },
        messages: {
            val_username: {
                required: 'Please enter a username',
                minlength: 'Your username must consist of at least 2 characters'
            },
            val_password: {
                required: 'Please provide a password',
                minlength: 'Your password must be at least 5 characters long'
            },
            val_confirm_password: {
                required: 'Please provide a password',
                minlength: 'Your password must be at least 5 characters long',
                equalTo: 'Please enter the same password as above'
            },
            val_email: 'Please enter a valid email address',
            val_website: 'Please enter your website!',
            val_date: 'Please select a date!',
            val_range: 'Please enter a number between 1 and 100!',
            val_number: 'Please enter a number!',
            val_digits: 'Please enter digits!',
            val_credit_card: 'Please enter a valid credit card!',
            val_skill: 'Please select a skill!',
            val_terms: 'You must agree to the terms!'
        }
    });
});
