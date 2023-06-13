import { experience } from "../../data/experience";


export default function ExperienceResume() {
    return (
        <div className="flex flex-col w-full">
            {/* <h2 className="text-3xl font-bold mb-10">Experience</h2> */}

            <ol className="border-l-[3px] border-l-slate-800">
                
                {experience.map((anExperience, index) => (
                    <li
                        key={anExperience.workingPeriod}
                        className={`${index !== 0 ? 'mt-24' : ''}`}>
                        
                        <div className="flex-start flex items-center">
                            <img className="-ml-4 -mt-2 mr-3 flex h-8 w-8 items-center justify-center" src="/images/earth.png"/>
                            <h3 className="-mt-2 text-2xl font-semibold w-5/6 text-black">{anExperience.workName}</h3>
                        </div>
                        
                        <div className="mb-6 ml-6 pb-6 flex flex-col justify-start">
                            
                            <div className="text-sm text-black font-medium mt-2">
                                {anExperience.workingPeriod}
                            </div>

                            <span className="badge bg-slate-600 text-white border-slate-600 font-medium mt-1 mb-7">
                                {anExperience.place}
                            </span>

                            <span className="font-medium text-black">
                                {anExperience.role}
                            </span>

                            <p className="mb-4 mt-2 text-black">
                                {anExperience.description}
                            </p>
                        </div>
                    </li> 
                ))}

                
            </ol>
        </div>
    );
}
