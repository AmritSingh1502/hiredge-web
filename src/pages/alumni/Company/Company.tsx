
import { Box, InputAdornment, debounce } from '@mui/material';
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState, } from "react";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from 'formik';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import CompanyCard from '../../../Components/CompanyCard/CompanyCard';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '@uidotdev/usehooks';


const Companies = () => {
    const api = useAxiosPrivate();
    const [search, setSearch] = useState('');
    const searchParams = useDebounce(search, 2000);
    const result = useQuery({
        queryKey: ["company-list", searchParams],
        queryFn: (): Promise<Array<{ id: string; label: string }>> => (
            api.get('/alumni/companies', {
                params: {
                    search: searchParams,
                }
            }).then(res => res.data)
        ),
    });


    return (
        <Box width={"100%"} height={"98vh"} display={'flex'} flexDirection={'column'} >
            <TextField
                variant='outlined'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
                placeholder='Search...'
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                sx={{

                    position: 'relative',
                    width: '15%',
                    alignSelf: "end"
                }}
            />

            <Box sx={{
                width: '100%',
                height: '90vh',
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                gap: '10px',
                padding: '10px',
                boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                margin: '5px',
                flexWrap: 'wrap',
            }}>
                {
                    result.isSuccess && result.data?.map((company, index) => (<CompanyCard key={index} title={company.label} id={company.id} />))
                }
            </Box>



        </Box>);
}

export default Companies;