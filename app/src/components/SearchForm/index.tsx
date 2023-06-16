import React, { Suspense, useState, useContext } from "react";
import TreeImg from "../../assets/tree.png";
import { ReactComponent as Magnify } from "../../assets/magnifyingGlass.svg";
import { RandomBirdContext } from "../../contexts";

import "./SearchForm.css";

import { InputSearch } from "../InputSearch";
import { Loading } from "../Loading";

export function SearchForm() {
    // @ts-expect-error
  const { isLoading, dispatch } = useContext(RandomBirdContext);
  const [search, setSearch] = useState<string>();

  // @ts-expect-error
  const handleChange = async (event) => {
    setSearch(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    dispatch({ type: "toggleIsLoading", isLoading: true });

    fetch(`http://localhost:4000/api/v1/bird?name=${search}`)
      .then()
      .then((response) => response.json())
      .then((payload) => dispatch({ type: "update", payload }))
      .catch(console.error)
      .finally(() => dispatch({ type: "toggleIsLoading", isLoading: false }));
    }

  return (
    <Suspense fallback={<Loading />}>
      <div className="FormWrapper">
        <img src={TreeImg} className="Form-tree" alt="tree animation" />

        <form onSubmit={handleSubmit} className="Form-search">
          <InputSearch onChange={handleChange} value={search} />
          <button
            type="submit"
            aria-label="search"
            className="Form-searchbutton"
            value={""}
            disabled={isLoading}
          >
            <Magnify />
          </button>
        </form>
      </div>
    </Suspense>
  );
}


