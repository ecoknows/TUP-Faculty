import { Button, Schedule, Slider, Table, View } from "../../components"
interface CourseInterface {
    courseCode: string,
    section: string,
    subjectCode: string,
    dayOrRoom: string,
    assign: string,
    select: boolean,
}


const data : CourseInterface[] = [
    {courseCode : 'CS303', subjectCode:'Hatdog', section:'BSCSNS-2A', dayOrRoom: 'Monday', assign: 'Mrs.Filmora', select: true}
];


function FacultyLoad (){
    return (
        <View margin='py-10'>
            <View flex end column className='lg:pr-10 pr-0'>
                <View className='flex lg:flex-row flex-col mb-5 lg:space-x-5 lg:justify-end items-center w-full'>
                    <Slider items={['2020']} placeHolder='School Year'  style={{width: '12rem'}}/>
                    <Slider items={['2020']} placeHolder='Sem' style={{width: '12rem'}}/>
                    <Slider items={['2020']} placeHolder='Department' style={{width: '12rem'}}/>
                </View>
                <View className='flex lg:flex-row flex-col mb-5 lg:space-x-5 lg:justify-end items-center w-full'>
                    <Slider items={['2020']} placeHolder='Course Code' style={{width: '12rem'}}/>
                    <Slider items={['2020']} placeHolder='Section' style={{width: '12rem'}}/>
                    <Slider items={['2020']} placeHolder='Subject' style={{width: '12rem'}}/>
                </View>
                    <Button title='Search' className='mb-5'/>
            </View>
            <View className='lg:flex lg:flex-column lg:justify-end px-10'>
                <Table
                    header={['Course Code','Section', 'Subject Code','Day/Room','Assigned To','Select']}
                    numColumn={2}
                    width={'200vw'}
                    data={data}
                    className='mb-4'
                    renderItem={({item})=>(
                        <Table.Body>
                            <Table.Row center middle>
                                {item.courseCode}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.section}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.subjectCode}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.dayOrRoom}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.assign}
                            </Table.Row>
                            <Table.Row center middle>
                                <input checked={item.select} type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            </Table.Row>
                        </Table.Body>
                    
                    )}
                />

            </View>
            <View className='lg:flex lg:flex-column lg:justify-end px-10'>
                <Schedule
                    width={'200vw'}
                    timeExisted={['7:00','7:30','8:00','8:30','9:00','9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '1:00']}
                    className='mb-12'
                    dataSchedules={ 
                        [
                            {start : '7:00', end: '8:00', day: "Monday", subject: 'COS312 / BSCS-NS-3A'},
                            {start : '11:30', end: '1:00', day: "Monday", subject: 'COS311 / BSCS-2B'},
                            {start : '8:00', end: '11:00', day: "Tuesday", subject: 'COS315 / BSCS-1A'},
                        ]
                    }
                />
            </View>


        </View>
    )
}

export default FacultyLoad
