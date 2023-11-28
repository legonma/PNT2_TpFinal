import React from "react";
import CardHistory from "./CardHistory";
import CardImage from "./CardImage";
import CardAnswer from "./CardAnswer";
import CardLogin from "./CardLogin";
import CardInventory from "./CardInventory";
import CardSettings from "./CardSettings";
import CardInventoryDescription from "./CardInventoryDescription";

export default function CardFactory({data}) {
    const {type, history, image, filteredAnswers, handler, handlerInvent, handlerLogin, handlerAudio, login, user} = data;
    switch (type) {
        case 'history':
            return <CardHistory history={history} handler= {handlerAudio}/>
        case 'image':
            return <CardImage image={image}/>
        case 'answers':
            return <CardAnswer answers={filteredAnswers} handler = {handler} user={user}/>
        case 'login':
            return <CardLogin login={login} handler= {handlerLogin}/>
        case 'settings':
            return <CardSettings/>
        case 'inventory':
            return <CardInventory handler = {handlerInvent} handlerAnswer = {handler} user={user}/>
        case 'inventoryDescription':
            return <CardInventoryDescription handler = {handlerInvent}/>
        default:
            return null// aca va el default es la carta;
    }
}
