import { Component } from "react";

import "./index.css";

class Home extends Component {
  state = { profileData: [] };

  renderProfile = () => {
    const userDetails = JSON.parse(localStorage.getItem("user_data"));

    const profileData = userDetails[0];

    const updatedData = {
      name: profileData.user_firstname,
      city: profileData.user_city,
      id: profileData.user_id,
      phone: profileData.user_phone,
      zipCode: profileData.user_zipcode,
      email: profileData.user_email,
    };

    console.log(profileData);

    return (
      <div className="profileCard">
        <img className="profileImage" alt="profile" />
        <h2 className="profileNameHeading">
          <span>Name: </span>
          {updatedData.name}
        </h2>
        <p className="details">
          <span className="span">userId : </span>
          {updatedData.id}
        </p>

        <p className="details">
          <span className="span">Email : </span>
          {updatedData.email}
        </p>

        <p className="details">
          <span className="span">Phone : </span>
          {updatedData.phone}
        </p>

        <p className="details">
          <span className="span">city : </span>
          {updatedData.city}
        </p>

        <p className="details">
          <span className="span">Zip code : </span>
          {updatedData.zipCode}
        </p>
      </div>
    );
  };

  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

export default Home;
