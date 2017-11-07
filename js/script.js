$("#signup").validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    email_confirmation: {
      required: true,
      equalTo: "#email"
    },
    password: {
      required: true,
    },
    confirm_password: {
      required: true,
      equalTo: "#password"
    },
    zipcode: {
      required: true,
      digits: true,
      minlength: 5,
      maxlength: 5
    }
  },
  messages: {
    email: {
      required: 'Please enter a freaking valid email address.',
      email: 'Please enter a VALID email address.'
    }
  }
})
