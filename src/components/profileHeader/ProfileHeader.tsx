import ProfileAvatar from "../profileAvatar/ProfileAvatar";


function ProfileHeader() {
    return (
        <div className='w-full flex portrait:flex-col landscape:flex-row mt-5 justify-around items-center'>
            <ProfileAvatar/>

            <p className='text-2xl w-6/12 h-1/2 portrait:mt-11'>
                Hi there 👋. I am Rolando Rio Garaboa, an Informatics Engineer
                that loves programming and learning about anything that it is
                interesting in this world 🌎. if you are interested in knowning
                more about me here you have a resume 👇.
            </p>
        </div>
    );
}

export default ProfileHeader;