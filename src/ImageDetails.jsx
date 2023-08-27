import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ImageDetails = () => {
    const [photoDetail, setPhotoDetail] = useState({});

    const {id} = useParams()
    console.log(id)

    async function getPhotoDetails(id) {
        const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos/" + id);
        const data = await response.json();
        setPhotoDetail(data);
        console.log(data)
    }

    useEffect(() => {
        getPhotoDetails(id);
    }, [id])

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-no-repeat bg-cover h-screen w-full">
        <div className="w-full flex flex-col items-center justify-center gap-5 py-10 px-5 md:px-10 lg:px-32">
            <div >
                <img className="w-full md:w-[50vw] lg:w-[30vw] rounded-2xl" src={photoDetail?.photo?.url} />
            </div>

            <div className="text-center">
                <h1 className="text-4xl font-semibold">{photoDetail?.photo?.title}</h1>
                <h2 className="text-xl mt-5">{photoDetail?.photo?.description}</h2>
            </div>
            <Link to='/' className="mt-5 py-2 px-10 bg-orange-500 text-white font-semibold rounded-md">Home</Link>
        </div>
        
    </div>
  )
}

export default ImageDetails