import Magazine from "./sections/Magazine/Magazine";
import Moarefi from "./sections/Moarefi/Moarefi";
import Nuts from "./sections/Nuts/Nuts";
import Pesteh from "./sections/Pesteh/Pesteh";
import Picture from "./sections/Picture/Picture";
import Products from "./sections/Products/Products";
import Qore from "./sections/Qore/Qore";
import Responsibility from "./sections/Responsibility/Responsibility";
import Rice from "./sections/Rice/Rice";
import Rokn from "./sections/Rokn/Rokn";
import Sabegheh from "./sections/Sabegheh/Sabegheh";
import Social from "./sections/Social/Social";
import Tea from "./sections/Tea/Tea";

const Home = () => {
  return (
    <>
      <Qore />
      <Moarefi />
      <Picture />
      <Rice />
      <Rokn />
      <Tea />
      <Sabegheh />
      <Pesteh />
      <Nuts />
      <Magazine />
      <Products />
      <Responsibility />
      <Social />
    </>
  );
};

export default Home;
