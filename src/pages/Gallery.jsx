import { useState } from 'react'

function Gallery() {
  const [activeGallery, setActiveGallery] = useState("inverhuron")

  const inverhuronPhotos_band = [
    {
      bw: `${import.meta.env.BASE_URL}media/images/band_members/jesse_bw.webp`,
      colour: `${import.meta.env.BASE_URL}media/images/band_members/jesse_colour.webp`,
      name: "Jesse",
    },
    {
      bw: `${import.meta.env.BASE_URL}media/images/band_members/wade_bw.webp`,
      colour: `${import.meta.env.BASE_URL}media/images/band_members/wade_colour.webp`,
      name: "Wade",
    },
    {
      bw: `${import.meta.env.BASE_URL}media/images/band_members/trevor_bw.webp`,
      colour: `${import.meta.env.BASE_URL}media/images/band_members/trevor_colour.webp`,
      name: "Trevor",
    },
    {
      bw: `${import.meta.env.BASE_URL}media/images/band_members/eric_bw.webp`,
      colour: `${import.meta.env.BASE_URL}media/images/band_members/eric_colour.webp`,
      name: "Eric",
    },
    {
      bw: `${import.meta.env.BASE_URL}media/images/band_members/cam_bw.webp`,
      colour: `${import.meta.env.BASE_URL}media/images/band_members/cam_colour.webp`,
      name: "Cam",
    },
    {
      bw: `${import.meta.env.BASE_URL}media/images/band_members/evan_bw.webp`,
      colour: `${import.meta.env.BASE_URL}media/images/band_members/evan_colour.webp`,
      name: "Evan",
    },
  ]
  const inverhuronPhotos = [
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery/inverhuron/wadeanderic.webp`,
      name: "huron-1",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery/inverhuron/fullband.webp`,
      name: "huron-2",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery/inverhuron/drumview.webp`,
      name: "huron-3",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery/inverhuron/fullbandday.webp`,
      name: "huron-4",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery/inverhuron/fullbandnightlights.webp`,
      name: "huron-5",
    },
    {
      src: `${import.meta.env.BASE_URL}media/images/gallery/inverhuron/fullbandnight.webp`,
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
              <div className="band-member" key={photo.name} tabIndex="0">
                <img
                  className="band-member-bw"
                  src={photo.bw}
                  alt={`${photo.name} of The Detweilers`}
                />
                <img
                  className="band-member-colour"
                  src={photo.colour}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="gallery-videos">
            <iframe
              src="https://www.youtube-nocookie.com/embed/19CRaAfNLfQ"
              title="Layla (Derek and the Dominos cover) - The Detweilers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <iframe
              src="https://www.youtube-nocookie.com/embed/bAMwleEE5Fw"
              title="Won't Get Fooled Again (The Who cover) - The Detweilers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube-nocookie.com/embed/paXhT8x4zks"
              title="Lady Madonna (The Beatles cover) - The Detweilers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <iframe
              src="https://www.youtube-nocookie.com/embed/2ShhlHOhQdk"
              title="Teenage Dirtbag (Wheatus cover) - The Detweilers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
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