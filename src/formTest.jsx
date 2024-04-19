import React, {useState, useEffect} from "react";

/**
 * SearchBox: A search box that filters companies to those matching the search
 *
 * state: search term
 *
 * props: search fn
 *
 * App -> RoutesList -> {CompaniesList, JobsList} -> SearchBox
 *
 */
function FormTest({search}) {
  const [formData, setformData] = useState({});
  console.log("formTeststate: formData", formData);

  /** updates formData based on user input */
  function handleChange(evt) {
    const selectedFile = evt.target.files[0]; ///
    setformData(selectedFile); ///
    // setformData(evt.target.value);  ///
  }
  const formDataObj = new FormData();
  formDataObj.append("file", formData); //

  console.log("formData from test:", formDataObj);

  /** Calls parent function to update parent's state with search formData */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await fetch("http://localhost:3000/properties/uploadImage", {
      method: "POST",
      body: formDataObj,
    });
    setformData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="myfile">Select a file:</label>
      <input
        type="file"
        id="myfile"
        name="myfile"
        onChange={handleChange}
      ></input>
      <button>Upload</button>
    </form>
  );
}

export default FormTest;
