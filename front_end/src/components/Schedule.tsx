import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';
import View, {ViewProps} from './View';
import Text from './Text';
import { FacultyLoadInterface } from '../redux/types/facultyload.types';

interface TableProps<ItemT>{
    className?: string,
    width: number | string;
    timeExisted: string[],
    dataSchedules:FacultyLoadInterface[],
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
    
    let {
        className,
        width,
        timeExisted,
        dataSchedules,

        ...rest
    } = props; 
    if(dataSchedules == undefined)
        dataSchedules = []
    
    return (
        <View flex style={{width, height: 50 + 32.15 * timeExisted.length}}  className={className}>
            <View {...rest} className='border border-solid border-black' column width='full' flex>
                <View style={{minHeight: 50}} flex>
                        <Row isTime={true}>
                            Time
                        </Row>
                        {
                            days.map((day,index) => (

                                <View key={index} className='table-header px-2'>
                                    <span>{day}</span>
                                </View>
                            ))
                        }
                </View>
                        
                <View column className='h-screen' flex>
                    {
                        timeExisted.map((time, index) => {
                            const main_index = index
                            return <Body key={main_index}>
                                <Row isTime={true}>
                                    {time}
                                </Row>
                                {
                                days.map((day, index)=>{
                                    let status = false;
                                    let isEnd = false;
                                    let isMid = '';
                                    for(let i = 0; i  < dataSchedules.length; i++){
                                        if(dataSchedules[i].day === day){
                                            const start = timeExisted.indexOf(dataSchedules[i].time_start);
                                            const end = timeExisted.indexOf(dataSchedules[i].time_end);
                                            const mid = ( (end - start) / 2 ) + start
                                            
                                            if(start<= main_index && end >= main_index){
                                                status = true;
                                                if(end === main_index){
                                                    isEnd = true
                                                }
                                                if(Math.round(mid) === main_index){
                                                    isMid = dataSchedules[i].subject_code + " / "+ dataSchedules[i].section;
                                                }
                                            }
                                        }
                                    }
                                    return (
                                        <Row key={index} shaded={status} isEnd={isEnd}>
                                            {isMid}
                                        </Row>
                                    )
                                }) 
                                }
                            </Body>
                        })
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
