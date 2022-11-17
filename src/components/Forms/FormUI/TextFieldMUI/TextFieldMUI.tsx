import { TextField } from '@mui/material';
import { useField } from 'formik';

const TextfieldWrapper = ({
    name,
    ...otherProps
}: any) => {
    const [field, meta] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        event: (meta && meta.touched && meta.error) ? true : false,
        helperText: (meta && meta.touched && meta.error) ? meta.error : null,
    };

    return (
        <TextField {...configTextfield} />
    );
};

export default TextfieldWrapper;