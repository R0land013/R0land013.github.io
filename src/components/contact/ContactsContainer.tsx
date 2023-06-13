import ContactItem from "./ContactItem";

interface ContactsContainerProps {
    className?: string;
}

function ContactsContainer(props: ContactsContainerProps) {
    return (
        
        <div className={`card bg-white shadow-xl pr-6 pl-6 ${props.className ?? ''}`}>
            <div
            className="flex flex-col items-center justify-center card-body">

                <div className="text-2xl font-medium text-black">Contact Info</div>

                <div className="flex flex-col justify-start items-start mt-5">

                    <ContactItem
                        iconUrl="/src/assets/twitter.svg"
                        text="See my tweets!"
                        contactUrl="https://twitter.com/r0landorio"/>

                    <ContactItem
                        iconUrl="/src/assets/github.svg"
                        text="My repos"
                        contactUrl="https://github.com/R0land013"
                        className="mt-6"/>
                    
                    <ContactItem
                        iconUrl="/src/assets/telegram.svg"
                        text="Let's chat!"
                        contactUrl="https://t.me/r0land01"
                        className="mt-6"/>

                </div>
            </div>
        </div>
    );
}

export default ContactsContainer;