
const ListItemsModal = ({practices}:ListItemsModalProps)=>{
 return(
    <ul className="list-disc p-1 scroll-ander overflow-y-scroll h-full m-1 flex-nowrap " >
            {practices.map(((value, index)=>(
            <li key={index} className="text-gray-500 leading-3 mb-1" >
                <strong>- 
                </strong> 
                {value + value + value + value}
            </li>
          )))}
          </ul>
 );   
}

type ListItemsModalProps = {
    practices : string[]
}

export { ListItemsModal };