import React from "react"; // Import the React library

// Component for rendering header navigation with buttons
function HeaderNavigation(props) {
    // Extract the menu items from props
    let elements = props.data;

    return (
        <div className="header"> {/* Main header container */}
            <h1>{props.title}</h1> {/* Render the title passed as a prop */}
            <div className="buttons"> {/* Container for navigation buttons */}
                {
                    // Map through the elements array and create a button for each
                    elements.map((element) => {
                        return (
                            <button type="button" key={element.id}>
                                {element.name} {/* Button label */}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default HeaderNavigation; // Export the HeaderNavigation component for use in other parts of the application
