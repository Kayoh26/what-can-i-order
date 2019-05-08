//Array of restaurants
const restaurants = [
  {
    name: "Dig Inn - Midtown South",
    address: {
      street:"275 Madison Ave.",
      city: "New York",
      state: "NY",
      zip: 10016,
    }, //end of address
    phone: 2126977867,
    menuItems: [
      {
        name: "Roasted Wild Alaskan Salmon Marketbowl",
        description: "Wild Alaskan Salmon with lemon thyme. Gluten-Free. Farm Greens with Mint (Base), Cashew Kale Caesar (Market side) , Lemon Wedge (Sauce)",
        price: 12.96,
        tags: ["low sodium", "low sugar"]
      },
      {
        name: "Charred Chicken Market Bowl",
        description: "Antibiotic-free chicken thigh with lemon, fennel, and mustard seeds. Gluten-Free. Farm Greens with Mint (Base), Lemon Wedge (Sauce)",
        price: 11.62,
        tags: ["low sodium"]
      },
      {
        name: "Organic Iced Tea",
        description: "Brew Lab organic iced teas",
        price: 2.75,
        tags: ["low sugar"]
      }
    ] //end of menu items
  }, //end of restaurant 1 - Dig Inn - Midtown South
  {
    name: "The Little Beet Table",
    address: {
      street:"333 Park Ave. South",
      city: "New York",
      state: "NY",
      zip: 10010,
    }, //end of address
    phone: 2124663330,
    menuItems: [
      {
        name: "Charred Cauliflower",
        description: "Maitake mushroom, market herbs, apple, almond, green curry",
        price: 22.00,
        tags: ["low sugar"]
      },
      {
        name: "Charred Cauliflower",
        description: "Maitake mushroom, market herbs, apple, almonds, green curry.",
        specialInstructions: "Ask for no almonds",
        price: 22.00,
        tags: ["low potassium"]
      },
      {
        name: "Cauliflower & Mushroom tacos",
        description: "oaxacan mole, red cabbage, black bean, avocado, cilantro ",
        price: 17.00,
        tags: ["low sugar"]
      }
    ] //end of menu items
  }, //end of restaurant 2 - The Little Beet Table
  {
    name: "Natureworks Restaurant - E 31st",
    address: {
      street:"113 East 31st",
      city: "New York",
      state: "NY",
      zip: 10016,
    }, //end of address
    phone: 2127251411,
    menuItems: [
      {
        name: "Tuna & Hummus Wrap",
        description: "A scoop of low-sodium tuna mixed with a scoop of hummus with oil and vinegar in a whole wheat wrap. Comes with Romaine, cucumbers and tomatoes.",
        price: 8.75,
        tags: ["low sugar"]
      }
    ] //end of menu items
  }, //end of restaurant 3 - Natureworks Restaurant - E 31st
  {
    name: "The Dutch",
    address: {
      street:"131 Sullivan Street",
      city: "New York",
      state: "NY",
      zip: 10012,
    }, //end of address
    phone: 2126776200,
    menuItems: [
      {
        name: "Heirloom Cauliflower",
        description: "Features a trio of colorful cauliflower (white, purple, marigold), which are roasted in brown butter and sage until the floret coats turn a golden-brown. The cauliflower is also tossed with juice from the pickled pears to add a little more zing, and for crunch",
        price: 9.00,
        tags: ["low potassium"]
      }
    ] //end of menu items
  }, //end of restaurant 4 - The Dutch
  {
    name: "Allora",
    address: {
      street:"145 East 47th Street",
      city: "New York",
      state: "NY",
      zip: 10017,
    }, //end of address
    phone: 2127549800,
    menuItems: [
      {
        name: "Hot Steel Cut Oatmeal",
        description: "Walnuts, diced apples, berries and brown sugar.",
        specialInstructions:"No Walnuts",
        price: 10.00,
        tags: ["low potassium"]
      },
      {
        name: "Build your own Omelette",
        description: "Egg whites, onions, peppers, rye toast and side fresh fruit",
        price: 14.00,
        tags: ["low potassium"]
      },
      {
        name: "Pollo Scarpariello",
        description: "Chicken sauteed with garlic, lemon and white wine.",
        price: 26.00,
        tags: ["low potassium"]
      }
    ] //end of menu items
  }, //end of restaurant 5 - Allora
  {
    name: "Gallagher Steakhouse",
    address: {
      street:"228 West 52nd Street",
      city: "New York",
      state: "NY",
      zip: 10019,
    }, //end of address
    phone: 2125865000,
    menuItems: [
      {
        name: "Green Salad",
        description: "Granny Smith apple, Manchego, radish, almonds",
        price: 12.00,
        tags: ["low potassium"]
      },
      {
        name: "Bone-In Sirlion",
        description: "Grilled over hickory logs.",
        specialInstructions: "Ask for no almonds",
        price: 42.00,
        tags: ["low potassium"]
      },
      {
        name: "Steamed Green Beans",
        description: "",
        price: 12.00,
        tags: ["low potassium"]
      }
    ] //end of menu items
  }, //end of restaurant 6 - Gallagher Steakhouse
  {
    name: "Avant Garden - East Village",
    address: {
      street:"130 E 7th St.",
      city: "New York",
      state: "NY",
      zip: 10009,
    }, //end of address
    phone: 6469227948,
    menuItems: [
      {
        name: "Scorched Cauliflower",
        description: "toasted garlic, fried capers, cauliflower puree.",
        price: 18.00,
        tags: ["low potassium"]
      }
    ] //end of menu items
  }, //end of restaurant 7 - Avant Garden - East Village
  {
    name: "Adelina's",
    address: {
      street:"159 Greenpoint Ave",
      city: "Brooklyn",
      state: "NY",
      zip: 11222,
    }, //end of address
    phone: 3477630152,
    menuItems: [
      {
        name: "Arugula Salad",
        description: "with apple, celery and pistacchio",
        price: 13.00,
        tags: ["low potassium","low sugar"]
      },
      {
        name: "Melanzane alla Parmigiana",
        description: "with saffron fonduta & basil breadcrumbs.",
        price: 19.00,
        tags: ["low potassium", "low sugar"]
      }
    ] //end of menu items
  }, //end of restaurant 8 - Adelina's
];

