import { View, Table,Button, Text } from "../../components";

const data = [
    {
        prof: 'Elanie',
        subject: 'Data Structure',
        units: 4,
        day: 'Mon-Fri',
        time: '10:00am - 3:00pm',
        hours: 3,
        venue: 'COS',
        students: 12,
        first : 'January 2, 1999'
    },
]

function GenerateReport(){
    return(
        <View column>
            <View flex column end className='lg:pr-10 pr-0 mb-10 space-y-10'>
                <View className='w-full flex items-center justify-center'>
                    <Text className='text-4xl'>Summary</Text>
                </View>
                <View flex className='space-x-4'>
                    <input type="text" style={{border:'1px solid black', paddingLeft:10}}/>
                    <Button title='Search'/>
                </View>
                <Table
                    header={['Prof','Subject', 'Units','Day','Time','No. of Hours','Venue','No. of Students','First Day of Service']}
                    numColumn={10}
                    width={'100%'}
                    data={data}
                    className='mb-4'
                    renderItem={({item, index})=>(
                        <Table.Body key={index}>
                            <Table.Row center middle>
                                {item.prof}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.subject}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.units}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.day}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.time}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.hours}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.venue}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.students}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.first}
                            </Table.Row>
                        </Table.Body>
                    
                    )}
                />
            </View>
        </View>
    )
}
export default GenerateReport;