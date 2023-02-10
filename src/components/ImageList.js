import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {

    return <ImageShow key={image.id} image={image} />;
   
  });
  return (


  <div className="mx-40 mt-5">
    {renderedImages}
    </div>

     )
}
export default ImageList;
