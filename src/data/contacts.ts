
interface Contact {
    iconUri: string;
    description: string;
    url: string;
}

const contacts: Array<Contact> = [
    {
        iconUri: '/images/github.svg',
        description: 'My repos',
        url: 'https://github.com/R0land013'
    },
    {
        iconUri: '/images/linkedin.svg',
        description: 'Let\'s connect!',
        url: 'https://www.linkedin.com/in/rolando-rio-garaboa-689428214/'
    },
    {
        iconUri: '/images/twitter.svg',
        description: 'See my tweets!',
        url: 'https://twitter.com/r0landorio'
    },
    {
        iconUri: '/images/telegram.svg',
        description: 'Let\'s chat!',
        url: 'https://t.me/r0land01'
    },
];

export default contacts;