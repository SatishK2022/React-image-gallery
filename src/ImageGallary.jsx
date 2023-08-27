import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ImageGallary = () => {
  const [allPhotos, setAllPhotos] = useState({});

  async function getPhotos() {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=50"
    );
    const data = await response.json();
    setAllPhotos(data);
    console.log(data);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="h-auto w-full bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-no-repeat bg-fixed bg-top bg-cover">
      <h1 className="text-center text-5xl font-mono font-bold py-8 uppercase">
        Image Gallery
      </h1>
      <div className="px-10 w-full flex flex-row flex-wrap items-center justify-evenly">
        {allPhotos?.photos?.map((photo) => (
          <Link
            className="mb-8"
            to={`/photos/${photo.id}`}
            key={photo.id}
          >
            <img className="w-full md:w-[40vw] lg:w-[28vw] rounded-2xl " src={photo.url} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
