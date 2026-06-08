import profileImg from "../assets/112.JPG.jpeg";

export default function Profile() {
  return (
    <div className="page">
      <h1>My Profile</h1>

      <div className="profile-card">
        <img
          src={profileImg}
          alt="profile"
          className="profile-img"
        />

        <h2>Manikanta</h2>
        <p>Email: manikanta@gmail.com</p>
        <p>Phone: 9100338005</p>
        <p>Role: Car Enthusiast</p>
        <p>Location: Andhra Pradesh</p>
      </div>
    </div>
  );
}