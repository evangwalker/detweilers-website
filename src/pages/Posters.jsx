function Posters() {

  const posters = [
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-06-25_ROSIES.webp`,
      description: "The Detweilers at Rosie's Bar, June 25, 2023.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-07-21_BLACKHORSE.webp`,
      description: "The Detweilers at The Blackhorse Pub, July 21, 2023.",  
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-09-16_OVFH.webp`,
      description: "The Detweilers at Olde Village Free House, September 16, 2023.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2023-09-30_BLACKHORSE.webp`,
      description: "The Detweilers at The Blackhorse Pub, September 30, 2023.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-01-05_CAMERON.webp`,
      description: "The Detweilers at The Cameron House, January 5, 2024.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-03-16_OVFH.webp`,
      description: "The Detweilers at Olde Village Free House, March 16, 2024.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-04-20_MUDDYWATER.webp`,
      description: "The Detweilers at Muddy Water Hotel, April 20, 2024.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-05-10_BLACKHORSE.webp`,
      description: "The Detweilers at The Blackhorse Pub, May 10, 2024.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-06-20_LINSMORE.webp`,
      description: "The Detweilers at Linsmore Tavern, June 20, 2024.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-10-19_QUEENS.webp`,
      description: "The Detweilers at The Queens Hotel, October 19, 2024.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2024-11-16_OVFH.webp`,
      description: "The Detweilers at Olde Village Free House, November 16, 2024.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-01-18_QUEENS.webp`,
      description: "The Detweilers at The Queens Hotel, January 18, 2025.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-03-07_CAMERON.webp`,
      description: "The Detweilers at The Cameron House, March 7, 2025.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-07-05_QUEENS.webp`,
      description: "The Detweilers at The Queens Hotel, July 5, 2025.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-11-15_BLACKHORSE.webp`,
      description: "The Detweilers at The Blackhorse Pub, November 15, 2025.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2025-11-29_GARYS.webp`,
      description: "The Detweilers at Gary's Garage, November 29, 2025.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-02-07_OVFH.webp`,
      description: "The Detweilers at Olde Village Free House, February 7, 2026.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-05-08_OVFH.webp`,
      description: "The Detweilers at Olde Village Free House, May 8, 2026.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-06-13_OVFH.webp`,
      description: "The Detweilers at Olde Village Free House, June 13, 2026.",
    },
    {
      src: `${import.meta.env.BASE_URL}media/posters/Archive/2026-09-12_OVFH.webp`,
      description: "The Detweilers at Olde Village Free House, September 12, 2026.",
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
            alt={photo.description}
          />
        ))}
      </div>
    </section>
  </main>
)
}
export default Posters