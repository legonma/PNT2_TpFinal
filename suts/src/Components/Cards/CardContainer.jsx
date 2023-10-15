import React from "react";
import CardBase from "./CardBase";
import './CardContainer.css';
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

export default function CardContainer({data}) {
    const {history, image, answers} = data.content;
    
    return(
        <div className="CardContainer">
            <CardBase data={{type: 'history', history}} delay={1000}/>
            <CardBase data={{type: 'image', image}} delay={3000}/>
{/*             <CardBase data={{type: 'answers', answers}}/> */}
        </div>
    )
}
