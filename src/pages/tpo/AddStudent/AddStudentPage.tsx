
import { Box, TextField, Stack, MenuItem, Button } from "@mui/material";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import * as yup from "yup";

const Branch = ["CSE", "ISE", "ECE", "EEE", "CH", "CIVIL", "MECH", "AI/ML"]

const validationSchema = yup.object({
    usn: yup.string().matches(/2[sS][dD][0-9]{2}[A-Z,a-z]{2}[0-9]{3}/, "Invalid USN"),
    first_name: yup.string().required(),
    middle_name: yup.string(),
    last_name: yup.string(),

})


const AddStudentPage = () => {

    const formik = useFormik({
        initialValues: {
            usn: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            dob: "",
            mobile: "",
            email: "",
            branch: "",
            tenth_percentage: "",
            twelfth_percentage: "",
            ug_cgpa: "",
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        onSubmit(values, formikHelpers) {
            window.alert(JSON.stringify(values))
        },

    })


    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 10
                }}>
                    <TextField
                        placeholder="USN"
                        fullWidth
                        required
                        name="usn"
                        label="USN"
                        value={formik.values.usn}
                        onChange={formik.handleChange}
                        error={formik.touched.usn && Boolean(formik.errors.usn)}
                        helperText={formik.touched.usn && formik.errors.usn}
                    />
                    <Stack direction={"row"} columnGap={2}>
                        <TextField
                            placeholder="First Name"
                            fullWidth
                            required
                            label="First Name"
                            name="first_name"
                            value={formik.values.first_name}
                            onChange={formik.handleChange}
                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                            helperText={formik.touched.first_name && formik.errors.first_name}
                        />
                        <TextField placeholder="Middle Name" fullWidth />
                        <TextField placeholder="Last Name" fullWidth />
                    </Stack>
                    <TextField placeholder="Date of Birth" type="date" required

                        onChange={(value) => console.log(value.target.value)}
                    />
                    <TextField placeholder="Email" type="email" required />
                    <MuiTelInput
                        name="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange('mobile')}
                        defaultCountry={'IN'}
                    />
                    <TextField select placeholder="Branch" label="Branch" defaultValue={''} required>

                        {Branch.map((value, index) => (
                            <MenuItem key={`Branch ${value}`} value={value}>
                                {value}
                            </MenuItem>))
                        }

                    </TextField>
                    <TextField placeholder="10th Percentage" required />
                    <TextField placeholder="12th Percentage" required />
                    <TextField placeholder="UG CGPA" required />
                    <Button type="reset" variant="outlined">Reset</Button>
                    <Button type="submit" variant="contained">Submit</Button>

                </Box>
            </form>

        </Box>
    )
}


export default AddStudentPage;