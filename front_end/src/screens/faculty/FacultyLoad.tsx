import { useEffect,useRef } from "react";
import { Button, Schedule, Slider, Table, View } from "../../components"
import {useSelector, useDispatch} from 'react-redux';
import { listFacultyLoad, searchFacultyLoad, sortFacultyLoad } from "../../redux";
import { FLInterface } from "../../redux/types/facultyload.types";

function FacultyLoad (){
    
    const UserState = useSelector((state:any) => state.userDetails);
    const { userData } = UserState;

    const FacultyState = useSelector((state:any) => state.facultyLoad);
    const { loading, facultyInfo, error }: FLInterface = FacultyState;
    const searchInput = useRef<any>();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listFacultyLoad());
    },[]);
    useEffect(()=>{
        console.log(facultyInfo, "wALA PADIN");
        
    },[facultyInfo]);
    
    
    return (
        <View margin='py-10'>
            <View flex column end className='lg:pr-10 pr-0 mb-10'>
                <View flex className='space-x-4'>
                        <input type="text" style={{ border: '1px solid black', paddingLeft: 10 }} ref={searchInput}/>
                        <Button title='Search' onClick={() => {
                            if (searchInput?.current.value === "")
                                dispatch(listFacultyLoad());
                            else
                                dispatch(searchFacultyLoad(searchInput?.current.value));
                        }}/>
                </View> 
            </View>
            <View className='lg:flex lg:flex-column lg:justify-end px-10'>
                <Table
                    header={['Course Code','Section', 'Subject Code','Day/Time','Assigned To','Action']}
                    numColumn={10}
                    width={'200vw'}

                    onSort={({key,ascending})=>{
                        switch(key){
                            case 'Course Code':
                                dispatch(sortFacultyLoad({sortKey: { curse_code: ascending}}))
                                break;
                            case 'Section':
                                dispatch(sortFacultyLoad({sortKey: { section: ascending }}))
                                break;
                            case 'Subject Code':
                                dispatch(sortFacultyLoad({sortKey: { subject_code: ascending }}))
                                break;
                            case 'Day/Time':
                                
                                dispatch(sortFacultyLoad({sortKey: { day: ascending }}))
                                break;
                            case 'Assigned To':
                                dispatch(sortFacultyLoad({sortKey: { assigned_to: ascending }}))
                                break;
                        }
                    }}
                    data={facultyInfo}
                    className='mb-4'
                    renderItem={({item, index})=>(
                        <Table.Body key={index}>
                            <Table.Row center middle>
                                {item.course_code}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.section}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.subject_code}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.day} / {item.time_start} - {item.time_end}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.assigned_to}
                            </Table.Row>
                            <Table.Row center middle>
                                <View className='space-x-2 flex flex-row'>
                                    <View className='p-1 bg-green-500'>
                                        <img src={'/assets/images/icons/plus.png'} className='w-4' />
                                    </View>
                                    <View className='p-1 bg-red-500'>
                                        <img src={'/assets/images/icons/cross.png'} className='w-4' />
                                    </View>
                                </View>
                            </Table.Row>
                        </Table.Body>
                    
                    )}
                />

            </View>
            <View className='lg:flex lg:flex-column lg:justify-end px-10'>
                <Schedule
                    width={'200vw'}
                    timeExisted={['7:00','7:30','8:00','8:30','9:00','9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '1:00','1:30','2:00','2:30','3:00']}
                    className='mb-12'
                    dataSchedules={facultyInfo}
                />
            </View>

            <View flex end column className='lg:pr-10 pr-0'>
               
                    <Button title='Confirm' className='mb-5'/>
            </View>


        </View>
    )
}

export default FacultyLoad
