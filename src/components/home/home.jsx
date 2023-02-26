import * as React from "react";
import "./home.css";
import beach from "../../images/beach.jpg"; // gives image path;
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Quote of the Day
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        The best and most beautiful things in the world cannot be seen or even
        touched <br />- they must be felt with the heart.
      </Typography>
    </CardContent>
  </React.Fragment>
);

const itemData = [
  {
    img: "https://www.kosher.com/resized/details.slide/c/r/Crinkle-Cookies-W.jpg",
    title: "Cookies",
  },
  {
    img: "https://www.kosher.com/resized/details.slide/f/e/Festive_Vanilla_Cupcakes__-A.png",
    title: "Cupcake",
  },
  {
    img: "https://www.kosher.com/resized/details.slide/l/e/Leora_-Leah-Strawberry-shortcake-Ice-Cream-Cake-V1.jpg",
    title: "Cake",
  },
  {
    img: "https://www.kosher.com/resized/details.slide/s/p/Sprinkle-Cookies-W.jpg",
    title: "Cookie",
  },
  {
    img: "https://www.kosher.com/resized/details.slide/m/u/Murray-Faigy-Fully-Loaded-Cereal-Mix-V.jpg",
    title: "Mix",
  },
  {
    img: "https://www.kosher.com/resized/details.slide/m/u/Murray-Faigy-Nutella-Brownies-V.jpg",
    title: "Brownie",
  },
  {
    img: "https://www.kosher.com/resized/details.slide/l/i/Lieu_Kat_Tangzhong_Milk_Bread_Five-Spice_Cinnamon_Buns_crop.jpg",
    title: "Honey",
  },
];

export const Home = () => {
  return (
    <div className="App">
      <h1>Hello! Welcome to my Home Page:)</h1>
      <img src={beach} alt="beach" style={{ border: "10px" }} />
      <h2>
        My name is Elisheva Chait. <br />I am completing my last semester for a
        BA in Computer Science.
        <br /> I live in Queens, NY and enjoy baking.
        <br />
        Here are 3 easy recipes!
      </h2>
      <div>
        <Accordion className="Accordian">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="First-Recipe">Muddy Buddies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ingredients
              <br />
              3 cups Rice Chex® cereal
              <br />
              3 cups Corn Chex® cereal
              <br />
              3 cups Chocolate Chex® cereal
              <br />
              1 cup semisweet chocolate chips
              <br />
              ½ cup peanut butter
              <br />
              ¼ cup butter or margarine
              <br />
              1 teaspoon vanilla
              <br />
              1 ½ cups powdered sugar
              <br />
              Combine all cereals in a large bowl; set aside.
              <br />
              Place chocolate chips, peanut butter, and butter in a 1-quart
              microwave-safe bowl. Microwave, uncovered, on high for 1 minute,
              then stir. <br />
              Continue warming mixture until smooth and combined, about 30
              seconds longer. Stir in vanilla.
              <br />
              Pour chocolate mixture over cereal and stir until evenly coated.
              Transfer to a 2-gallon resealable plastic bag.
              <br />
              Add powdered sugar to the bag and seal; shake until well-coated.
              Evenly spread cereal out onto waxed paper to cool.
              <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Chocolate Crinkle Cookies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1 cup Mishpacha Flour
              <br />
              1/2 cup Gefen Cocoa Powder
              <br />
              1 teaspoon baking powder
              <br />
              1/4 teaspoon salt
              <br />
              3/4 cup sugar
              <br />
              1/4 cup oil
              <br />
              2 eggs
              <br />
              1 teaspoon vanilla extract
              <br />
              1 cup Gefen Confectioners' Sugar or other powdered sugar
              <br />
              In a medium-sized bowl, mix flour, cocoa powder, baking powder and
              salt. Set aside.
              <br />
              In the bowl of a mixer, cream sugar and oil for two minutes, or
              until mixture is light and fluffy.
              <br />
              Add eggs and vanilla extract and mix until combined. Add flour
              mixture and mix on medium-low speed until combined. <br />
              Form dough into a ball and cover with plastic wrap. Refrigerate
              for at least two hours and up to 24 hours.
              <br />
              Preheat oven to 350 degrees Fahrenheit.
              <br />
              Unwrap the dough and form into one-inch balls. Pour powdered sugar
              onto a plate. Roll balls in powdered sugar until fully coated.
              <br />
              Transfer to a Gefen Parchment-lined baking sheet and bake for 10
              minutes. Let cool on baking sheet for three minutes before
              transferring to a cooling rack.
              <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Sprinkle Cookies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4 sticks margarine
              <br />
              1 and 1/2 cups sugar
              <br />
              2 eggs
              <br />
              5 cups ﬂour (add more, if needed)
              <br />
              1 teaspoon Gefen Vanilla Extract
              <br />
              1/8 teaspoon salt
              <br />
              6–8 ounces colorful sprinkles
              <br />
              Preheat oven to 350 degrees Fahrenheit.
              <br />
              Cream margarine and sugar together. Add eggs, ﬂour, vanilla, and
              salt. <br />
              Form one-inch balls, by hand or with a cookie scooper. <br />
              Pour sprinkles onto a plate. With the palm of your hand, ﬂatten
              the cookie dough balls onto the plate of sprinkles. <br />
              Place cookies, two inches apart and sprinkle-side-up, on an
              ungreased cookie sheet. <br />
              Bake for 13 to 15 minutes. Remove from oven before cookies begin
              to brown.
              <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <h1>Some yummy desserts!</h1>
      <ImageList sx={{ width: 1200, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
