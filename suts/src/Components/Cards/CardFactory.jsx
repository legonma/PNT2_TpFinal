import React from "react";
import CardHistory from "./CardHistory";
import CardImage from "./CardImage";
import CardAnswer from "./CardAnswer";

/* ------------ TIPO DE JSON
{
    key: '1A',
    content: {
        history: {
            title:'Esta es la primera historia.',
            text:'lorem ipsum...'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
        answers: [
            {
                text: 'Contestarle al esqueleto',
                siguiente: 1A,
            },
            {
                text: 'Mirar al esqueleto',
                siguiente: 1B,
            }
        ]
    }
}
*/

export default function CardFactory({data}) {
    const {type, history, image, answers} = data;
    switch (type) {
        case 'history':
            return <CardHistory history={history}/>
        case 'image':
            return <CardImage image={image}/>
        case 'answers':
            return <CardAnswer answers={answers}/>
        default:
            return null;
    }
}
