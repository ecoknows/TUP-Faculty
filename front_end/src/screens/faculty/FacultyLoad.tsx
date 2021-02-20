import { Button, Slider, Table, View } from "../../components"
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
        <View flex column end margin='mx-20' height='screen' center>
            <View className='space-x-5'>
                <Slider items={['2020']} placeHolder='School Year'  style={{width: '10rem'}}/>
                <Slider items={['2020']} placeHolder='Sem' style={{width: '10rem'}}/>
                <Slider items={['2020']} placeHolder='Department' style={{width: '10rem'}}/>
            </View>
            <View className='space-x-5'>
                <Slider items={['2020']} placeHolder='Course Code' style={{width: '10rem'}}/>
                <Slider items={['2020']} placeHolder='Section' style={{width: '10rem'}}/>
                <Slider items={['2020']} placeHolder='Subject' style={{width: '10rem'}}/>
            </View>
            <Button title='Search' className='mb-5'/>
{/* 
            <Table
                header={['Course Code','Section', 'Subject Code','Day/Room','Assigned To','Select']}
                numColumn={2}
                width='100%'
                data={data}
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
            /> */}

        </View>
    )
}

export default FacultyLoad
