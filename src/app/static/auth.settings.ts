import { Validators } from "@angular/forms";
import { AuthSettings } from "@interfaces/auth.interface";

export const loginSetting: AuthSettings = {
    title: 'components.auth.login.title',
    subtitle: 'components.auth.login.subtitle',
    sections: ['socials'],
    fields: [
        {
            value: '',
            fieldId: 'email',
            fieldType: 'text',
            label: 'components.auth.inputs.email.label',
            placeholder: 'components.auth.inputs.email.placeholder',
            validators: [Validators.required, Validators.email]
        },
        {
            value: '',
            fieldId: 'password',
            fieldType: 'password',
            label: 'components.auth.inputs.password.label',
            placeholder: 'components.auth.inputs.password.placeholder',
            validators: [Validators.required, Validators.minLength(6)],
            icon: 'eye-close',
            show: false,
            showIcon: 'eye'
        },
    ]
};

export const registerSetting: AuthSettings = {
    title: 'components.auth.register.title',
    subtitle: 'components.auth.register.subtitle',
    sections: ['agreement'],
    fields: [
        {
            value: '',
            fieldId: 'email',
            fieldType: 'text',
            label: 'components.auth.inputs.email.label',
            placeholder: 'components.auth.inputs.email.placeholder',
            validators: [Validators.required, Validators.email]
        },
        {
            value: '',
            fieldId: 'password',
            fieldType: 'password',
            label: 'components.auth.inputs.password.label',
            placeholder: 'components.auth.inputs.password.placeholder',
            validators: [Validators.required, Validators.minLength(6)],
            icon: 'eye-close',
            show: false,
            showIcon: 'eye'
        },
        {
            value: '',
            fieldId: 'repeat_password',
            fieldType: 'password',
            label: 'components.auth.inputs.repeat_password.label',
            placeholder: 'components.auth.inputs.repeat_password.placeholder',
            validators: [Validators.required, Validators.minLength(6)],
            icon: 'eye-close',
            show: false,
            showIcon: 'eye'
        },
    ],
    checkboxes: [
        {
            checkboxId: 'agreement',
            checkboxValue: false,
            label: 'components.auth.checkboxes.agreement',
            validators: [Validators.required, Validators.requiredTrue],
        }
    ]

};
