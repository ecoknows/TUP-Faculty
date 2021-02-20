import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';
import View, {ViewProps} from './View';
import Text from './Text';

interface TableProps<ItemT>{
    className?: string,
    width: number | string;
    timeExisted: string[],
    dataSchedules:{start: string, end: string, day: string}[],
}

interface RowProps<ItemT> extends ViewProps {
    className?: string,
    style?: {},
}

const data_time = ['7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function Table<ItemT>(props : TableProps<ItemT>){
    
    const {
        className,
        width,
        timeExisted,
        dataSchedules,

        ...rest
    } = props; 
    
    return (
        <View style={{width}} flex>
            <View {...rest} className='border border-solid border-black' column width='full' flex>
                <View style={{overflowY: 'scroll',minHeight: 50}} flex>
                        {
                            days.map(day => (

                                <View className='table-header px-2'>
                                    <span>{day}</span>
                                </View>
                            ))
                        }
                </View>
                        
                <View column className='overflow-y-scroll h-screen' flex>
                    {
                        timeExisted.map((time, index) => (
                            <Body>
                                <Row>
                                    {time}
                                </Row>
                                {
                                days.map(day=>{
                                    let status = false;
                                    for(let i = 0; i  < dataSchedules.length; i++){
                                        if(dataSchedules[i].day === day){
                                            const start = data_time.indexOf(dataSchedules[i].start);
                                            const end = data_time.indexOf(dataSchedules[i].end);
                                            if(start<= index && end >= index){
                                                status = true;
                                            }
                                        }
                                    }
                                    return (
                                        <Row>
                                            {status ? "eco" : null}
                                        </Row>
                                    )
                                }) 
                                }
                            </Body>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

function Body({children} : any){
    return(
        <View flex>  
            {children}
        </View>
    )
}

function Row<ItemT>(props : RowProps<ItemT>){
    const {
        className,
        children,
        style,
        ...rest
    } = props; 

    return(
        <View flex className='table-row px-2' style={style} {...rest}>
        {children}
        </View>
    )
}


Table.Body = Body;
Table.Row = Row;
export default Table
