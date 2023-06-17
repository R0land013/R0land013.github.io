import ContactItem from "./ContactItem";
import contacts from '../../data/contacts';

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

                    {contacts.map((contact) => (

                        <ContactItem
                            key={contact.url}
                            iconUrl={contact.iconUri}
                            text={contact.description}
                            contactUrl={contact.url}
                            className="mt-6"/>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default ContactsContainer;