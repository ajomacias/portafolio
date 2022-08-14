import { AiFillGithub } from 'react-icons/ai';
const Footer = ()=>{
    return(
        <footer>
            <div className="flex flex-col items-center py-6 bg-gradient-to-l from-violet-800 to-emerald-600" >
            <a target='blank' href="https://github.com/ajomacias">
                <AiFillGithub/>
            </a>
            <p className="text-sm" >anderK222 | 2022</p>
            </div>
        </footer>

    );

}

export { Footer }