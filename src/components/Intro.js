import ButtonS from "./ButtonS";
function Intro() {
  return (
    <div className="section text-light intro">
      <div className="container text-center">
        <img
          className="avatar"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        />
        <h1>Abraham Renzha</h1>
        <p>Web Developer</p>
        <a target="_blank" href="#" className="social-media">
          <i class="bi bi-facebook"></i>
        </a>
        <a target="_blank" href="#" className="social-media">
          <i class="bi bi-instagram"></i>
        </a>
        <a target="_blank" href="#" className="social-media">
          <i class="bi bi-github"></i>
        </a>
        <div className="row">
          <div className="col">
            <ButtonS
              text="Hire Me"
              link="https://unsplash.com/photos/DjlKxYFJlTc"
              warna="warning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
