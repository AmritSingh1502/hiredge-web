import { useSearchParams } from "react-router-dom";
import useAxiosPrivate from "../../../utils/axiosPrivate";
import { useQueries } from "@tanstack/react-query";
import { Box, Stack, Button, Typography } from "@mui/material";
import { HTMLProps, useEffect, useRef, useState } from "react";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";


const ManageStudentDrive = () => {

    const [searchParams, _] = useSearchParams();
    const api = useAxiosPrivate();

    const drive_id = searchParams.get('id');

    const result = useQueries({
        queries: [{
            queryKey: ['getStudentDriveData', drive_id],
            queryFn: (): Promise<DriveStudentDataType[]> => (
                api.get('/tpo/getstudentdatafordrive', {
                    params: {
                        id: drive_id
                    }
                }).then(res => res.data)
            )
        },
        {
            queryKey: ["getRoundDetails", drive_id],
            queryFn: (): Promise<RoundType[]> => (
                api.get('/tpo/getrounds', {
                    params: {
                        id: drive_id
                    }
                }).then(res => res.data)
            )
        }
        ]
    })

    const columns: GridColDef[] = [{
        field: 'user_id',
        headerName: 'USN',
        renderCell: (row) => <Typography sx={{ textTransform: 'uppercase' }}>{row.value}</Typography>,
        width: 120,
        align: 'center',
        headerAlign: 'center'
    }, {
        field: 'full_name',
        headerName: "Full Name",
        renderCell: (props) => <Typography>{props.row.first_name} {props.row.middle_name} {props.row.last_name}</Typography>,
        width: 150,
        align: 'center',
        headerAlign: 'center'
    }, {
        field: 'status',
        headerName: 'Status',
        renderCell: (props) => <Typography sx={{ textTransform: "capitalize" }}>{props.value}</Typography>,
        align: 'center',
        headerAlign: 'center'
    }, {
        field: 'email',
        headerName: "Email",
        width: 200,
        align: 'center',
        headerAlign: 'center'
    }, {
        field: 'mobile',
        headerName: 'Mobile No.',
        align: 'center',
        headerAlign: 'center'
    }, {
        field: 'branch',
        headerName: 'Branch',
        align: 'center',
        headerAlign: 'center'
    }, {
        field: 'tenth_percentage',
        headerName: "10th Percentage",
        renderCell: (props) => <Typography textAlign={'center'} sx={{
            justifyContent: 'center',
        }}>{props.value}%</Typography>,
        width: 120,
        align: 'center',
        headerAlign: 'center'
    }, {
        field: 'twelfth_percentage',
        headerName: "12th Percentage",
        align: 'center',
        headerAlign: 'center',
        renderCell: (props) => <Typography>{props.value}%</Typography>,
        width: 120
    }, {
        field: 'ug_cgpa',
        headerName: 'UG CGPA',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    }]

    const [rowSelection, setRowSelection] = useState<GridRowId[]>([])


    if (result[0].isLoading || result[1].isLoading)
        return <>Loading......</>

    return (<Box>

        {result[0].data && <DataGrid
            columns={columns}
            rows={result[0].data}
            getRowId={row => row.user_id}
            checkboxSelection
            rowSelectionModel={rowSelection}
            onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelection(newRowSelectionModel);
            }}
        />}

        <Stack direction={'row'} columnGap={2}>
            <Button variant="contained">Mark Selected Students Qualifed for Round</Button>
            {
                result[1].data && result[1].data?.map((round, index) => (
                    <div key={`round-button-${index}`}>
                        <Button variant="contained" color="success"
                            onClick={() => {
                                window.alert(JSON.stringify({ rowSelection, status: "Round 1" }))
                            }}
                        >
                            {`Qualified ${round.round_name}`}
                        </Button>
                    </div>
                ))
            }
        </Stack>
    </Box>);
}



export default ManageStudentDrive;