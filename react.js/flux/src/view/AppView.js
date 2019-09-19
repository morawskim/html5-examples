import React from 'react';
import NewGroceryItem from "../components/newGroceryItem/NewGroceryItem";
import GroceryList from "../components/groceryList/GroceryList";

 function AppView(props) {
        return (<>
            <NewGroceryItem  {...props} />
            <GroceryList {...props}  />,
        </>);
}

export default AppView;