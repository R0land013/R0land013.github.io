import ContactsContainer from "../contact/ContactsContainer";
import ProfileAvatar from "../profileAvatar/ProfileAvatar";


function LeftBar() {
    return (
        <div className={leftBarClassName}>
            <ProfileAvatar/>

            <ContactsContainer className="mt-20 hidden lg:block"/>
        </div>
    );
}

const leftBarClassName = `
    flex
    flex-col
    items-center
    lg:w-2/6
`;

export default LeftBar;