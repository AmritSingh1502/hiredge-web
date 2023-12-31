import { Stack, TextField, Box, Button } from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';

import useAxiosPrivate from '../../../utils/axiosPrivate';

const validationSchema = Yup.object({
    company_name: Yup.string().required("Company Name is required"),
    company_website: Yup.string().url("Enter a valid URL")
})



const AddCompany = () => {



    const api = useAxiosPrivate();

    return (
        <Box>

            <Formik initialValues={{
                company_name: '',
                company_website: ''
            }}
                validationSchema={validationSchema}

                onSubmit={(values, formikHelpers) => {
                    // window.alert(JSON.stringify(values))
                    api.post('/tpo/addcompany', values).then((res) => {
                        if (res.status === 200) {
                            window.alert('Company Added to Database');
                            formikHelpers.resetForm();
                        }
                    }).catch((e) => { console.log(e) });

                }}
            >
                {
                    (props) => (<form onSubmit={props.handleSubmit} onReset={props.handleReset}>
                        <Stack rowGap={1}>
                            <TextField
                                type='text'
                                label='Company Name'
                                name='company_name'
                                value={props.values.company_name}
                                onChange={props.handleChange}
                                error={props.touched.company_name && Boolean(props.errors.company_name)}
                                helperText={props.touched.company_name && props.errors.company_name}
                            />

                            <TextField
                                type='url'
                                label="Company Website"
                                name='company_website'
                                value={props.values.company_website}
                                onChange={props.handleChange}
                                error={props.touched.company_website && Boolean(props.errors.company_website)}
                                helperText={props.touched.company_website && props.errors.company_website}
                            />
                            <Button type="reset" variant='outlined'>Reset</Button>
                            <Button type="submit" variant='contained' >Submit</Button>

                        </Stack>
                    </form>
                    )
                }
            </Formik>
        </Box>
    )
}


export default AddCompany;

