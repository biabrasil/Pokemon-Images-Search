function ImageShow({ image }) {
  return (
    <div className="inline-block mx-2 mt-10">
      <img className="flex object-cover" max-height={250} max-width={250} height={250} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
export default ImageShow;
