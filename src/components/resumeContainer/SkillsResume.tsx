import skillGroups from "../../data/skills";

export default function SkillsResume() {
    return (
        <div className="felx flex-col w-full justify-start">

            {skillGroups.map((group, index) => (
                
                <div className={`felx flex-col w-full justify-start ${index !== 0 ? 'mt-20' : ''}`} key={group.groupName}>
                    
                    <h3 className="text-2xl font-semibold">{group.groupName}</h3>
                    
                    <div className="flex flex-row flex-wrap ">
                        {group.skills.map(skill => (
                            <div className="flex flex-row items-center mr-7 mt-5" key={skill.name}>
                                <img src={skill.iconPath} className="w-10 mr-1"/>
                                <span className="text-sky-950 text-xl">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                </div>
            ))}

            
        </div>
    );
}
