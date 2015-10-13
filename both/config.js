UserRecords = new Mongo.Collection("userrecords");

AccountsTemplates.configure({

    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/map',
    redirectTimeout: 4000,
});

AccountsTemplates.addField({  
    _id: "address",
    type: "text",
    displayName: "Address",
    placeholder: {
        signUp: "Your Address"
    },
});

AccountsTemplates.addField({
    _id: "pilotorcustomer",
    type: "radio",
    displayName: "Are You A Pilot Or Looking For A Service",
    required: true,
    select: [
        {
        text: "Pilot",
        value: "aa",
      }, {
        text: "Customer",
        value: "bb",
      },
    ],
});


