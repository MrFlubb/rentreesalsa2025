// Mock data for Salsa Flubb' website
const salsaClasses = [
    {
        id: 1,
        day: 'Lundi',
        venue: 'Manzanillo Libre',
        address: '42 avenue Georges Clémenceau, 34070 Montpellier',
        coordinates: [43.6109, 3.8763],
        classes: [
            { level: 'Débutant', time: '20h30' },
            { level: 'Intermédiaire', time: '21h30' }
        ]
    },
    {
        id: 2,
        day: 'Mardi',
        venue: "O' Studio",
        address: '37 route de Montpellier, Frontignan',
        coordinates: [43.4489, 3.7558],
        classes: [
            { level: 'Débutant', time: '19h30' },
            { level: 'Intermédiaire', time: '20h30' }
        ]
    },
    {
        id: 3,
        day: 'Mercredi',
        venue: 'Dévezou',
        address: 'Chemin des Tennis, Montferrier sur Lez',
        coordinates: [43.6705, 3.8607],
        classes: [
            { level: 'Débutant & Inter', time: '12h00' },
            { level: 'Avancé', time: '13h00' }
        ]
    },
    {
        id: 4,
        day: 'Mercredi',
        venue: 'Dévezou',
        address: 'Chemin des Tennis, Montferrier sur Lez',
        coordinates: [43.6705, 3.8607],
        classes: [
            { level: 'Débutant', time: '19h30' },
            { level: 'Intermédiaire', time: '20h30' }
        ]
    }
];

const testimonials = {
    videos: [
        {
            id: 1,
            title: 'Témoignage de Sarah - 2 ans de cours',
            youtubeId: 'dQw4w9WgXcQ',
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
        },
        {
            id: 2,
            title: 'Témoignage de Marc - Progression incroyable',
            youtubeId: 'dQw4w9WgXcQ',
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
        }
    ]
};

const aboutContent = {
    title: 'Qui suis-je ?',
    content: `Passionné de salsa cubaine depuis plus de 10 ans, je vous accompagne dans l'apprentissage de cette danse magnifique qui allie technique, passion et convivialité.

Formé à Cuba et en Europe, j'ai développé une pédagogie adaptée à tous les niveaux, du débutant complet au danseur confirmé. Mon approche privilégie le plaisir de danser tout en respectant l'authenticité de la salsa cubaine.

Rejoignez-moi pour découvrir l'univers chaleureux de la salsa dans une ambiance détendue et bienveillante !`,
    image: 'https://images.unsplash.com/photo-1654787616600-59ce4b023edf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjdWJhbiUyMHNhbHNhJTIwZGFuY2luZ3xlbnwwfHx8b3JhbmdlfDE3NTIyNzgxMzN8MA&ixlib=rb-4.1.0&q=85'
};

const contactInfo = {
    email: 'aurelien@salsa-flubb.com',
    phone: '+33 6 XX XX XX XX',
    socialMedia: {
        facebook: 'https://facebook.com/salsaflubb',
        instagram: 'https://instagram.com/salsaflubb'
    }
};