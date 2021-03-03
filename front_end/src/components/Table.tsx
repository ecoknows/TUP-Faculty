import {useState} from 'react'
import classNames from 'classnames';
import View, {ViewProps} from './View';

interface TableProps<ItemT>{
    className?: string,
    header: string[],
    numColumn: number;
    width: number | string;
    data: ItemT[],
    onSort?: (props: {key: string, ascending: number})=> void;
    renderItem: (props: {item: ItemT, index: number}) => void,
}

interface RowProps<ItemT> extends ViewProps {
    className?: string,
    style?: {},
}

interface HeaderInterface {
    name: string, 
    index: number,
    sort: number, 
    setSort: (sort : number)=>void, 
    onSort: ((props: {key:string, ascending: number})=> void) | undefined
}

function Headers({name,onSort, index, sort, setSort} : HeaderInterface){

    const isAscending =  sort === index ? true : false;
    return(
        <View className='table-header px-2 relative'>
            <span>{name}</span>
            <img src={sort ! == index? '/assets/images/icons/ascending.png' :'/assets/images/icons/descending.png'} 
                className={`w-6 absolute right-5 opacity-${isAscending ? '100' : '40'}`}
                onClick={()=>{
                    if(onSort)
                        onSort({key: name, ascending: isAscending? 1 : -1});
                    
                    setSort(isAscending ? -1 : index);
                }}
            />
        </View>
    )
}

function Table<ItemT>(props : TableProps<ItemT>){
    
    const [sort, setSort] = useState(-1);

    let {
        className,
        header,
        data,
        renderItem,
        numColumn,
        width,
        onSort,

        ...rest
    } = props;
    if(data == undefined)
        data = [];

        // data.length > numColumn ? 'scroll':'hidden'
    return (
        <View style={{width , height : 50 + 32.15 * numColumn}} flex className={className}>
            <View {...rest} className='border border-solid border-black' column width='full' flex>
                <View style={{overflowY:'scroll',minHeight: 50}} flex className='scroll_hidden'>
                        {
                            header.map( (name : string, index: number)=><Headers index={index} sort={sort} setSort={setSort} key={index} name={name}  onSort={onSort}/>)
                        }
                </View>
                        
                <View column className='overflow-y-scroll h-screen' flex>
                    { 
                        data.map(
                            (item,index) => renderItem({item,index})
                        )
                    }
                    { data.length < numColumn ?
                        Array.from(Array(numColumn - data.length)).map((item,index)=>
                        <Body key={index}>
                            {
                                Array.from(Array(header.length)).map((item,index)=><Row key={index}></Row>) 
                            }
                        </Body>) : null
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
