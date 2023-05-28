import TabButton from "./TabButton";

interface CategoryTabContainer {
    selectedCategory: ResumeCategory;
    onSelectedNewCategory: (category: ResumeCategory) => void;
}

export type ResumeCategory = 'Experience' | 'Skills' | 'Products';

const categories: Array<ResumeCategory> = ['Experience', 'Skills', 'Products'];

export default function CategoryTabContainer(props: CategoryTabContainer) {
    
    const callOnSelectedNewCategoryIfNeeded = (clickedCategory: ResumeCategory) => {
        if(props.selectedCategory !== clickedCategory) {
            props.onSelectedNewCategory(clickedCategory);
        }
    };

    return (
        <div className="tabs tabs-boxed bg-transparent flex flex-row justify-start">
            {categories.map((aCategory) => {
                return (
                    <TabButton
                        key={aCategory}
                        text={aCategory}
                        isActive={aCategory === props.selectedCategory}
                        onClick={() => callOnSelectedNewCategoryIfNeeded(aCategory)}
                        className="mr-4"/>
                );
            })}
        </div>
    );
}
