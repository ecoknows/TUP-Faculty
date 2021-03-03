import {useEffect,useRef} from 'react';
import { View, Table, Button, Slider } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { listAttendanceReport, searchAttendanceReport, sortAttendanceReport } from '../../redux';
import { ARInterface } from '../../redux/types/attendancereport.types';
interface AttendanceReportProps{
    history: string[];
}

const AttendanceReport = (props : AttendanceReportProps) => {

    const UserState = useSelector((state:any) => state.userDetails);
    const AttendanceReportState = useSelector((state:any) => state.attendenceReport);
    const { userData } = UserState;
    const { loading, reportDetails, error }: ARInterface = AttendanceReportState;
    const searchInput = useRef<any>();
    const dispatch = useDispatch();
    
    

    if(userData){
        if(!userData.is_admin)
            props.history.push('/faculty');  
    }

    useEffect(() => {
        if(userData)
            dispatch(listAttendanceReport());
    }, [])
    
    useEffect(() => {
        if(!userData){
            props.history.push('/');  
        }
    }, [userData])
    
  
    return (
        <View height='screen' center middle column flex>
            <View end style={{width: '80%'}} column flex>
                <View flex column end className='mb-10'>
                    <View flex className='space-x-4'>
                        <input type="text" style={{ border: '1px solid black', paddingLeft: 10 }} ref={searchInput}/>
                        <Button title='Search' onClick={() => {
                            if (searchInput?.current.value === "")
                                dispatch(listAttendanceReport());
                            else
                                dispatch(searchAttendanceReport(searchInput?.current.value));
                        }}/>
                    </View>
                </View>
                
                <Table
                        header={['ID No.','Name', 'Department','Date','Time-in','Time-out']}
                        numColumn={11}
                        width='100%'
                        onSort={({key,ascending})=>{
                            switch(key){
                                case 'ID No.':
                                    dispatch(sortAttendanceReport({sortKey: { number_id: ascending}}))
                                    break;
                                case 'Name':
                                    dispatch(sortAttendanceReport({sortKey: { name: ascending }}))
                                    break;
                                case 'Department':
                                    dispatch(sortAttendanceReport({sortKey: { department: ascending }}))
                                    break;
                                case 'Date':
                                    dispatch(sortAttendanceReport({sortKey: { date: ascending }}))
                                    break;
                                case 'Time-in':
                                    dispatch(sortAttendanceReport({sortKey: { in: ascending }}))
                                    break;
                                case 'Time-out':
                                    dispatch(sortAttendanceReport({sortKey: { out: ascending }}))
                                    break;
                            }
                        }}
                        data={reportDetails}
                        renderItem={({item, index})=>(
                            <Table.Body key={index}>
                                <Table.Row center middle>
                                    {item.id_number}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.name}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.department}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.date_time_in}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.time_in}
                                </Table.Row>
                                <Table.Row center middle>
                                    {item.time_out}
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
