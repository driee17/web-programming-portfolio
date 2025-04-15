const foodList = document.getElementsByClassName("favorite-foods");
const rankArray = [];

const foodForm = document.getElementById("food-form");
const addFood = () => {
  const form = document.getElementById("food-form");
  const name = form.elements["food-name"].value;
  const description = form.elements["food-description"].value;
  const imageURL = form.elements["image-url"].value;
  const rank = form.elements["rank"].value;

  // creates div to contain new food
  const newFood = document.createElement("div");
  newFood.className = "food";
  newFood.id = "food" + rank;
  if (document.getElementById(newFood.id) !== null) {
    alert(
      "Rank already taken by another food. Please delete the existing food first before adding."
    );
    return;
  }

  // for image
  const foodImg = document.createElement("img");
  foodImg.className = "food-image";
  foodImg.src = imageURL;
  foodImg.alt = "Food";
  newFood.appendChild(foodImg);

  // for name
  const foodName = document.createElement("h3");
  foodName.className = "food-name";
  foodName.innerText = name;
  newFood.appendChild(foodName);

  // for description
  const foodDesc = document.createElement("p");
  foodDesc.className = "food-info";
  foodDesc.innerText = description;
  newFood.appendChild(foodDesc);

  // for button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Food";
  deleteButton.setAttribute("onclick", "deleteFood('" + newFood.id + "')");
  newFood.appendChild(deleteButton);

  // tracks the current index to place the food card based on rank
  var insertRankindex = 0;
  for (let i = 0; i < rankArray.length; i++) {
    if (parseInt(rank) < rankArray[i]) {
      // checks if the rank of the new card is lower than the current cards
      rankArray.splice(i, 0, parseInt(rank));
      insertRankindex = i;
      break;
    } else if (i == rankArray.length - 1) {
      // if the loop reaches the end of the array (the new card has the largest rank)
      rankArray.push(parseInt(rank));
      insertRankindex = i + 1;
      break;
    }
  }
  if (rankArray.length == 0) {
    // if there is no food card yet
    rankArray.push(parseInt(rank));
    foodList[0].appendChild(newFood);
  } else {
    // inserts food card depending on the rank
    foodList[0].insertBefore(newFood, foodList[0].childNodes[insertRankindex]);
  }

  form.reset();
};

foodForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addFood();
});

// for deleting a food card
const deleteFood = (id) => {
  const foodtoDel = document.getElementById(id);
  foodtoDel.parentNode.removeChild(foodtoDel);
};
