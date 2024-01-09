
import { Box, Button, Stack, TextField, Checkbox, FormControlLabel, Typography, Autocomplete } from '@mui/material';
import { FieldArray, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddIcon from '@mui/icons-material/Add';


let branchList = ['CSE', 'ISE', 'ECE', 'EEE', 'CHEM', 'CIVIL', 'AI/ML', 'MECH']

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

type roundData = {
    name: string
}

const AddDrive = () => {
    const api = useAxiosPrivate();

    const [search, setSearch] = useState('');
    const [options, setOptions] = useState<{ id: string, label: string }[]>([]);

    useEffect(() => {

        function fetchOptions() {
            api.get('/tpo/getcompanylist', {
                params: {
                    search: search
                }
            }).then((res) => {
                setOptions(() => res.data);
                console.log(res.data);
            }).catch((e) => {
                console.log(e)
            })
        }

        fetchOptions();
    }, [search])


    return (
        <Box>
            <Formik initialValues={{
                company_id: '',
                company_name: '',
                job_title: '',
                job_description: '',
                tenth_cutoff: 70,
                twelfth_cutoff: 70,
                ug_cutoff: 7.00,
                branch: [],
                rounds: [],

            }} onSubmit={(values, formikHelpers) => {
                window.alert(JSON.stringify(values));
            }}>

                {
                    (props) => (
                        <form onSubmit={props.handleSubmit} onReset={props.handleReset}>
                            <Stack
                                direction={'column'}
                                flex={1}
                                flexGrow={1}
                                gap={1}
                            >
                                <Autocomplete
                                    id='company_name'
                                    options={options}
                                    onChange={(event, value) => {
                                        props.setFieldValue('company_name', value?.label);
                                        props.setFieldValue('company_id', value?.id);
                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === props.values.company_id}
                                    inputValue={search}
                                    onInputChange={(event, value) => { setSearch(value) }}
                                    renderInput={(params) => (<TextField{...params}
                                        placeholder='Enter Company Name'
                                        value={props.values.company_name}
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search'
                                        }} />)}
                                />
                                <TextField
                                    label="Job Title"
                                    name='job_title'
                                    value={props.values.job_title}
                                    onChange={props.handleChange}
                                    error={props.touched.job_title && Boolean(props.errors.job_title)}
                                    helperText={props.touched.job_title && props.errors.job_title}
                                />

                                <TextField

                                />
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
                                                        branchList.map((val, index) => (
                                                            <Button key={`selected-branch-${index}`}
                                                                startIcon={<AddIcon />}
                                                                variant='outlined'
                                                                onClick={() => {
                                                                    arrayHelpers.push(val);
                                                                    branchList = branchList.filter(value => val !== value)
                                                                }}
                                                            >
                                                                {val}
                                                            </Button>))
                                                    }
                                                </Stack>
                                            </Box>
                                        )

                                    }

                                </FieldArray>


                                <Stack direction={'row'} style={{
                                    alignItems: 'center'
                                }}>


                                    <TextField
                                        type='number'
                                        name='tenth_cutoff'
                                        value={props.values.tenth_cutoff}
                                        onChange={props.handleChange}
                                        inputMode='numeric'
                                        inputProps={{ min: 0, max: 100 }}
                                    />

                                </Stack>
                                <Stack direction={'row'} style={{
                                    alignItems: 'center'
                                }}>
                                    <TextField
                                        type='number'
                                        name='twelfth_cutoff'
                                        value={props.values.twelfth_cutoff}
                                        onChange={props.handleChange}
                                        inputMode='numeric'
                                        inputProps={{ min: 0, max: 100 }}
                                    />
                                </Stack>
                                <Stack direction={'row'} style={{
                                    alignItems: 'center'
                                }}>
                                    <TextField
                                        type='number'
                                        name='ug_cutoff'
                                        value={props.values.ug_cutoff}
                                        onChange={props.handleChange}
                                        inputMode='decimal'
                                        inputProps={{ min: 0.00, max: 10.00, step: 0.1 }}
                                    />
                                </Stack>
                                <Box sx={{
                                    marginBottom: 4
                                }}>
                                    <ReactQuill
                                        theme='snow'
                                        placeholder='Enter Job Description....'
                                        value={props.values.job_description}
                                        onChange={props.handleChange('job_description')}
                                        style={{
                                            // minHeight: '300px',
                                            height: '200px',
                                            padding: '10px',
                                            margin: '10px',
                                            boxSizing: 'border-box'
                                        }}
                                        preserveWhitespace

                                    />
                                </Box>
                                <Stack>Rounds</Stack>
                                {
                                    <FieldArray
                                        name='rounds'
                                        render={(arrayHelpers) => (
                                            <Stack>
                                                {

                                                    props.values.rounds && props.values.rounds.length > 0 ? (props.values.rounds.map((round: roundData, index: number) => (
                                                        <>
                                                            <Stack direction={'row'} key={index} alignItems={'center'} columnGap={2}>
                                                                <Typography>{index + 1}.</Typography>
                                                                <TextField
                                                                    type='text'
                                                                    placeholder='Enter Round Name'
                                                                    name={`rounds[${index}].name`}
                                                                    value={round?.name}
                                                                    onChange={props.handleChange}
                                                                />
                                                                <TextField
                                                                    type='datetime-local'
                                                                    placeholder='Enter Round Date'
                                                                    name={`rounds[${index}].date`}
                                                                    onChange={props.handleChange}
                                                                />
                                                                <Button variant='outlined' color='error' startIcon={<DeleteIcon />} onClick={() => { arrayHelpers.remove(index) }}>Delete</Button>
                                                            </Stack>

                                                        </>
                                                    )
                                                    )) : null

                                                }
                                                <Box>
                                                    <Button onClick={() => {
                                                        arrayHelpers.push({
                                                            name: '',
                                                            date: null
                                                        })
                                                    }}
                                                        startIcon={<AddIcon />}
                                                        variant='outlined'
                                                    >Add Round Details</Button>
                                                </Box>
                                            </Stack>)
                                        }
                                    />
                                }



                                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                    Upload file
                                    <VisuallyHiddenInput type="file" accept='application/pdf, .doc, .docx, .txt' />
                                </Button>



                                <Stack direction={'row'} style={{ marginTop: '20px', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button type='reset' variant='outlined'>Reset</Button>
                                    <Button type='submit' variant='contained'>Submit</Button>
                                </Stack>
                            </Stack>
                        </form>
                    )


                }



            </Formik>


        </Box >
    )
}

export default AddDrive;