import React, { useState } from "react";

// Component for displaying a list of appliances
function Appliances(props) {
    let elements = props.data; // Retrieve appliance data passed as props 
    const [count, setCount] = useState(props.val); // tracks the current number of items in cart
    const [pushcart, setItems] = useState([]); // contains the array of items in cart

    // Function to handle adding an item to the cart
    function addToCart(element) {
        setItems((items) => {
            const newCart = [...items];
            // find the index of existing item
            const existingItemIndex = newCart.findIndex(item => item.id === element.id);
            // if element is already in the cart 
            if (existingItemIndex !== -1){
                newCart[existingItemIndex] = {
                    ...newCart[existingItemIndex], 
                    quantity: newCart[existingItemIndex].quantity + 1
                };
            } else { // if item is not yet in the cart
                newCart.push({...element, quantity: 1});
            }
            return newCart;
        });
        console.log("Added " + element.name + " to the cart!"); // Log the item added to the cart
        setCount(count+1);
    }

    function deleteItem(element) {
        setItems((items) => {
            const newCart = [...items];
            // checks index of the element in pushcarts array
            let todel_index = newCart.findIndex(item => item.id === element.id);
            // create new object with the same details but updated quantity
            newCart[todel_index] = {...newCart[todel_index], quantity: newCart[todel_index].quantity - 1};
            if (newCart[todel_index].quantity == 0){
                newCart.splice(todel_index, 1);
            }
            return newCart;
        });
        console.log("Deleted " + element.name + " from the cart!"); // Log the item deleted from the cart
        setCount(count-1);
    }

    // Function to create a card for each appliance
    function createCard(element) {
        // Create a div card for the given appliance element
        return (
            <div key={element.id} className="appliances_card">
                <img src={element.url} className="appliance-image" alt={element.name} /> {/* Appliance image */}
                <h3 className='appliance-name'>{element.name}</h3> {/* Appliance name */}
                {/* Button to add the appliance to the cart; uses an arrow function to handle click */}
                <button className="add-button" onClick={() => addToCart(element)}>
                    Add to Cart
                </button>
            </div>
        );
    }

    // Function to create a card for each appliance
    function createShoppingCard(element) {
        // Create a div card for the given appliance element
        return (
            <div key={element.id} className="shoppingcart_card">
                <h3>{element.name}</h3> {/* Appliance name */}
                <p>QTY: {element.quantity}</p> {/* Quantity of item */}
                {/* Button to remove the appliance from the cart; uses an arrow function to handle click */}
                <button className="add-button" onClick={() => deleteItem(element)}>
                    X
                </button>
            </div>
        );
    }

    return (
        <div className="flex-container">
            <div className="appliances">
                {
                    // Map through the elements array and create a card for each appliance
                    elements.map((element) => {
                        return createCard(element); // Call createCard for each appliance
                    })
                }
            </div>
            <div className="shopping_cart">
                <p>Shopping cart (Total: {count})</p>
                {
                    // Map through the elements array and create a card for each appliance
                    pushcart.map((item) => {
                        return createShoppingCard(item); // Call createCard for each appliance
                    })
                }
            </div>
        </div >
    );
}

export default Appliances; // Export the Appliances component for use in other parts of the application
