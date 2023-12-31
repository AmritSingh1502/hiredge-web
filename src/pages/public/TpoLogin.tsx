import { Box, Button, Stack, TextField } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/auth/AuthContext';
import { Formik } from 'formik';
import api from '../../utils/axios';
const TPOLogin = () => {

    const navigate = useNavigate();
    const { setAuthState } = useContext(AuthContext);


    return (
        <>
            <Formik
                initialValues={{
                    user_id: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    // window.alert(JSON.stringify(values));    
                    api.post('/login', {
                        role: 'tpo',
                        ...values
                    }).then((res) => {
                        if (res.status === 200) {
                            setAuthState({
                                access_token: res.data.access_token,
                                role: res.data.role
                            });

                        } else {
                            console.log(res.data.errors)
                        }

                    }).then(() => {
                        navigate('/tpo')
                    }).catch((e) => {
                        console.log(e);
                    })

                }}
            >
                {
                    (props
                    ) => (

                        <form onSubmit={props.handleSubmit}>
                            <Stack>

                                <TextField
                                    label="Enter User ID"
                                    name='user_id'
                                    value={props.values.user_id}
                                    onChange={props.handleChange}
                                    error={props.touched.user_id && Boolean(props.errors.user_id)}
                                    helperText={props.touched.user_id && props.errors.user_id}
                                />

                                <TextField
                                    label="Enter Password"
                                    name='password'
                                    type='password'
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                    error={props.touched.password && Boolean(props.errors.password)}
                                    helperText={props.touched.password && props.errors.password} />

                                <Button type='submit'>Log In</Button>
                            </Stack>
                        </form>
                    )

                }
            </Formik>

        </>

    )
}

export default TPOLogin;