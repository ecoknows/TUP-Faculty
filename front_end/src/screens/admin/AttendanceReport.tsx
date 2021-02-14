import React from 'react';
import { View, Table } from '../../components';

const data = [{},{},{},{},{},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
        // {_id: 123, name:'Eco Villaraza', department: 'COS', date: 'december', in: '123', out: '132'},
];

const AttendanceReport = () => {
    return (
        <View height='100vh' middle center>
                <Table
                    header={['ID No.','Name', 'Department','Date','Time-in','Time-out']}
                    numColumn={2}
                    data={data}
                    renderItem={({item})=>(
                        <Table.Body>
                            <Table.Row center middle>
                            </Table.Row>
                            <Table.Row center middle>
                            </Table.Row>
                            <Table.Row center middle>
                            </Table.Row>
                            <Table.Row center middle>
                            </Table.Row>
                            <Table.Row center middle>
                            </Table.Row>
                            <Table.Row center middle>
                            </Table.Row>
                        </Table.Body>
                    
                    )}
                />
        </View>
    )
}
export default AttendanceReport
