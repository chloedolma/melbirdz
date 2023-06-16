import "./BirdProfile.css";

export interface BirdPropsInterface {
  commonName?: string;
  scientificName?: string;
  description?: string;
  imageUrl?: string;
}

export function BirdProfile({
  commonName,
  scientificName,
  description,
  imageUrl,
}: BirdPropsInterface) {
  return (
    <div className="Bird-box">
      <div className="Bird-img-container">
        <img
          src={imageUrl}
          className="Bird-image"
          alt={commonName + "-photo"}
        />
      </div>
      <h2>{commonName}</h2>
      <h3>{scientificName}</h3>
      <p>{description}</p>
    </div>
  );
}
