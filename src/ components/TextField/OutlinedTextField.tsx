import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import type { OutlinedTextFieldProps } from './OutlineTextField';


export default function OutlinedTextField({
    label,
    value,
    onChange,
    defaultValue,
    error,
    helperText,
    ...props
}: OutlinedTextFieldProps) {
    return (
        <TextField
            {...props}
            id="outlined-error"
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            defaultValue={defaultValue}
        />
    );
}