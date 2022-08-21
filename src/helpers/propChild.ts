import { ReactNode } from 'react';

type Props = {
    children : ReactNode;
}

type PropsSkill = {
    setSkillId : React.Dispatch<React.SetStateAction<string>>
}

type AboutSkill = {
    skillId : string;
    name : string;
    experience : string[];
}


export type { Props, PropsSkill, AboutSkill }; 