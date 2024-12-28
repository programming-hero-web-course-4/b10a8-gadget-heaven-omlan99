// import { useEffect, useState } from "react";
// import Product from "./Product";
// import { useLoaderData, useParams, useNavigate } from "react-router-dom";

// const Products = () => {
//   const products = useLoaderData(); // All products loaded from the loader
//   const { category } = useParams(); // Get the category from URL params
//   const navigate = useNavigate(); // Used for navigation
//   const [gadget, setGadget] = useState([]);
//   const [showAll, setShowAll] = useState(false)
//   // Filtering Logic
//   useEffect(() => {
//     if (category === "All Products" || !category) {
//       setGadget(products); // Show all products if "all" or no category is selected
//     } else {
//       const filteredData = products.filter((product) => product.category === category);
//       setGadget(filteredData);
//     }
//   }, [category, products]);
//   //  gadget = showAll ? products : products.slice(0,6) 
//    console.log(products)
//   return (
//     <div>
//       <div className="grid md:grid-cols-3 gap-3 ">
//         {gadget.map((product) => (
//           <Product key={product.id} product={product}></Product>
//         ))}
//       </div>
//      <div className="flex justify-center">
//      <button
//           className="btn btn-warning mt-4 ml-6 text-center"
//           onClick={() => navigate("/category/All%20Products")}
//         >
//           Show All Products
//         </button>
//      </div>
//       {/* Button to show all products
//       {category !== "All Products" && (
     
//       )}
//        */}
//     </div>
//   );
// };

// export default Products;
import { useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const products = useLoaderData(); // All products loaded from the loader
  const { category } = useParams(); // Get the category from URL params
  const [gadget, setGadget] = useState([]); // Products to display
  const [showAll, setShowAll] = useState(false); // Control whether to show all products

  // Filtering Logic
  useEffect(() => {
    if (category === "All Products" || !category) {
      setGadget(showAll ? products : products.slice(0, 6)); // Show limited or all products
    } else {
      const filteredData = products.filter(
        (product) => product.category === category
      );
      setGadget(filteredData);
    }
  }, [category, products, showAll]);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-3">
        {gadget.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>

      {/* Show All Button */}
      {!showAll && category === "All Products" && (
        <div className="flex justify-center">
          <button
            className="btn btn-warning mt-4 ml-6 text-center"
            onClick={() => setShowAll(true)} // Update state to show all products
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;