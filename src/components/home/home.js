import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../products/products";
import "./home.css";
import Header from "../header/header";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();

    // v();
    // setData(v);
  }, []);

  async function fetchData() {
    const dat = await axios.get("https://dummyjson.com/products");
    console.log(dat);

    setData(dat.data.products);
  }

  return (
    <div className="home">
      <Header></Header>
      <div className="homeProduts">
        {data.map((a) => (
          <Products props={a}></Products>
        ))}
      </div>
    </div>
  );
};

export default Home;
