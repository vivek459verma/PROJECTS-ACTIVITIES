import { rest } from "msw";
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get("/dishes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Aleksandra-Tanasiienko",
          category: "Lunch",
          price: "30.99",
          img: "./Images/aleksandra-tanasiienko.jpg",
          description:
            "Indulge in our exquisite pasta, expertly crafted with al dente perfection and paired with luscious sauces. Each bite is a symphony of flavors, promising a culinary journey that captivates the senses.",
        },
        {
          id: 2,
          title: "Banana Pancake",
          category: "Breakfast",
          price: "15.99",
          img: "./Images/banana-pancake.jpg",
          description:
            "Indulge in the perfect harmony of flavors with our Banana Pancake. Fluffy pancakes infused with ripe banana slices, drizzled with golden maple syrup. A delightful breakfast or anytime treat!",
        },
        {
          id: 3,
          title: "Ben-Kolde",
          category: "Breakfast",
          price: "13.99",
          img: "./Images/ben-kolde.jpg",
          description:
            "Indulge in the perfect harmony of fluffy scrambled eggs, nestled between two layers of toasted artisanal bread. Our egg sandwich is a symphony of flavors, offering a delightful breakfast or brunch experience.",
        },
        {
          id: 4,
          title: "Chocolate-Dessert-Shake",
          category: "Shakes",
          price: "9.99",
          img: "./Images/chocolate-dessert-shake.jpg",
          description:
            "Indulge in pure bliss with our decadent Chocolate Shake. Velvety smooth chocolate blended to perfection, creating a rich and creamy delight. A heavenly treat that satisfies every sweet craving.",
        },
        {
          id: 5,
          title: "Chumil-Chef-Special",
          category: "Lunch",
          price: "29.99",
          img: "./Images/chumil-chef-Special.jpg",
          description:
            "Savor the rich, succulent flavors of our premium stake—expertly grilled to perfection. Indulge in a mouthwatering experience with each tender bite, complemented by our signature seasoning. A carnivore's delight!",
        },
        {
          id: 6,
          title: "Clarissa-Carbungco",
          category: "Shakes",
          price: "12.99",
          img: "./Images/clarissa-carbungco.jpg",
          description:
            "Indulge in our irresistible Oreo Shake, a velvety blend of rich vanilla ice cream and crushed Oreo cookies, crowned with whipped cream. A delightful fusion of creamy and crunchy decadence.",
        },
        {
          id: 7,
          title: "Indian-Dosa-Composition",
          category: "Breakfast",
          price: "20.99",
          img: "./Images/Indian-dosa-composition.jpg",
          description:
            "Savor the authentic flavors of India with our delectable Indian Dosa—a thin, crispy rice and lentil crepe filled with a choice of spiced potatoes, served with coconut chutney. A delightful culinary journey awaits!",
        },
        {
          id: 8,
          title: "Mojito",
          category: "Shakes",
          price: "15.99",
          img: "./Images/mojito.jpg",
          description:
            "Indulge in the refreshing allure of our Mojito, a symphony of muddled mint, zesty lime, and premium rum, topped with a splash of soda. A tantalizing escape in every sip.",
        },
        {
          id: 9,
          title: "Ronise-Daluz",
          category: "Lunch",
          price: "25.99",
          img: "./Images/ronise-daluz.jpg",
          description:
            "Indulge in the exquisite flavors of (Ratatoi), a culinary masterpiece featuring succulent ratatouille medley infused with aromatic herbs and fresh vegetables. A delightful, wholesome dish that captivates the palate.",
        },
        {
          id: 10,
          title: "Ellie-Ellien",
          category: "Breakfast",
          price: "19.99",
          img: "./Images/ellie-ellien.jpg",
          description:
            "Indulge in wholesome goodness with our hearty oats bowl. Nutrient-rich oats, simmered to perfection, topped with fresh fruits, nuts, and a drizzle of honey. A deliciously nutritious start to your day!",
        },
      ])
    );
  }),
];
