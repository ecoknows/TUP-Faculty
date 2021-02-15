import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';
import View, {ViewProps} from './View';

interface TableProps<ItemT>{
    className?: string,
    header: string[],
    numColumn: number;
    width: number | string;
    data: ItemT[],
    renderItem: (props: {item: ItemT}) => void,
}

interface RowProps<ItemT> extends ViewProps {
    className?: string,
    style?: {},
}



function Table<ItemT>(props : TableProps<ItemT>){
    
    const {
        className,
        header,
        data,
        renderItem,
        numColumn,
        width,
        ...rest
    } = props; 

    const classes  = classNames(
        className,
    );

    

    return (
        <View style={{width , height : 50 + 32.15 * numColumn}}>
            <View {...rest} className={classes} column width='fill' style={{border:'1px solid black'}}>
                <View style={{height: 50, paddingRight: 15}}>
                        {
                            header.map(
                                (name : string, index: number)=><View className='table-header'>
                                    <span>{name}</span>
                                    </View>
                                
                                )
                        }
                </View>
                        
                <View column style={{overflowY: 'scroll', height: '100%'}}>
                    { 
                        data.map(
                            (item) => renderItem({item})
                        )
                    }
                    { data.length < numColumn ?
                        Array.from(Array(numColumn - data.length)).map(()=><Body>
                            {
                               Array.from(Array(header.length)).map(()=><Row>{}</Row>) 
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
        <View >  
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
        <View className='table-row' style={style} {...rest}>
        {children}
        </View>
    )
}


Table.Body = Body;
Table.Row = Row;
export default Table
