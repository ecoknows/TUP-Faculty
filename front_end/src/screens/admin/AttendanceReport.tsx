import { View, Table, Button } from '../../components';

interface AttendanceInterface {
    _id: string,
    name: string,
    department: string,
    date: string,
    in: string,
    out: string
}


const data : AttendanceInterface[] = [
    {_id : '12345', name:'Jerico C. Villaraza', department: 'COS', date: 'December 2, 1999', in: '12:00', out:'1:00'}
];

const AttendanceReport = () => {
    return (
        <View height='100vh' middle center column>
            <View end style={{width: '50%'}} column>
                <Button title='Filter' margin='mb-10' />
                
                <Table
                        header={['ID No.','Name', 'Department','Date','Time-in','Time-out']}
                        numColumn={11}
                        width='100%'
                        data={data}
                        renderItem={({item})=>(
                            <Table.Body>
                                <Table.Row center middle>
                                    {item._id}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.name}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.department}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.date}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.in}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.out}
                                </Table.Row>
                            </Table.Body>
                        
                        )}
                    />

                <Button title='Generate Report' margin='mt-10' />
            </View>
              
        </View>
    )
}
export default AttendanceReport
