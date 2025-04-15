import { useState } from 'react'; // Import the useState hook from React
import HeaderNavigation from './HeaderNavigation'; // Import the HeaderNavigation component
import Appliances from './Appliances'; // Import the Appliances component
import './App.css'; // Import the CSS file for styling

// Define the menu items for the header navigation
const menus = [
  { name: "Appliances", url: "#", id: 1},
  { name: "Groceries", url: "#", id: 2},
  { name: "Gadgets", url: "#", id: 3},
  { name: "Clothing", url: "#", id: 4},
];

// Define the appliances data to be displayed
const appliances = [
  { name: "Union® 1.5 HP Window Type Manual Air Conditioner", url: "https://shop.union.ph/cdn/shop/products/UGAIR-12000_2048x2048.jpg?v=1688622246", quantity: 0, id: 1},
  { name: "Samsung 9.5 kg Laundry Front Load Washer AI Control", url: "https://images.samsung.com/is/image/samsung/p6pim/ph/ww95t654dlh-tc/gallery/ph-front-loading-washer-ww10t654dlhs3-ww95t654dlh-tc-thumb-436378980?$172_172_PNG$", quantity: 0, id: 2},
  { name: "LG OLED77C4PSA", url: "https://cdn-dkdbi.nitrocdn.com/jupGLetWziqcmHluZmAlSGkSfoThRGtQ/assets/images/optimized/rev-1570044/western.com.ph/wp-content/uploads/2024/07/LG_OLED77C4PSA_01.jpg", quantity: 0, id: 3},
  { name: "RHAF3 3.5L RUSSELL HOBBS HEALTHY AIR FRYER", url: "https://www.smappliance.com/cdn/shop/products/RHAF3-1_500x.jpg?v=1640060298", quantity: 0, id: 4},
];

// Main App component
function App() {
  return (
    <>
      {/* Render the HeaderNavigation component with menu data and title */}
      <HeaderNavigation data={menus} title={'Lazado'} />
      
      {/* Render the Appliances component with appliance data */}
      <Appliances data={appliances} val={0}/>
    </>
  );
}

export default App; // Export the App component for use in other parts of the application
