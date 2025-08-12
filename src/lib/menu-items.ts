import { SectionID } from "./menu";

export type MenuOption = {
  name: string;
  price: number;
};

export type MenuItem = {
  image?: string;
  name: string;
  rating?: number;
  tag?: string;
  description?: string;
  options: MenuOption[];
};

export const menuItems: Record<SectionID, MenuItem[]> = {
  "beef-burgers": [
    {
      name: "Blaze Classic",
      rating: 4.8,
      tag: "Best Seller",
      image: "/classic.png",
      description:
        "Signature beef burger with lettuce, tomato, and our special sauce.",
      options: [
        { name: "Single", price: 11.99 },
        { name: "Combo", price: 17.99 },
      ],
    },
    {
      name: "Cheeseburger",
      image: "/cheeseburger.png",
      rating: 4.5,
      description:
        "Juicy beef patty topped with melted cheese on a soft bun.",
      options: [
        { name: "Single", price: 12.99 },
        { name: "Combo", price: 18.99 },
      ],
    },
    {
      name: "Double Blaze Burger",
      image: "/double-burger.png",
      rating: 4.7,
      description:
        "Two flame-grilled patties layered with cheese and house sauce.",
      options: [
        { name: "Single", price: 18.99 },
        { name: "Combo", price: 24.99 },
      ],
    },
    {
      name: "Triple Blaze Burger",
      image: "/double-burger.png",
      rating: 4.6,
      description:
        "Three flame-grilled beef patties stacked with cheese and lettuce.",
      options: [
        { name: "Single", price: 21.99 },
        { name: "Combo", price: 27.99 },
      ],
    },
    {
      name: "Blaze Cheesy Burger",
      image: "/cheesy-burger.png",
      rating: 4.5,
      description:
        "Beef patty topped with extra melted cheese and our signature sauce.",
      options: [
        { name: "Single", price: 13.99 },
        { name: "Combo", price: 19.99 },
      ],
    },
  ],
  "chicken-burgers": [
    {
      name: "Crispy Chicken Burger",
      tag: "Best Seller",
      image: "/crispy-chicken.png",
      rating: 4.5,
      description:
        "Golden fried chicken breast with lettuce and mayo.",
      options: [
        { name: "Single", price: 12.99 },
        { name: "Combo", price: 18.99 },
      ],
    },
    {
      name: "Nashville Chicken Burger",
      image: "/nashville.png",
      rating: 4.7,
      description:
        "Spicy Nashville-style chicken breast served with pickles.",
      options: [
        { name: "Single", price: 11.99 },
        { name: "Combo", price: 17.99 },
      ],
    },
    {
      name: "Grilled Chicken Burger",
      image: "/grilled-chicken.png",
      rating: 4.2,
      description:
        "Tender grilled chicken breast with fresh lettuce and tomato.",
      options: [
        { name: "Single", price: 11.99 },
        { name: "Combo", price: 17.99 },
      ],
    },
  ],
  "veggie-burgers": [
    {
      name: "Veggie Burger",
      image: "/veggie-burger.png",
      tag: "Popular",
      rating: 4.5,
      description:
        "Grilled vegetable patty served with house-made sauce.",
      options: [
        { name: "Single", price: 11.99 },
        { name: "Combo", price: 17.99 },
      ],
    },
  ],
  fries: [
    {
      name: "Fresh Cut Fries",
      image: "/fries.png",
      tag: "Popular",
      rating: 4.9,
      description: "Crispy freshly cut fries seasoned to perfection.",
      options: [
        { name: "Small", price: 5.99 },
        { name: "Medium", price: 7.99 },
        { name: "Large", price: 9.99 },
      ],
    },
    {
      name: "Tornado Fries",
      image: "/tornado.png",
      rating: 4.8,
      description:
        "Twisted tornado fries for a fun and crispy snack.",
      options: [{ name: "Regular", price: 5.99 }],
    },
  ],
  poutines: [
    {
      name: "Classic Poutine",
      image: "/poutine.png",
      rating: 4.8,
      description:
        "Classic poutine with fries, cheese curds, and savory gravy.",
      options: [{ name: "Regular", price: 8.49 }],
    },
    {
      name: "Chicken Poutine",
      image: "/poutine.png",
      rating: 4.6,
      description:
        "Golden fries topped with cheese curds and tender chicken pieces.",
      options: [{ name: "Regular", price: 9.99 }],
    },
    {
      name: "Steak Poutine",
      image: "/poutine.png",
      rating: 4.7,
      description:
        "Hearty fries layered with cheese curds and savory steak strips.",
      options: [{ name: "Regular", price: 10.49 }],
    },
  ],
  "soft-drinks": [
    {
      name: "Can of Soda",
      image: "/soda-cans.png",
      rating: 4.8,
      description:
        "Chilled can of soda in classic flavors to refresh your meal.",
      options: [{ name: "Can", price: 2.49 }],
    },
    {
      name: "Bottle of Soda",
      image: "/soda-bottles.jpg",
      rating: 4.5,
      description: "Refreshing bottled soda to quench your thirst.",
      options: [{ name: "Can", price: 3.49 }],
    },
    {
      name: "Redbull",
      image: "/redbull.jpg",
      rating: 4.6,
      description: "Energy-boosting Red Bull for an extra kick.",
      options: [{ name: "Can", price: 5.49 }],
    },
    {
      name: "Monster Energy",
      image: "/monster.jpg",
      rating: 4.4,
      description:
        "Chilled Monster Energy drink for long-lasting energy.",
      options: [{ name: "Can", price: 5.49 }],
    },
  ],
  milkshakes: [
    {
      name: "Chocolate Milkshake",
      image: "/choc-milkshake.png",
      rating: 4.8,
      description: "Creamy chocolate milkshake made with rich cocoa.",
      options: [{ name: "Can", price: 5.99 }],
    },
    {
      name: "Vanilla Milkshake",
      image: "/vanilla-milkshake.png",
      rating: 4.8,
      description:
        "Classic vanilla milkshake with smooth ice cream flavor.",
      options: [{ name: "Can", price: 5.99 }],
    },
    {
      name: "Caramel Milkshake",
      image: "/caramel-milkshake.png",
      rating: 4.8,
      description:
        "Sweet caramel milkshake topped with caramel drizzle.",
      options: [{ name: "Can", price: 5.99 }],
    },
    {
      name: "Strawberry Milkshake",
      image: "/strawberry-milkshake.png",
      rating: 4.8,
      description:
        "Fresh strawberry milkshake bursting with fruity flavor.",
      options: [{ name: "Can", price: 5.99 }],
    },
  ],
  toppings: [
    [
      "Blaze Sauce",
      "Our signature spicy sauce to add a kick to any burger",
    ],
    [
      "Ketchup",
      "Classic tomato ketchup for a sweet and tangy flavor.",
    ],
    ["Mustard", "Zesty mustard to give your burger a sharp bite."],
    ["Mayo", "Creamy mayonnaise to add a smooth richness."],
    ["Relish", "Sweet pickle relish to brighten your taste."],
    [
      "BBQ Sauce",
      "Smoky barbecue sauce for a sweet and tangy twist.",
    ],
    ["Chiptotle Sauce", "Smoky chipotle sauce with a hint of spice."],
    ["Sriracha Sauce", "Spicy sriracha sauce for bold heat."],
    ["Lettuce", "Fresh crisp lettuce for a refreshing crunch."],
    ["Tomato", "Juicy tomato slices for natural sweetness."],
    ["Onion", "Crisp onion slices to add a pungent flavor."],
    ["Pickles", "Tangy pickle slices for extra zest."],
    ["Hot Peppers", "Spicy hot peppers to fire up your burger."],
  ]
    .map(
      ([name, description]) =>
        ({
          name,
          description,
          options: [],
        }) as MenuItem,
    )
    .concat(
      [
        [
          "Grilled Onions",
          0.5,
          "Sweet grilled onions add a smoky flavor.",
        ],
        ["Jalapeno", 0.5, "Sliced jalapenos for a spicy kick."],
        ["Mushroom", 1, "Sautéed mushrooms for an earthy taste."],
        ["Cheese", 1, "Extra cheese slice for gooey richness."],
        ["Beef Bacon", 2.5, "Crispy beef bacon for a smoky crunch."],
        ["Fried Egg", 1.5, "Fried egg topped for a rich creaminess."],
        ["Onion Ring", 1, "Crispy onion ring for a crunchy bite."],
        [
          "Mac and Cheese",
          1,
          "Creamy mac and cheese for comfort flavor.",
        ],
        [
          "Jalapeno Popper",
          1,
          "Cheesy jalapeno popper for spicy indulgence.",
        ],
      ].map(
        ([name, price, description]) =>
          ({
            name,
            description,
            options: [{ name: "Add", price }],
          }) as MenuItem,
      ),
    ),
  sandwiches: [
    {
      name: "Philly Steak",
      image: "/philly-steak.png",
      tag: "Popular",
      rating: 4.6,
      description:
        "Tender steak, peppers, and onions served on a toasted hoagie roll.",
      options: [
        { name: "Single", price: 15.99 },
        { name: "Combo", price: 20.99 },
      ],
    },
    {
      name: "Philly Chicken",
      image: "/philly-chicken.png",
      rating: 4.4,
      description:
        "Grilled chicken, peppers, and onions on a soft hoagie bun.",
      options: [
        { name: "Single", price: 14.99 },
        { name: "Combo", price: 19.99 },
      ],
    },
    {
      name: "Ultimate Steak",
      image: "/philly-steak.png",
      rating: 4.7,
      description:
        "Premium steak, peppers, and onions with extra toppings on a hoagie roll.",
      options: [
        { name: "Single", price: 18.99 },
        { name: "Combo", price: 23.99 },
      ],
    },
    {
      name: "Ultimate Chicken",
      image: "/philly-chicken.png",
      rating: 4.5,
      description:
        "Grilled chicken, peppers, and onions with extra toppings on a hoagie roll.",
      options: [
        { name: "Single", price: 17.99 },
        { name: "Combo", price: 22.99 },
      ],
    },
  ],
  "add-ons": [
    {
      name: "Extra Beef Patty",
      description: "Add an extra beef patty for more meaty goodness.",
      options: [{ name: "Add", price: 5.99 }],
    },
    {
      name: "Extra Chicken Filet Patty",
      description:
        "Add an extra crispy chicken filet for extra crunch.",
      options: [{ name: "Add", price: 4.99 }],
    },
    {
      name: "Extra Crispy Chicken",
      description:
        "Add extra crispy chicken for a crunchy texture boost.",
      options: [{ name: "Add", price: 4.99 }],
    },
    {
      name: "Extra Steak",
      description: "Add extra steak for a hearty flavor upgrade.",
      options: [{ name: "Add", price: 6.99 }],
    },
    {
      name: "Extra Blaze Cheesy Patty",
      description:
        "Add a cheesy patty made with triple cheddar blend.",
      options: [{ name: "Add", price: 9.99 }],
    },
  ],
  buns: [
    {
      name: "Regular Bun",
      description: "Classic soft bun to complement any burger.",
      options: [],
    },
    {
      name: "Gluten Free Bun",
      description:
        "Gluten-free bun made from rice flour for a lighter option.",
      options: [{ name: "Add", price: 2 }],
    },
  ],
};
