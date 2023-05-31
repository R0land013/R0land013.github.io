
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
                iconPath: '/src/assets/react.svg',
            },
            {
                name: 'React Native',
                iconPath: '/src/assets/react-native.svg',
            },
            {
                name: 'Django',
                iconPath: '/src/assets/django.svg',
            },
            {
                name: 'Django REST framework',
                iconPath: '/src/assets/djangorest.svg',
            },
            {
                name: 'PyQt5',
                iconPath: '/src/assets/qt.svg',
            },
            {
                name: 'SQLAlchemy',
                iconPath: '/src/assets/sqlalchemy.svg',
            },
        ]
    },
    {
        groupName: 'Programming Languages',
        skills: [
            {
                name: 'Python',
                iconPath: '/src/assets/python.svg',
            },
            {
                name: 'JavaScript',
                iconPath: '/src/assets/javascript.svg',
            },{
                name: 'TypeScript',
                iconPath: '/src/assets/typescript.svg',
            },{
                name: 'Java',
                iconPath: '/src/assets/java.svg',
            },{
                name: 'C++',
                iconPath: '/src/assets/c-plusplus.svg',
            },
        ]
    },
    {
        groupName: 'Databases',
        skills: [
            {
                name: 'PostgreSQL',
                iconPath: '/src/assets/postgresql.svg',
            },
            {
                name: 'SQLite',
                iconPath: '/src/assets/sqlite.svg',
            },
        ]
    },
];

export default skillGroups;