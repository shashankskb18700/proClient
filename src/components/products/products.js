import "./products.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ props }) => {
  const { title, price, rating, brand, thumbnail, id } = props;

  const handleDelete = async () => {
    const v = await axios.delete(`https://dummyjson.com/products/${id}`);

    if (v.data.isDeleted) {
      toast("Deleted");
    }
  };
  return (
    <div className="products">
      <ToastContainer />
      <div className="imgAndRating">
        <img src={thumbnail}></img>
        <p>{rating}⭐️</p>
        <p onClick={handleDelete}>Delete</p>
      </div>
      <div>{brand}</div>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
};

export default Products;
