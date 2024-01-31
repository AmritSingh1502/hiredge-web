
import { Box, Card, CardContent, Typography, CardActions, Button, Pagination, Toolbar, Select, SelectChangeEvent, MenuItem, TextField, InputAdornment, Stack } from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
// import useAutocomplete from '@mui/material';
import useAxiosPrivate from '../../../utils/axiosPrivate';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '@uidotdev/usehooks';


const OngoingDrive = () => {
    const api = useAxiosPrivate();

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(5);

    const [search, setSearch] = useState<string>("");
    const s = useDebounce(search, 2000);

    const handlePageChange = (e: React.ChangeEvent<any>, page: number) => {
        setPage(page);
    }

    const handleLimitChange = (event: SelectChangeEvent<number>) => {
        setLimit(Number(event.target.value));
    }

    const result = useQuery({
        queryKey: ['fetchOngoingDrives', page, limit, s],
        queryFn: (): Promise<StudentDrivesResponseType> =>
            api.get('/student/drives', {
                params: {
                    s: s,
                    page: page,
                    limit: limit,
                }
            })
                .then(res => res.data.drives)
                .catch(e => { console.log(e) })
        ,
        staleTime: 5 * 60 * 1000,
    }
    )

    if (result.isLoading)
        return <>Loading....</>

    if (result.isError)
        return <>Error</>

    if (result.isSuccess)
    return (
        <Stack sx={{
            width: '100%',
            height: '100vh',
            boxSizing: 'border-box',
            padding: "4px"
        }}>
            <Toolbar sx={{
                width: '98%',
                alignItems: 'right',
                justifyContent: 'right',
                gap: 5
            }}>

                <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    label="Search"
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
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </Toolbar>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                rowGap: 2,
                columnGap: 2,
                minHeight: 300,
                maxHeight: 400,
                overflow: 'hidden',
                paddingTop: 2
            }}> {
                    result.data.data.map((driveData) => (
                        <Card sx={{
                            maxWidth: 345,
                            minWidth: 140,
                            minHeight: 100,
                            maxHeight: 180,
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            borderRadius: 2,
                        }}
                            key={`${driveData._id}`}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                                    {driveData.company_name || ""}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Link to={driveData.company_website} target='_blank'>Visit Company Website</Link>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={{
                                    pathname: './../drive',
                                    search: `?id=${driveData._id}`,
                                }} >
                                    <Button sx={{}} variant='outlined'>
                                        Learn More
                                    </Button>
                                </Link>
                            </CardActions>
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
        </Stack >     
    );

    return null
}


export default OngoingDrive;