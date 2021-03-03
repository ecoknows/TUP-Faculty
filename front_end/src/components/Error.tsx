import View from './View';
import Text from './Text';


function Error(props: any){
    return (
        <View>
            <Text style={{color:'red'}}>
                {props.children}
            </Text>

        </View>
    )
}
export default Error;