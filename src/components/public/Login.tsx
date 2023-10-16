import { Box, RadioGroup, FormControlLabel, Radio, TextField, Typography, Button } from "@mui/material";
import styles from './Login.module.css';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../utils/auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    role: Yup.string().required("Required"),
    userid: Yup.string().trim().required("Required"),
    password: Yup.string().required("Required"),
})

const Login = () => {

    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    return (

        <Box component={'div'} className={styles.mainContainer}>

            <Formik
                initialValues={{
                    role: '',
                    userid: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    console.log(values);
                    setAuthState(prev => ({ ...prev, authenticated: true }));
                    if (values.role === 'student')
                        navigate('/student')

                    if (values.role === 'tpo')
                        navigate('/tpo')
                }}
            >

                {({ values, handleChange, handleSubmit, isSubmitting, errors, touched }) => {

                    return (
                        <Box component={'div'} style={{
                            position: 'relative',
                            top: '25%'
                        }}>
                            <form onSubmit={handleSubmit}>
                                <Box component={'div'} className={styles.loginBox}>
                                    <RadioGroup name='userType' row defaultValue={''} value={values.role} onChange={handleChange('role')}>
                                        <FormControlLabel value={"student"} control={<Radio />} label={"Student"} />
                                        <FormControlLabel value={'tpo'} control={<Radio />} label={"TPO"} />
                                        <FormControlLabel value={'hod'} control={<Radio />} label={"HOD"} />
                                        <FormControlLabel value={'alumni'} control={<Radio />} label={"Alumni"} />
                                    </RadioGroup>

                                    {errors.role && <ErrorMessage name='role' >{(msg) => (<Typography color={'red'}>{msg}</Typography>)}</ErrorMessage>}

                                    <TextField
                                        placeholder='Enter User ID'
                                        label="User ID"
                                        value={values.userid}
                                        onChange={handleChange('userid')}
                                        error={touched.userid && Boolean(errors.userid)}
                                        helperText={touched.userid && errors.userid}
                                    />

                                    <TextField
                                        placeholder='Enter Password'
                                        label="Password"
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                    <Button
                                        variant='outlined'
                                        type="submit"
                                    >
                                        <span>Login</span>
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    )
                }}
            </Formik>
        </Box>
    )
}

export default Login;