export default function TabButton({children, isSelected, ...props}){
 
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>
                {children}
            </button>
        </li>
    )
}

// con '...props' passiamo l'interazione per cambiare il topic SELEZIONATO --> prima era onclick={onSelect} 
//cambiando ovviamente in App.jsx da onSelect={()=>handleSelect('xxx')} ==> onClick={()=>handleSelect('xxx')}