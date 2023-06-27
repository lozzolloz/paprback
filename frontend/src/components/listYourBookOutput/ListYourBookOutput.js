import { useEffect } from "react";

// Importing CSS file and default cover image
import "./listYourBookOutput.css";
import coverdefault from "../../assets/images/coverDefault.png";

//Creating a listed books array
//1. Create a new array - in a data file.
//2. Put a handleclick/on lick function in the JSX of the button
//3. Import the empty array from the data file.
//4. Create a function that will push the book to the array
//5. spread operator...?
//6. return an object with the requred structure (holding all the props and their inherent value)
//7. A state variable is needed for the notes and condition

function ListYourBookOutput({  listingPosted, setListingPosted, onClick, updateCondition, updateNotes, book}) {

  useEffect(() => {

  if (listingPosted === true) {
    document.getElementById("listbook-cover").value = coverdefault;
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("condition-select").value = "Condition";
    document.getElementById("notes").value = "";
  
    setListingPosted(false);
  }
  }, [listingPosted, setListingPosted]);

  return (
    <div data-testid="listyourbook-output">
      {/* Render book cover image */}
      <img
      id="listbook-cover"
        className="cover"
        src={book.cover_img || coverdefault}
        alt="book cover"
      />

      {/* Render book title */}
      {/* <p className="outputFormLabels">Title:</p> */}
      <input
        data-testid="title-input"
        className="outputForm"
        id="title"
        placeholder="* Title"
        type="text"
        value={book.title}
        disabled="disabled"
      ></input>

      {/* Render book author */}
      {/* <p className="outputFormLabels">Author:</p> */}
      <input
        data-testid="author-input"
        className="outputForm"
        id="author"
        value={book.author}
        placeholder="* Author"
        disabled="disabled"
      ></input>

      {/* Render book condition */}
      {/* <p className="outputFormLabels">Condition:</p> */}

      {/* <form id="condition" onChange={props.onChangeCondition}>
        <select
          data-testid="defaultValue"
          className="outputForm"
          name="Condition"
          placeholder="Condition"
          defaultValue="Condition" // Set defaultValue prop instead
        >
          <option value="Condition" disabled>
            {' '}
            Condition{' '}
          </option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Acceptable">Acceptable</option>
          <option value="Poor">Poor</option>
        </select>
      </form> */}

      {/* Code as it was before */}

      <form id="condition" onChange={updateCondition}>
        <select
          data-testid="defaultValue"
          id="condition-select"
          className="outputForm conditionDropdown" // Add custom class here
          name="Condition"
          placeholder="Condition"
        >
          <option value="Condition" disabled selected>
            {" "}
            * Condition{" "}
          </option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Acceptable">Acceptable</option>
          <option value="Poor">Poor</option>
        </select>
      </form>

      {/* Render book notes */}
      {/* <p className="outputFormLabels">Notes:</p> */}
      <input
        data-testid="notes"
        onChange={updateNotes}
        className="outputFormNotes"
        id="notes"
        type="text"
        placeholder="* Notes"
        maxlength="200"
      ></input>
      <br></br>

      {/* Render post listing button */}
      <button className="postListing" onClick={onClick} id="post-listing">
        Post Listing
      </button>
    </div>
  );
}

export default ListYourBookOutput;
