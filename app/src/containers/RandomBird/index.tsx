import { useContext, useEffect } from "react";

import { BirdProfile, Loading } from "../../components";
import { RandomBirdContext } from "../../contexts";
import "../../components/BirdProfile/BirdProfile.css";

export function RandomBird() {
  // @ts-expect-error
  const { birds, isLoading, dispatch } = useContext(RandomBirdContext);

  useEffect(() => {
    dispatch({ type: "toggleIsLoading", isLoading: true });

    fetch("http://localhost:4000/api/v1/bird")
      .then((response) => response.json())
      .then((payload) => dispatch({ type: "update", payload }))
      .catch(console.error)
      .finally(() => dispatch({ type: "toggleIsLoading", isLoading: false }));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const bird = birds[Math.floor(Math.random() * birds.length)];
  if (birds?.length > 0) {
    return (
      <div className="BirdProfile-section">
        <BirdProfile
          key={bird.COMMON_NAME}
          commonName={bird.COMMON_NAME}
          scientificName={bird.SCIENTIFIC_NAME}
          description={bird.DESCRIPTION}
          imageUrl={bird.IMAGE_URL}
        />
      </div>
    );
  }


  return (
    <>
    </>
  )
}

export default RandomBird;
