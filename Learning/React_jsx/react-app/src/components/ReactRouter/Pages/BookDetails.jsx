//
import { useParams } from "react-router-dom";
const BookDetails = () => {
  // const params = useParams();
  // destructuring
  // const { ids } = useParams();
  //! multiple params
  const { id, author } = useParams();
  return (
    <div>
      {/* <div>Book Details: {params.ids}</div> */}
      {/* after destructuring ⬇️*/}
      {/* <div>Book details: {ids}</div> */}
      {/* //! multiple params */}
      <div>
        {/* searching in user like -> http://localhost:5173/books/4/Dips */}
        Book details. <br /> Book id: {id} <br /> Book Author: {author}
      </div>
    </div>
  );
};

export default BookDetails;
