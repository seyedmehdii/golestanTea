const { configureStore } = require("@reduxjs/toolkit");
import HeaderSlice from "./Header/HeaderSlice.js";
import QoreSlice from "./Qore/QoreSlice.js";
import RiceSlice from "./Rice/RiceSlice.js";
import TeaSlice from "./Tea/TeaSlice.js";
import PestehSlice from "./Pesteh/PestehSlice.js";
import MagazineSlice from "./Magazine/MagazineSlice.js";
import ProductsSlice from "./Products/ProductsSlice.js";
const store = configureStore({
  reducer: {
    header: HeaderSlice,
    qore: QoreSlice,
    rice: RiceSlice,
    tea: TeaSlice,
    pesteh: PestehSlice,
    magazine: MagazineSlice,
    products: ProductsSlice,
  },
});
export default store;
