//
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";
import "./App.css";
import BookDetails from "./Pages/BookDetails";

const ReactRouter = () => {
  return (
    <div>
      {/* // TODO: step-2 -> 2️⃣ */}
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav> */}

      {/* //TODO: step-1 -> 1️⃣ */}
      <Router>
        {/* After using Link component it should always be inside React Router DOM */}
        {/* // TODO: step-3 -> 3️⃣ Link */}
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* ----- ******************************************************************* ----- */}
          {/* <Route path="home" element={<>Home</>} />
          <Route path="contact" element={<>Contact us page.</>} /> */}
          {/* //! instead of write jsx calling component directly and it is better */}
          <Route path="home" element={<HomePage />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          {/* If the page is not found or url is in correct */}
          {/* //! <Route path="*" element={<b>Page not found</b>}></Route> */}
          <Route path="*" element={<PageNotFound />}></Route>
          {/* ----- ******************************************************************* ----- */}

          {/* =============================================================================== */}
          {/* Longer form */}
          {/* <Route path="books" element={<b>Books</b>} />
          <Route path="books/buy" element={<b>Books buy</b>} />
          <Route path="books/sell" element={<b>Books are sold</b>} /> */}

          {/* //! Now shorthand -> nested routing*/}
          <Route path="books">
            {/* /books or index is same */}
            {/* <Route index element={<b>Books</b>} />
            <Route path="buy" element={<b>Books buy</b>} /> */}

            {/* nested routing inside nested routing ⬇️*/}
            {/* <Route path="sell" element={<b>Books are sold</b>} /> */}
            {/* <Route path="sell">
              <Route index element={<b>Books are sold</b>} />
              <Route path="novel" element={<b>Novel Books Sold</b>} />
              <Route path="science" element={<b>Science Books are sold</b>} />
            </Route> */}

            {/* //! ============== Better Approach ============== */}
            {/* //? searching with id not with urls like -> books/123 -> books/2 */}
            <Route index element={<b>Books Page</b>} />
            {/* <Route path=":ids" element={<BookDetails />} /> */}
            {/* //! for multiple params */}
            <Route path=":id/:author" element={<BookDetails />} />
          </Route>
          {/* =============================================================================== */}
        </Routes>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </Router>
    </div>
  );
};

export default ReactRouter;
