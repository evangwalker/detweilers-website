import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <main>
        <section className="hero">
          <img src={`${import.meta.env.BASE_URL}media/images/detweilers_homepage_background.webp`} />
          <p>A rag tag assortment of gentlemen and scholars.  This supergroup will 
             cover all your favourites from the 60's to 2000's.  Gather your blocks, 
             pull up your socks, and get ready to rock.</p>
        </section>
        <iframe
          className="featured-video"
          src="https://www.youtube-nocookie.com/embed/8r-hUuzFyOo"
          title="Roadhouse Blues (The Doors cover) - The Detweilers"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>         
        </iframe>
        <section id="upcoming-shows" className="upcoming-shows">
            <h2>Upcoming Shows</h2>

            <div className="show-poster">
                <img
                    src={`${import.meta.env.BASE_URL}media/posters/poster_ov.jpg`}
                    alt="The Detweilers at Olde Village Free House"
                />
            </div>

            <div className="show-text">
                <h4>Olde Village Free House</h4>
                <p>196 Main St S, Newmarket, ON L3Y 3Y9</p>
            
                <p className="show-description">
                    The Detweilers are back at our favourite Newmarket watering hole!
                    We've been playing here since we were young Warthogs clearing the
                    Savannah after every meal. Come join us for good beer, good tunes
                    and a little slice of Hakuna Matata.
                </p>
            </div>
        </section>
        <section id="contact">
          <h2>Give us a shout!</h2>
          <form 
            action="https://formspree.io/f/mqpkzbdb"
            method="POST"
          >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Home