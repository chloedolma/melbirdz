import React, { useContext } from "react";

import { BirdProfile, Loading } from "../../components";
import { RandomBirdContext } from "../../contexts";

import "../BirdProfile/BirdProfile.css";

export function SearchResults() {
  const { birds, isLoading } = useContext(RandomBirdContext);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (birds?.length > 0) {
    return (
    <>
      {birds.map((bird) => {
        return (
          <BirdProfile
            key={bird.COMMON_NAME}
            commonName={bird.COMMON_NAME}
            scientificName={bird.SCIENTIFIC_NAME}
            description={bird.DESCRIPTION}
            imageUrl={bird.IMAGE_URL}
          />
        );
      })}
    </>
    );
  }

  return (
    <>
    </>
  )
}
