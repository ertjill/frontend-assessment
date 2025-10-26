
export interface OutlinedTextFieldProps {
    label: string;
    value: string;
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    props?: any;
}