import View from './View';
import Text from './Text';


interface TableProps<ItemT>{
    header: string[],
    data: ItemT[],
    className?:string,
    renderItem: (props: { item : ItemT }) => any,
}

function UpdateTable<ItemT>(props: TableProps<ItemT>){
    const { header, data, renderItem, className} = props;
    return(
        <View flex className={`space-x-10 ${className}`} relative style={{height:100,overflowY:'scroll'}}>
            {
                header.map((item,index) => (
                <View style={{display:'flex',flexDirection:'column' , maxWidth: 100}}>
                    <View>
                        <Text   >{item}</Text>
                        <View absolute style={{top:0}} className='hidden lg:block'>
                            <Text style={{position:'fixed',backgroundColor:'white', width: '100%'}}>{item}</Text>
                        </View>
                    </View>
                    {data.map((item)=>(
                        <View>
                            {renderItem({item}).props.children[index]}
                        </View> 
                    ))}
                 </View>
                ))
            }
        </View>
    )
}

export default UpdateTable;