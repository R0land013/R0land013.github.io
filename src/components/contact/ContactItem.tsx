
interface ContactItemProps {
    iconUrl: string;
    text: string;
    contactUrl: string;
    className?: string;
}

function ContactItem(props: ContactItemProps) {
    return (
        <a href={props.contactUrl} className="text-current hover:no-underline">
            <div className={`${contactItemClassName} ${props.className ?? ''}` }>
                <img src={props.iconUrl} className="w-8"/>
                <div className="text-lg font-medium ml-4">{props.text}</div>
            </div>
        </a>
    );
}

const contactItemClassName = `
    flex
    flex-row
    justify-center
    items-center

    hover:scale-110
`;

export default ContactItem;