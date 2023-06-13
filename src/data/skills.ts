
interface SkillGroup {
    groupName: string;
    skills: Array<Skill>;
}

interface Skill {
    name: string;
    iconPath: string;
}

const skillGroups: Array<SkillGroup> = [
    {
        groupName: 'Libraries and Frameworks',
        skills: [
            {
                name: 'React',
                iconPath: '/images/react.svg',
            },
            {
                name: 'React Native',
                iconPath: '/images/react-native.svg',
            },
            {
                name: 'Django',
                iconPath: '/images/django.svg',
            },
            {
                name: 'Django REST framework',
                iconPath: '/images/djangorest.svg',
            },
            {
                name: 'PyQt5',
                iconPath: '/images/qt.svg',
            },
            {
                name: 'SQLAlchemy',
                iconPath: '/images/sqlalchemy.svg',
            },
        ]
    },
    {
        groupName: 'Programming Languages',
        skills: [
            {
                name: 'Python',
                iconPath: '/images/python.svg',
            },
            {
                name: 'JavaScript',
                iconPath: '/images/javascript.svg',
            },{
                name: 'TypeScript',
                iconPath: '/images/typescript.svg',
            },{
                name: 'Java',
                iconPath: '/images/java.svg',
            },{
                name: 'C++',
                iconPath: '/images/c-plusplus.svg',
            },
        ]
    },
    {
        groupName: 'Databases',
        skills: [
            {
                name: 'PostgreSQL',
                iconPath: '/images/postgresql.svg',
            },
            {
                name: 'SQLite',
                iconPath: '/images/sqlite.svg',
            },
        ]
    },
];

export default skillGroups;