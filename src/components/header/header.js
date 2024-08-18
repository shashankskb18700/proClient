import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./header.css";

const Header = () => {
  const [title, setTitle] = useState("");
  const [formState, setFormState] = useState(false);

  const handleLogout = async () => {
    const state = await axios.get("https://proserver-ga0b.onrender.com/logout");
    toast(state.data.message);

    state.data.success == true
      ? window.location.replace(state.data.redirectUrl)
      : console.log("");
  };

  const handleAddProduct = async () => {
    const v = await axios.post("https://dummyjson.com/products/add", {
      title: title,
    });

    toast("Added successfully");
  };
  const handleAction = (event) => {
    event.preventDefault();
  };
  return (
    <div className="header">
      ProIndia
      {formState == true ? (
        <div className="addProduct">
          <form className="addProductForm" onSubmit={handleAction}>
            <p onClick={() => setFormState(false)}>close</p>
            <label htmlFor="title">Please enter title of product</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <button onClick={handleAddProduct}>submit</button>
          </form>
        </div>
      ) : (
        ""
      )}
      <ToastContainer className="toas" />
      <span onClick={() => setFormState(!formState)}>Add Product</span>
      <span onClick={handleLogout}>Logout</span>
    </div>
  );
};

export default Header;
