import { AiFillGithub } from 'react-icons/ai';
const Footer = ()=>{
    return(
        <footer>
            <div className="flex flex-col items-center py-3" >
            <a className='h-5' target='blank' href="https://github.com/ajomacias">
                <AiFillGithub className='h-full w-full'/>
            </a>
            <p className="text-sm" >anderK222 | 2022</p>
            </div>
        </footer>
    );

}

export { Footer }