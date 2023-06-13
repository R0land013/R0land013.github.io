import CategoryTabContainer from "./CategoryTabContainer";
import {useState} from 'react';
import { ResumeCategory } from './CategoryTabContainer';
import ExperienceResume from "./ExperienceResume";
import SkillsResume from "./SkillsResume";
import ProductsResume from "./ProductsResume";

interface ResumeContainerProps {
    className?: string;
}


function ResumeContainer(props: ResumeContainerProps) {
    
    const [selectedCategory, setSelectedCategory] = useState<ResumeCategory>('Experience');
    
    return (
        <div className={`w-full ${props.className}`}>
            
            <CategoryTabContainer
                selectedCategory={selectedCategory}
                onSelectedNewCategory={(newCategory) => setSelectedCategory(newCategory)}/>

            <div className="card bg-white shadow-xl mt-3">
                <div
                className="flex flex-col items-center justify-start card-body text-2xl">
                    
                    {
                        selectedCategory === 'Experience' ?
                        <ExperienceResume/> :

                        selectedCategory === 'Skills' ?
                        <SkillsResume/> :

                        selectedCategory === 'Products' ?
                        <ProductsResume/> : null
                    }

                </div>
            </div>
        
        </div>
    );
}

export default ResumeContainer;