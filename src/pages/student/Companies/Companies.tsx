
import { Box, Stack, Toolbar, Pagination, TextField, InputAdornment, MenuItem, Select, Typography, SelectChangeEvent, Card, Button } from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { useDebounce } from '@uidotdev/usehooks';
import SearchIcon from '@mui/icons-material/Search';


const Companies = () => {
    const api = useAxiosPrivate();

    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>('');

    const s = useDebounce(search, 2000);

    const [limit, setLimit] = useState<number>(20);


    const handlePageChange = (e: React.ChangeEvent<any>, page: number) => {
        setPage(page);
    }

    const handleLimitChange = (event: SelectChangeEvent<number>) => {
        setLimit(Number(event.target.value));
    }

    const result = useQuery({
        queryKey: ['getCompaniesData', page, limit, s],
        queryFn: (): Promise<CompaniesResponseType> => (
            api.get('/student/companies', {
                params: {
                    s: s,
                    page: page,
                    limit: limit,
                }
            }).then((res) => res.data.companies).catch((e) => { console.log(e) })
        )
    })

    if (result.isSuccess)
        return (
            <Stack>
                <Toolbar sx={{
                    position: 'relative',
                    width: '98%',
                    alignItems: 'right',
                    justifyContent: 'right',
                    gap: 5
                }}>

                    <TextField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        label="Search Company"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>)
                        }}
                    />
                    <Typography>Limit No of Items</Typography>
                    <Select value={limit} onChange={handleLimitChange} label="Limit" >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={50}>50 </MenuItem>
                    </Select>
                </Toolbar>
                <Box style={{

                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 8,
                    padding: 5,
                    position: 'inherit',
                    overflow: 'scroll',
                }}>
                    {
                        result.data.data.map((company, index) => (
                            <Card key={company.company_name} style={{
                                display: 'flex',
                                height: 100,
                                minWidth: 180,
                                boxShadow: '0px 0px 5px #7D7C7C',
                                border: '1px solid balck',
                                padding: 3,
                                boxSizing: 'border-box',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative'
                            }}>
                                <Typography variant='h5'>{company.company_name}</Typography>

                                <Button variant='contained' color='success' style={{
                                    position: 'absolute',
                                    bottom: 5
                                }}>Go to Page</Button>

                            </Card>
                        ))
                    }

                </Box>
                <Pagination count={result.data.metadata.pageCount} page={page} sx={{
                    alignSelf: 'center',
                    justifySelf: 'center',
                }}
                    onChange={handlePageChange}
                    showFirstButton
                    showLastButton
                    siblingCount={2}
                />
            </Stack>
        )

    return null;
}


export default Companies;