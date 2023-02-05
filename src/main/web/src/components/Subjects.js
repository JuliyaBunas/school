import React, { useEffect, useState, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Api from 'services/ApiService';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Название', width: 150 },
    {
        field: 'description',
        headerName: 'Описание',
        width: 150,
        sortable: false
    }
];

const Subjects = props => {
    const [data, setData] = useState([]);

    const calledOnce = useRef(false);

    useEffect(() => {
        if (!calledOnce.current) {
            calledOnce.current = true;
            Api.get('subjects')
                .then(response => setData(response || []))
                .catch(error => console.error(error));
        }
    }, []);

    return (
        <div>
            Subjects
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default Subjects;
