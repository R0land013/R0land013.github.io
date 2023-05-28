
interface TabButtonProps {
    text: string;
    isActive?: boolean;
    className?: string;
    onClick?: () => void;
}


function TabButton(props: TabButtonProps) {
    return (
        <button
            className={`
                tab
                text-xl
                bg-sky-400
                text-white
                ${props.className}
                ${props.isActive ? 'bg-sky-700' : ''}
                
                hover:shadow-sm
                hover:shadow-sky-700
                hover:bg-sky-500`}
            onClick={props.onClick}>
            
            {props.text}
            
        </button>
    );
}

export default TabButton;