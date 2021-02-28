import {useEffect, useState} from 'react';
import { View,Text, Button } from "../../components";
import { useSelector,useDispatch } from 'react-redux';
import { time_status } from '../../redux';

function Clock(){
    const { time,date, wish } = useDate();
    const UserState = useSelector((state:any) => state.userDetails);
    const { userData } = UserState;
    const dispatch = useDispatch();
    
    
    return(
        <View flex middle center className='pt-10'>
            <View flex column className='items-center justify-center'>
                <Text>
                    {wish}
                </Text>
                <Text className=' font-bold text-lg'>
                    {date}
                </Text>
                <Text type='title'>
                    {time}
                </Text>
                <View flex column>
                    <Text >Check In : <Text className=' font-bold text-sm'>{userData?.time_in}</Text> </Text>
                    <Text >Check Out : <Text className=' font-bold text-sm mt-10'>{userData?.time_out}</Text> </Text>
                </View>
                <Button title={`${userData?.time_in? 'Check Out' : 'Check In'}`} className='mt-10'
                     onClick={()=>{
                         if(!userData.time_in)
                            dispatch(time_status({userData, time_in: 'time_in'}))
                         else
                            dispatch(time_status({userData, time_in:'time_out'}))

                     }}
                />

            </View>
        </View>
    )
}



const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
        }, 1000);
        return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })} ${today.getFullYear()}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });

    return {
        date,
        time,
        wish,
    };
}

export default Clock