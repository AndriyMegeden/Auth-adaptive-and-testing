import { Validators } from "@angular/forms";

export type FieldType = 'text' | 'password';
export type AuthType = 'register' | 'login' | 'forgot-password-step-1' | 'forgot-password-step-2' | 'forgot-password-step-3';

export interface Checkbox{
    checkboxId: string;
    checkboxValue: boolean;
    label: string;
    validators: Validators;
}

export interface Field{
    fieldId: string;
    fieldType: FieldType;
    validators: Validators;
    value: any,
    label?: string;
    placeholder?: string;
    icon?: string;
    show?: boolean;
    showIcon?: string;
}
export interface AuthSettings{
    title: string;
    subtitle?: string;
    sections: Array<string>;
    fields: Field[];
    checkboxes?: Checkbox[];
};
