
function ProfileAvatar() {
    return (
        <div className="flex flex-col items-center justify-center">
            
            <div className="avatar">
                <div
                    className="w-60 rounded-full bg-sky-100 shadow-xl">
                    <img src="/images/avatar.png" />
                </div>
            </div>

            <h1 className="text-4xl font-bold mt-4 text-center text-black">Rolando Rio Garaboa 🚀</h1>
        </div>

    );
}

export default ProfileAvatar;