$(function() {
  console.log("Ready!");

  // print restaurant array to console.
  console.log(restaurants);

  //print tags from restaurant
  let restaurantTags = [];

  let userRestriction = "low sodium";
  // restaurantTags =  restaurants[0].menuItems[0].tags;
  // console.log(restaurantTags);

  //iterate through the restaurants array of objects
  //Get array of tags
  $.each(restaurants,function (index,value) {
    console.log(value.name, value.menuItems);
    console.log('Is menuItems an array?:',$.isArray(value.menuItems));
    //Iterate through menuItems array of objects
    $.each(value.menuItems, function (index2,value2) {
      console.log(index2, value2.tags);
      console.log($.isArray(value2.tags));
      //Iterate through tags array of menu item
      $.each(value2.tags,function (index3,value3) {
        console.log("Menu item Tag: " ,value3);
        console.log("userRestriction: ", userRestriction)
        console.log("Item tag and user restriction match =" , value3 === userRestriction);
        console.log("Restaurant Name:", value.name);
      });
    });
  });

  //Set up an empty array that will store the selected diet restrictions
  let selectedRestrictions = [];

  //Display list of restaurants to the landing page.
  $.each(restaurants, function(index,value){
    // console.log("index:", index);
    // console.log("restaurant name:", value.name);
    // console.log("restaurant address:", value.address.street);
    $(".restaurant-list ul").append(`<li><a href="resultspage.html">${value.name}</a></li>`);
  });

  //Function that will remove a dash from the string passed through.
  function removeHyphen(string) {
    return string.replace(/-/g," ");
  }

  //Listen for a click on the search button and call function handle
  //handleFilter to handle the filter.
  $(".search-button").click(handleFilter);

  //Fucntion to handle filters that were selected by user.
  function handleFilter (){
    // console.log("clicked filter");
    //For each checkbox that is selected, store it's id in the
    //selectedRestrictions array.
    $(".checkbox:checked").each(function(index, checkbox) {
      selectedRestrictions.push(removeHyphen(checkbox.id));
    });
  };




});
