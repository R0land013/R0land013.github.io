import { experience } from "../../data/experience";


export default function ExperienceResume() {
    return (
        <div className="flex flex-col w-full">
            {/* <h2 className="text-3xl font-bold mb-10">Experience</h2> */}

            <ol className="border-l-[3px] border-l-sky-600">
                
                {experience.map((anExperience, index) => (
                    <li
                        key={anExperience.workingPeriod}
                        className={`${index !== 0 ? 'mt-24' : ''}`}>
                        
                        <div className="flex-start flex items-center">
                            <div className="-ml-3 -mt-2 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600"></div>
                            <h3 className="-mt-2 text-2xl font-semibold w-5/6">{anExperience.workName}</h3>
                        </div>
                        
                        <div className="mb-6 ml-6 pb-6 flex flex-col justify-start">
                            
                            <div className="text-sm text-sky-600 font-medium mt-2">
                                {anExperience.workingPeriod}
                            </div>

                            <span className="badge bg-sky-300 text-sky-950 border-sky-300 font-medium mt-1 mb-7">
                                {anExperience.place}
                            </span>

                            <span className="font-medium">
                                {anExperience.role}
                            </span>

                            <p className="mb-4 mt-2">
                                {anExperience.description}
                            </p>
                        </div>
                    </li> 
                ))}

                
            </ol>
        </div>
    );
}
