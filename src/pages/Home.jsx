function Home() {

  return (
    <>
      <main>
        <section className="hero">
          <img src={`${import.meta.env.BASE_URL}media/logo/DETWEILERS_website_pic.webp`} alt="The Detweilers on stage performing"/>
          <p>A rag tag assortment of gentlemen and scholars.  This supergroup will 
             cover all your favourites from the 60's to 2000's.  Gather your blocks, 
             pull up your socks, and get ready to rock.</p>
        </section>
        <section className="featured">
          <div className="featured-section">
            <h3>Guitarmonies!</h3>
            <div className="featured-videos">
              <iframe
                className="featured-video"
                src="https://www.youtube-nocookie.com/embed/0sR22YTEWRI"
                title="Reelin' guitarmonies (Steely Dan cover) - The Detweilers"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>         
              </iframe>
              <iframe
                className="featured-video"
                src="https://www.youtube-nocookie.com/embed/ZGpApCfbNkQ"
                title="Time guitarmonies (Pink Floyd cover) - The Detweilers"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>         
              </iframe>
            </div>
            <hr />
          </div>
          <div className="featured-section">
            <h3>Fan Favourites</h3>
            <div className="featured-videos">
              <iframe
                className="featured-video"
                src="https://www.youtube-nocookie.com/embed/KBNqayd0Jz0"
                title="Born to Run (Bruce Springsteen cover) - The Detweilers"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>         
              </iframe>
              <iframe
                className="featured-video"
                src="https://www.youtube-nocookie.com/embed/iLdCK7cO-uM"
                title="Time Warp (Rocky Horror Picture Show cover) - The Detweilers"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>         
              </iframe>
            </div>
            <hr />
          </div>
          <div className="featured-section">
            <h3>The Doctor is in...</h3>
            <div className="featured-videos">
              <iframe
                className="featured-video"
                src="https://www.youtube-nocookie.com/embed/_rCCGkCvefo"
                title="Mamma Let Him Play solo (Doucette cover) - The Detweilers"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>         
              </iframe>
              <iframe
                className="featured-video"
                src="https://www.youtube-nocookie.com/embed/g2SKWLFEfuI"
                title="White Room solo (Cream cover) - The Detweilers"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>         
              </iframe>
            </div>
            <hr />
          </div>
        </section>
        <section id="upcoming-shows" className="upcoming-shows">
            <h2>Upcoming Shows</h2>
            <p className="no-shows">Check back soon!</p>
            {/*}
            <div className="show-poster">
                <img
                    src={`${import.meta.env.BASE_URL}media/posters/poster_ov.jpg`}
                    alt="The Detweilers at Olde Village Free House"
                    style={{ display: 'none' }}
                />
            </div>

            <div className="show-text">
                <h4></h4>
                <p></p>
            
                <p className="show-description">
                    
                </p>
            </div>
            */}
        </section>
        <section id="contact" className="contact">
          <h2>Give us a shout!</h2>
          <section className="insta-email">
            <a
              href="https://www.instagram.com/thedetweilers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Detweilers on Instagram"
              className="instagram-link"
            >
              <img
                src={`${import.meta.env.BASE_URL}media/logo/insta_logo.png`}
                alt="Instagram logo"
              />
            </a>
            <p>thedetweilersrock@gmail.com</p>
          </section>
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