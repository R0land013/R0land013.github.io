
function ProfileAvatar() {
    return (
        <div className="flex flex-col items-center justify-center">
            
            <div className="avatar">
                <div
                    className="w-60 rounded-full">
                    <img src="/src/assets/avatar.jpeg" />
                </div>
            </div>

            <h1 className="text-4xl font-bold mt-2">Rolando Rio Garaboa 🚀</h1>
        </div>

    );
}

export default ProfileAvatar;