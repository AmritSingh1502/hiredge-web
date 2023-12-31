
import { Box, Table, TableBody, TableHead, TableCell, TableContainer, Paper, TableRow } from '@mui/material';

import styles from './Companies.module.css';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosPrivate from '../../../utils/axiosPrivate';

type CompanyData = {
    company_name: string;
    offers: number;
}


const Companies = () => {
    const api = useAxiosPrivate();

    const currDate = new Date();

    const [year, setYear] = useState(2019);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('year');

    const result = useQuery({
        queryKey: ['getCompaniesData', year],
        queryFn: (): Promise<CompanyData[]> => (
            api.get('/student/companies', {
                params: {
                    page: page,
                    filter: filter,
                    year: year
                }
            }).then((res) => res.data).catch((e) => { console.log(e) })
        )
    })

    return (
        <Box>
            <Box id={styles.searchContainer}>
                Search
            </Box>
            <Box>

                <TableContainer component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell>No of Offers</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            result.isSuccess && result.data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.company_name}</TableCell>
                                    <TableCell>{row.offers}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableContainer>

            </Box>


        </Box>
    )
}


export default Companies;