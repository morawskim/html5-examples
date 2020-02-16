import React from 'react';
import {useConfirmation} from "./confirmationService";

const Card: React.FC< {id: number} > = (props) => {
    const confirm = useConfirmation();

    const openConfirmation = () => {
        confirm({
            message: `You open confirmation for ${props.id}`,
            catchOnCancel: true,
        }).then(() => alert(`You click ok card #${props.id}`), () => alert(`You click cancel card #${props.id}`));
    };

    return (
        <div>
            <h3>Card #{props.id}</h3>
            <button onClick={openConfirmation}>Open confirmation</button>
        </div>
    );
};

export default Card;