import React from "react";
import { useContext } from "react";
import { useEffect , useState} from "react";
import './CardInventoryDescription.css';
import { CardContext } from "./Context/CardContext";

export default function CardInventoryDescription() {
    const [inventoryContainer, setinventoryContainer] = useState([])
    const {item} = useContext(CardContext);
    
    useEffect(() => {
        let content = [];
        if (Object.keys(item).length) {
            const {text, imgDesc, title} = item.item;
            content.push(
            <div key="content" className='Content'>
                <img key="image" src={imgDesc}/>
                <h1 key="title">{title}</h1>
                <p key="text">{text}</p>
            </div>)
        } else {
            content.push(<div className="Empty" key="error">error</div>)
        }
        setinventoryContainer(content)
    }, [item])

    return(
        <div className='CardInventoryDescription'>{inventoryContainer}
        </div>
    );
}
