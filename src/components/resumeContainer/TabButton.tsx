
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
                bg-slate-500
                text-white
                ${props.className}
                ${props.isActive ? 'bg-slate-800' : ''}
                
                hover:shadow-sm
                hover:shadow-sky-700
                hover:bg-slate-400`}
            onClick={props.onClick}>
            
            {props.text}
            
        </button>
    );
}

export default TabButton;