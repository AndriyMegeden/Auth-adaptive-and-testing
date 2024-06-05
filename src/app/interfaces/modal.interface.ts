export type CustomModalConfigType = 'custom' | 'scanner';

export interface CustomModalConfigButton{
    text: string;
    icon?: string;
}

export interface CustomModalConfig{
    title: string;
    subtitle: string;
    image: string;
    button?: CustomModalConfigButton;
}