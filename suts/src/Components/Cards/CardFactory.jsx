import React from "react";
import CardHistory from "./CardHistory";
import CardImage from "./CardImage";
import CardAnswer from "./CardAnswer";
import CardLogin from "./CardLogin";
import CardInventory from "./CardInventory";
import CardSettings from "./CardSettings";

export default function CardFactory({data}) {
    const {type, history, image, answers, handler, handlerInvent, login} = data;
    switch (type) {
        case 'history':
            return <CardHistory history={history}/>
        case 'image':
            return <CardImage image={image}/>
        case 'answers':
            return <CardAnswer answers={answers} handler = {handler}/>
        case 'login':
            return <CardLogin login={login}/>
        case 'settings':
            return <CardSettings/>
        case 'inventory':
            return <CardInventory handler = {handlerInvent}/>
/*         case 'inventoryDescription':
            return <CardInventoryDescription handler = {handlerInvent}/>
 */        default:
            return null// aca va el default es la carta;
    }
}
