import React, { useState, useEffect } from "react";

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
function formTest({ search }) {
  const [formData, setformData] = useState("");
  console.log('formTeststate: formData', formData);

  /** updates formData based on user input */
  function handleChange(evt) {
    setformData(evt.target.value);
  }

  /** Calls parent function to update parent's state with search formData */
  async function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setformData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="myfile">Select a file:</label>
      <input type="file" id="myfile" name="myfile" value={formData} onChange={handleChange}></input>
      <button>Search!</button>
    </form>
  );
}

export default formTest;