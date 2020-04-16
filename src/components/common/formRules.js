export const formRules = {
    addressRules: [
        {
            message: 'Please input your Address!',
            required: true,
        },
    ],
    agreementRules: [
        // eslint-disable-next-line prefer-promise-reject-errors
        { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Please accept the product disclosure agreement ')) },
    ],
    bvnRules: [
        {
            message: 'Please input your BVN',
            required: true,
        },
        {
            message: 'BVN format is invalid',
            pattern: /^[0-9]{11}$/,
        },
    ],
    dobRules: [
        {
            message: 'Please select your date of birth!',
            required: true,
            type: 'object',
        },
    ],
    emailRules: [
        {
            message: 'The input is not valid E-mail!',
            type: 'email',
        },
        {
            message: 'Please input your E-mail!',
            required: true,
        },
    ],
    firstnameRules: [
        {
            message: 'Please input your First Name',
            required: true,
        },
        {
            max: 255,
            message: 'First name cannot be more than 255 characters',
        },
        {
            message: 'First name must be a valid string',
            type: 'string',
        },
        {
            message: 'First name format is invalid',
            pattern: /^[a-zA-Z]+$/,
        },
    ],
    lastnameRules: [
        {
            message: 'Please input your Last Name',
            required: true,
        },
        {
            max: 255,
            message: 'Last name cannot be more than 255 characters',
        },
        {
            message: 'Last name must be a valid string',
            type: 'string',
        },
        {
            message: 'Last name format is invalid',
            pattern: /^[a-zA-Z]+$/,
        },
    ],
    passwordRules: [
        {
            message: 'Please input your password',
            required: true,
        },
        {
            message: 'Password must be more than 6 characters',
            min: 6,
        },
        {
            max: 22,
            message: 'Password must be less than 22 characters',
        },
    ],
    phoneRules: [
        {
            message: 'Please input phone number',
            required: true,
        },
        {
            message: 'Phone number is invalid',
            pattern: /^[0]\d{10}$/,
        },
    ],

};

export const passwordRequired = [
    {
        message: 'Password is required',
        required: true,
    },
];
