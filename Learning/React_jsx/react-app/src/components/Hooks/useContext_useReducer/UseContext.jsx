//
// //! this just props drilling from UserContext.jsx -> Header.jsx -> Navbar.jsx -> to MiniNavbar.jsx and then display data
// import Header from "./components/Header";
// const UseContext = () => {
//   return (
//     <div>
//       <Header data="Header" />
//     </div>
//   );
// };

// export default UseContext;

// ==============
// ==============
// ==============
// ==============
//! ============= now using useContext better than props drilling ⬇️
import { createContext } from "react";
import Header from "./components/Header";
const UserContext = createContext(null);
const UseContext = () => {
  // return <div>UseContext</div>;
  //? now instead of using div we use UserContext to pass the data or value

  // TODO: Passing array variable in value Provider ===================================
  let valueData = [
    { name: "Dips", age: 22, location: "Kathmandu" },
    { name: "Superman", age: 30, location: "Krypton" },
  ];
  return (
    // //! String
    // Passing single string value from UserContext.jsx  -> to MiniNavbar.jsx
    // <UserContext.Provider value={"Hello"}>
    //   <Header />
    // </UserContext.Provider>

    // //! Object
    // //? now passing Object value from UserContext for all ( Header.jsx, Navbar.jsx,  MiniNavbar.jsx)
    // <UserContext.Provider
    //   value={{ name: "Dips", age: 22, location: "Kathmandu" }}
    // >
    //   <Header />
    // </UserContext.Provider>

    // //! Array
    //? now passing Array value from UserContext for all ( Header.jsx, Navbar.jsx,  MiniNavbar.jsx)
    // <UserContext.Provider
    //   value={[
    //     { name: "Dips", age: 22, location: "Kathmandu" },
    //     { name: "Superman", age: 30, location: "Krypton" },
    //   ]}
    // >
    //   <Header />
    // </UserContext.Provider>

    // TODO: Passing array variable in value Provider ===================================
    // //! Array
    //? now passing Array value from UserContext for all ( Header.jsx, Navbar.jsx,  MiniNavbar.jsx)
    <UserContext.Provider value={valueData}>
      <Header />
    </UserContext.Provider>
  );
};

export default UseContext;
export { UserContext };
