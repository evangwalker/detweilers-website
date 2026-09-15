function Posters() {

  const posters = [
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-06-25_ROSIES.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-07-21_BLACKHORSE.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-09-16_OVFH.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-09-30_BLACKHORSE.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-01-05_CAMERON.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-03-16_OVFH.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-04-20_MUDDYWATER.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-05-10_BLACKHORSE.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-06-20_LINSMORE.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-10-19_QUEENS.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-11-16_OVFH.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-01-18_QUEENS.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-03-07_CAMERON.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-07-05_QUEENS.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-11-15_BLACKHORSE.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-11-29_GARYS.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-02-07_OVFH.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-05-08_OVFH.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-06-13_OVFH.webp`,
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-09-12_OVFH.webp`,
    },
  ]

  return (
  <main className="archive">
    <h1>Poster Archive</h1>

    <section className="posters">
      <div id="past-shows" className="poster-grid">
        {posters.toReversed().map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt=""
          />
        ))}
      </div>
    </section>
  </main>
)
}
export default Posters