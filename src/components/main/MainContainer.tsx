import ContactsContainer from "../contact/ContactsContainer";
import ResumeContainer from "../resumeContainer/ResumeContainer";

function MainContainer() {
    return (
        <div className={mainContainerClassName}>
            
            <div className="card bg-sky-100 shadow-xl">
                
                <div className="card-body">
                    <p className='text-2xl'>
                        Hi there 👋. I am Rolando Rio Garaboa, an Informatics Engineer
                        that loves programming and learning about anything that it is
                        interesting in this world 🌎. If you are interested in knowning
                        more about me, here you have a resume 👇.
                    </p>
                </div>
            </div>

            <ResumeContainer className="mt-20 mb-20"/>

            <ContactsContainer
                className="block lg:hidden"/>
        </div>
    );
}

const mainContainerClassName = `
    flex
    flex-col
    justify-around
    h-full
    mt-12
    pb-5
    
    w-full
    pl-5
    pr-5
`;

export default MainContainer;