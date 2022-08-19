import { useState, createContext, ReactNode, useContext} from 'react';
import { Props } from '../helpers/propChild';

const modalContext = createContext<ModalContextType >({});
const useModal =()=> useContext(modalContext);

const ModalProvider = ({children} : Props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = ()=>{
        if(isOpen) setIsOpen(false);
    }
    const openModal = ()=>{
        if(!isOpen) setIsOpen(true);
    }

    return(
        <modalContext.Provider value={

            {
                openModal,
                closeModal,
                isOpen
            }
        } >
            {children}
            </modalContext.Provider >
    );
    
}

type ModalContextType ={
    closeModal? : Function
    openModal? :  Function,
    isOpen? : boolean
}

export {ModalProvider, useModal};