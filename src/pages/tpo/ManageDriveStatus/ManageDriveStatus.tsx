import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useAxiosPrivate from "../../../utils/axiosPrivate";
import { Formik, Form, FieldArray } from "formik";
import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


const ManageStudentStatus = () => {
    const [searchParams, _] = useSearchParams();
    const api = useAxiosPrivate();
    const drive_id = searchParams.get('id');



    let branchList = ['CSE', 'ISE', 'ECE', 'EEE', 'CHEM', 'CIVIL', 'AI/ML', 'MECH']

    const result = useQuery({
        queryKey: ['ManageDriveData'],
        queryFn: async (): Promise<ManageDriveDataType> => (
            api.get('/tpo/getmanagedrive', {
                params: {
                    id: drive_id
                }
            }).then(res => res.data)
        )
    })

    if (result.isLoading)
        return <>Loading.....</>
    return (<>
        {result.data &&
            <Stack direction={'row'}>
                <Box width={"50%"}>
                    BOx 1
                    <Formik
                        initialValues={result.data}
                        onSubmit={(values, helpers) => {
                            window.alert(JSON.stringify(values))
                        }}
                    >{
                            props => (<Form>

                                <Stack direction={"row"}>
                                    <TextField
                                        name="job_title"
                                        value={props.values.job_title}
                                    />
                                    <IconButton >
                                        <EditIcon />
                                    </IconButton>
                                </Stack>
                                <Stack direction={"row"}>
                                    <TextField
                                        name="job_ctc"
                                        value={props.values.job_title}
                                    />
                                    <IconButton >
                                        <EditIcon />
                                    </IconButton>
                                </Stack>
                                <Stack direction={"row"}>
                                    <TextField
                                        name="job_title"
                                        value={props.values.job_title}
                                    />
                                    <IconButton >
                                        <EditIcon />
                                    </IconButton>
                                </Stack>
                                <FieldArray name='branch'>
                                    {

                                        (arrayHelpers) => (
                                            <Box>
                                                {
                                                    props.values.branch.length > 0 && <Stack direction={'row'} style={{
                                                        alignItems: 'center'
                                                    }}>

                                                        <Typography>Branches Allowed:</Typography>

                                                        {
                                                            props.values.branch.map((val, index) => (
                                                                <Button key={`selected-branch-${index}`}
                                                                    startIcon={<DeleteIcon />}
                                                                    variant='outlined'
                                                                    color='error'
                                                                    onClick={
                                                                        () => {
                                                                            branchList.push(val);
                                                                            arrayHelpers.remove(index);
                                                                        }
                                                                    }>
                                                                    {val}
                                                                </Button>)
                                                            )
                                                        }

                                                    </Stack>
                                                }
                                                <Stack direction={'row'} style={{ alignItems: 'center' }}>
                                                    <Typography>Click to Add Branch</Typography>
                                                    {
                                                        branchList.map((val, index) => {
                                                            if (!props.values.branch.includes(val)) {
                                                                return (<Button key={`selected-branch-${index}`}
                                                                    startIcon={<AddIcon />}
                                                                    variant='outlined'
                                                                    onClick={() => {
                                                                        arrayHelpers.push(val);
                                                                        branchList = branchList.filter(value => val !== value)
                                                                    }}
                                                                >
                                                                    {val}
                                                                </Button>)
                                                            }
                                                            return null
                                                        })
                                                    }
                                                </Stack>
                                            </Box>
                                        )
                                    }
                                </FieldArray>
                            </Form>)
                        }
                    </Formik>
                </Box>
            </Stack>



        }
    </>);
}

export default ManageStudentStatus;