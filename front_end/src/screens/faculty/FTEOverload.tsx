import { View, Table, Slider, Button } from "../../components";
const data = [{
    day: 'Monday',
    official: "12:30pm",
    consultation: "eco",
    overload:"hatdogg",
}]


function FTEOverload(){
    return(
        <View flex column middle>
            <View flex column className='items-start lg:w-1/3 w-full mb-10 border border-black p-10'>
                <Slider
                    items={['Eco','Pogi']}
                    placeHolder='Day'
                />
                <Slider
                    items={['Eco','Pogi']}
                    placeHolder='Official Time'
                />
                <Slider
                    items={['Eco','Pogi']}
                    placeHolder='Consultation'
                />
                <Slider
                    items={['Eco','Pogi']}
                    placeHolder='Overload'
                />
                <Button
                    title="Add"
                    className='lg:self-end'
                />
            </View>
            <Table
                    header={['Day','Official Time', 'Consultation','Overload']}
                    numColumn={10}
                    width={900}
                    data={data}
                    className='mb-4'
                    renderItem={({item,index})=>(
                        <Table.Body key={index}>
                            <Table.Row center middle>
                                {item.day}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.official}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.consultation}
                            </Table.Row>
                            <Table.Row center middle>
                                {item.overload}
                            </Table.Row>
                        </Table.Body>
                    
                    )}
                />
        </View>
    )
}
export default FTEOverload;