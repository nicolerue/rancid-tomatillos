import Star from "./Star";
function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} />
      ))}
      <p style={{
        color: "whitesmoke"
      }}> {rating}/10</p>
    </div>
  );
}

export default StarRating;
