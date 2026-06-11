function Home() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <h1>Maleesha Piyumini</h1>

          <h2>
            Software Engineering & AI/Data Science Undergraduate in Institute of Technology, University of Moratuwa(NDT)
          </h2>

          <p>
            Passionate about Software Engineering,
            Artificial Intelligence, Machine Learning,
            Computer Vision and Web Development.
          </p>

          <a href="/projects" className="btn">
            View Projects
          </a>
        </div>

        <div className="hero-image">
           <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile" />
        </div>

      </div>
    </section>
  );
}

export default Home;