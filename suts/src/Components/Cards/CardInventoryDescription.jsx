import React from "react";
import { useEffect , useState} from "react";
import './CardInventoryDescription.css';

export default function CardInventoryDescription({item}) {
    const [inventoryContainer, setinventoryContainer] = useState([])
    
    useEffect(() => {
        let content = [];
        if (Object.keys(item).length) {
            const {text, imgDesc, title} = item.item;
            debugger;
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
