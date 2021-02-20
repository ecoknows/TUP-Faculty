import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';
import View, {ViewProps} from './View';
import Text from './Text';

interface TableProps<ItemT>{
    className?: string,
    width: number | string;
    timeExisted: string[],
    dataSchedules:{start: string, end: string, day: string, subject: string}[],
}

interface RowProps<ItemT> extends ViewProps {
    className?: string,

    shaded?: boolean,
    isEnd?: boolean,
    isTime?: boolean,

    style?: {},
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function Schedule<ItemT>(props : TableProps<ItemT>){
    
    const {
        className,
        width,
        timeExisted,
        dataSchedules,

        ...rest
    } = props; 
    
    return (
        <View flex style={{width, height: 50 + 32.15 * timeExisted.length}}  className={className}>
            <View {...rest} className='border border-solid border-black' column width='full' flex>
                <View style={{overflowY: 'scroll',minHeight: 50}} flex>
                        <Row isTime={true}>
                            Time
                        </Row>
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
                                <Row isTime={true}>
                                    {time}
                                </Row>
                                {
                                days.map(day=>{
                                    let status = false;
                                    let isEnd = false;
                                    let isMid = '';
                                    for(let i = 0; i  < dataSchedules.length; i++){
                                        if(dataSchedules[i].day === day){
                                            const start = timeExisted.indexOf(dataSchedules[i].start);
                                            const end = timeExisted.indexOf(dataSchedules[i].end);
                                            const mid = ( (end - start) / 2 ) + start
                                            if(start<= index && end >= index){
                                                status = true;
                                                if(end === index){
                                                    isEnd = true
                                                }
                                                if(mid === index){
                                                    isMid = dataSchedules[i].subject;
                                                }
                                            }
                                        }
                                    }
                                    return (
                                        <Row shaded={status} isEnd={isEnd}>
                                            {isMid}
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
        children,
        style,
        shaded,
        isEnd,
        isTime,
        ...rest
    } = props; 

    return(
        <View flex className={shaded ?`table-row-shaded px-2 ${isEnd ? 'border-b border-solid border-black' : ''}` : 
        `${isTime ? 'table-row-time': 'table-row'} px-2`
        
        } style={style} {...rest}>
            {children} 
        </View>
    )
}


Schedule.Body = Body;
Schedule.Row = Row;
export default Schedule
