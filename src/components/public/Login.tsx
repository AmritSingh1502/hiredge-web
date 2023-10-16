import { Box, RadioGroup, FormControlLabel, Radio, TextField, Button, Typography } from "@mui/material";
import styles from './Login.module.css';
import { useEffect, useState } from "react";
import axios from '../../utils/axios'
import { LoadingButton } from "@mui/lab"
const Login = () => {


    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const [role, setRole] = useState("");
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = () => {

        setLoading(true);
        axios.post('/login', {
            role: role,
            userid: userid,
            password: password
        }).then((res) => {
            if (res.status === 200) {
                window.alert("Authentication Successful")
            }
        }).catch((e) => {
            console.log(e);

            setError(e.response?.data.message)

        }).finally(() => {
            setLoading(false);
        })

    }

    useEffect(() => {

        setError(null);

    }, [userid, password])


    return (

        <Box component={'div'} className={styles.mainContainer}>
            <Box component={'div'} className={styles.loginBox}>

                <RadioGroup name='userType' row defaultValue={''} value={role} onChange={(e) => { setRole(e.target.value) }}>
                    <FormControlLabel value={"student"} control={<Radio />} label={"Student"} />
                    <FormControlLabel value={'tpo'} control={<Radio />} label={"TPO"} />
                    <FormControlLabel value={'hod'} control={<Radio />} label={"HOD"} />
                    <FormControlLabel value={'alumni'} control={<Radio />} label={"Alumni"} />
                </RadioGroup>

                <TextField
                    placeholder='Enter User ID'
                    label="User ID"
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)}
                />

                <TextField
                    placeholder='Enter Password'
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                {error && <Typography variant={'body2'} color={"red"}>{error}</Typography>}

                <LoadingButton
                    variant='outlined'
                    onClick={handleSubmit}
                    loading={loading}
                    loadingIndicator="Loading…"
                >
                    <span>Login</span>
                </LoadingButton>
            </Box>
        </Box>
    )
}

export default Login;