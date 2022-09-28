import React from "react";

import classes from './card.module.css';

const Card = props => {
        return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
        // here the above is used to merge the 2 classes to the components which are applied to a same component but differently
        //{props.children} --> is used to so that all the properties we will be applying here will be given to the all applied inside the- 
        //-Card
};



export default Card;