
import { Box } from '@mui/material';
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from 'formik';
import useAxiosPrivate from '../../../utils/axiosPrivate';



const Companies = () => {
    const api = useAxiosPrivate();
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState<{ id: string, label: string }[]>([]);
    const result = useQuery({
        queryKey: ["company-list"],
        queryFn: (): Promise<Array<{ id: string; label: string }>> => (
            api.get('/alumni/getcompanylist', {
                params: {
                    search: search,
                }
            }).then(res => res.data)
        )
    })

    useEffect(() => {
        if (result.isSuccess)
            setOptions(result.data)
    }, [result.status])

    return (
        <Box width={"100%"} height={"98vh"} >
            <Formik
                initialValues={{
                    company_id: '',
                    company_name: ''
                }}
                onSubmit={(values) => {
                    window.alert(JSON.stringify(values));
                }}
            >
                {
                    (props) => (
                        <Form>
                            <Box width={"100%"}>
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
                                        }}

                                        fullWidth />)}

                                />
                            </Box>
                        </Form>
                    )
                }
            </Formik>




        </Box>);
}

export default Companies;