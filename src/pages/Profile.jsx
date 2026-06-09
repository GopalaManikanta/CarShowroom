import profileImg from "../assets/112.JPG.jpeg";

export default function Profile() {
  return (
    <div className="profile-container">

      <h1 className="profile-heading">
        My Profile
      </h1>

      <div className="profile-card">

        <div className="profile-left">
          <img
            src={profileImg}
            alt="profile"
            className="profile-img"
          />
        </div>

        <div className="profile-right">

          <h2>Gopala Manikanta</h2>

          <p><strong>Email:</strong> manikanta@gmail.com</p>

          <p><strong>Phone:</strong> 9100338005</p>

          <p><strong>Role:</strong> Frontend Developer</p>

          <p><strong>Location:</strong> Andhra Pradesh</p>

          <p><strong>Skills:</strong> HTML, CSS, JavaScript, React JS</p>

          <p><strong>Project:</strong> Premium Car Showroom</p>

          <p>
            Passionate frontend developer
            interested in building responsive
            and user-friendly web applications.
          </p>

        </div>

      </div>

    </div>
  );
}