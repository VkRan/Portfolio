import css1 from '../img/portImages/css1.jpg';
import css2 from '../img/portImages/css2.jpg';
import js1 from '../img/portImages/js1.jpg';
import js2 from '../img/portImages/js2.jpg';
import js3 from '../img/portImages/js3.jpg';
import js4 from '../img/portImages/js4.jpg';
import react1 from '../img/portImages/react1.jpg';
import mern1 from '../img/portImages/mern1.jpg';

const portfolios = [
    {
        id: 1,
        category: 'Backend',
        image: mern1,
        link1: 'https://todolist-vikalp.herokuapp.com/',
        link2: '',
        title: 'To-Do List',
        text: 'Helps in managing your tasks in everyday life'
    },
    {
        id: 2,
        category: 'React',
        image: react1,
        link1: 'https://ristorante-da-vinci.netlify.app/',
        link2: '',
        title: 'Ristorante-da-Vinci',
        text: 'Sample restaurant website'
    },
    {
        id: 3,
        category: 'JavaScript',
        image: js3,
        link1: 'https://vkran.github.io/Graph-Calculator/',
        link2: 'https://github.com/VkRan/Graph-Calculator',
        title: 'SignalX',
        text: 'Draw graphs of mathematical functions'
    },
    {
        id: 4,
        category: 'CSS',
        image: css1,
        link1: 'https://vkran.github.io/TSF-Project/',
        link2: 'https://github.com/VkRan/TSF-Project',
        title: 'Donation Page',
        text: 'Sample Payment Gateway website'
    },
    {
        id: 5,
        category: 'JSON-API',
        image: js2,
        link1: 'https://vkran.github.io/COVID-PROJ/',
        link2: 'https://github.com/VkRan/COVID-PROJ',
        title: 'Covid Tracker',
        text: 'Check live stats of Coronavirus in India'
    },
    {
        id: 6,
        category: 'JavaScript',
        image: js4,
        link1: 'https://drumms.netlify.app/',
        link2: '',
        title: 'Drum Kit',
        text: 'A fun website to play the drums'
    },
    {
        id: 7,
        category: 'CSS',
        image: css2,
        link1: 'https://cuteaing.netlify.app/',
        link2: '',
        title: 'Cuteaing Cafe',
        text: 'Sample Landing Page'
    },
    {
        id: 8,
        category: 'JavaScript',
        image: js1,
        link1: 'https://vkran.github.io/calculator/',
        link2: 'https://github.com/VkRan/calculator',
        title: 'Calculator',
        text: 'Normal calculator'
    }
]

export default portfolios;