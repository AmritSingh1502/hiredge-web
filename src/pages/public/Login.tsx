
import { useContext, useEffect, useState } from "react";
import CustomTabPanel from '../../Components/TabPanel';
import { Box, Tabs, Tab } from '@mui/material';
import styles from './Login.module.css';
import StudentLogin from './StudentLogin';
import { AuthContext } from "../../utils/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import TPOLogin from "./TpoLogin";
import AlumniLogin from "./AlumniLogin";
import HODLogin from "./HODLogin";
import Logo from "./Logo";
import StatsComponent from "./HomePage/StatsComponent";
import './HomePage/HomePage.css';


const Login = () => {

    const [tabNumber, setTabNumber] = useState<number>(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabNumber(newValue);
    };
    const navigate = useNavigate();

    const { authState } = useContext(AuthContext);

    useEffect(() => {
        if (authState.access_token) {
            navigate(`/${authState.role}`)
        }
    }, [])

    return (
        <Box className={styles.mainContainer}>
            <div className="content-container">
                <div className="stats">
                    <StatsComponent/>
                </div>
                <Box className={styles.loginBox}>
                    <Logo />
                    <Tabs value={tabNumber} onChange={handleTabChange}>
                        <Tab label="Student" />
                        <Tab label="TPO" />
                        <Tab label="HOD" />
                        <Tab label="Alumni" />
                    </Tabs>
                    <CustomTabPanel index={0} value={tabNumber}>
                        <StudentLogin />
                    </CustomTabPanel>
                    <CustomTabPanel index={1} value={tabNumber}>
                        <TPOLogin />
                    </CustomTabPanel>
                    <CustomTabPanel index={2} value={tabNumber}>
                        <HODLogin />
                    </CustomTabPanel>
                    <CustomTabPanel index={3} value={tabNumber}>
                        <AlumniLogin />
                    </CustomTabPanel>

                </Box>
            </div>
        </Box>
    )
}

export default Login;