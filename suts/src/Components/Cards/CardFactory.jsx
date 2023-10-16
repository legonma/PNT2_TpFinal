import React from "react";
import CardHistory from "./CardHistory";
import CardImage from "./CardImage";
import CardAnswer from "./CardAnswer";

export default function CardFactory({data}) {
    const {type, history, image, answers, handler} = data;
    switch (type) {
        case 'history':
            return <CardHistory history={history}/>
        case 'image':
            return <CardImage image={image}/>
        case 'answers':
            return <CardAnswer answers={answers} handler = {handler}/>
        default:
            return null;
    }
}
