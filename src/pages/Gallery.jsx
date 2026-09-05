import { useState } from 'react'

function Gallery() {
  const [activeGallery, setActiveGallery] = useState("inverhuron")

  const inverhuronPhotos_band = [
    {
      src: `${import.meta.env.BASE_URL}media/images/image_jesse.jpg`,
      name: "Jesse",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/image_wade.jpg`,
      name: "Wade",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/image_trevor.jpg`,
      name: "Trevor",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/image_eric.jpg`,
      name: "Eric",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/image_cam.jpg`,
      name: "Cam",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/image_evan.jpg`,
      name: "Evan",
    },
  ]
  const inverhuronPhotos = [
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery_inverhuron_wadeanderic.jpg`,
      name: "huron-1",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery_inverhuron_group.jpg`,
      name: "huron-2",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery_inverhuron_drumview.webp`,
      name: "huron-3",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery_inverhuron_camsparents.png`,
      name: "huron-4",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/possible_background_2.png`,
      name: "huron-5",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery-inverhuron.webp`,
      name: "huron-6",
    },
  ]

  return (
    <main className="gallery">
      <h1>Gallery</h1>
      
      <nav className="gallery-tabs">
        <button className={activeGallery === "inverhuron" ? "active" : ""} onClick={() => setActiveGallery("inverhuron")}>Inverhuron</button>
      </nav>

      <section className="image-container">
        {activeGallery === "inverhuron" && (
          <>
          <div id="band-members" className="gallery-grid">
            {inverhuronPhotos_band.map((photo) => (
              <img
                key={photo.name}
                src={photo.src}
                alt={`${photo.name} of The Detweilers at Inverhuron`}
              />
            ))}
          </div>
          <div className="gallery-videos">
            <iframe
              src="https://www.youtube-nocookie.com/embed/BbdM5w5SA4s"
              title="The Detweilers - Don’t Do Me Like That [Live Tom Petty Cover] #classicrock #tompetty #rockandroll"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <iframe
              src="https://www.youtube-nocookie.com/embed/7ALiDdvVLpM"
              title="The Detweilers - Don’t Do Me Like That [Live Tom Petty Cover] #classicrock #tompetty #rockandroll"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div id="inverhuron-gallery-bottom" className="gallery-grid">
            {inverhuronPhotos.map((photo) => (
              <img
                key={photo.name}
                src={photo.src}
                alt={`${photo.name} of The Detweilers at Inverhuron`}
              />
            ))}
          </div>
          </>
        )}
      </section>
    </main>
  )
}
export default Gallery