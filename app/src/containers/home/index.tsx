import { useContext, useEffect } from "react";
import { SearchForm, SearchResults } from "../../components";
import { RandomBirdContext } from "../../contexts";

export function Home() {
  //@ts-expect-error
  const { birds, dispatch } = useContext(RandomBirdContext);

  useEffect(() => {
    dispatch({ type: "update", payload: []});
  }, [dispatch]);

  console.log("In home function", birds)
  return (
    <>
      <SearchForm />
      <div className="BirdProfile-section">
          <SearchResults />
      </div>
    </>
  );
}

export default Home;
