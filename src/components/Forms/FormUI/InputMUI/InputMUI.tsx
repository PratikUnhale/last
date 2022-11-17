import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const MyTextfield = ({
    name,
    ...otherProps
}: any) => {
    const [field, meta] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        // fullWidth: true,
        // variant: 'outlined',
        error: (meta && meta.touched && meta.error) ? true : false,
        helperText: (meta && meta.touched && meta.error) ? meta.error : null
    };

    /*
    margin="normal"
              required
              fullWidth
             
              
              autoComplete="email"
              autoFocus
    */

    //   if (meta && meta.touched && meta.error) {
    //     configTextfield.error = true;
    //     configTextfield.helperText = mata.error;
    //   }

    return (
        <TextField {...configTextfield} />
    );
};

export default MyTextfield;