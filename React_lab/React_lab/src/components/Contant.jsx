import React from "react";

function Contant() {
  return (
    <>
      <div className="fullmain">
        <div className="startcontant">
          <h2>Incredible India:</h2>
          <p>
            <strong>
              "Discover a land where every few miles, the language changes, but
              the smiles remain the same."
            </strong>
          </p>
        </div>
        <div className="firstpra">
          <p>
            "Embark on a journey through the timeless beauty of India, a land
            where ancient traditions blend seamlessly with modern vibrancy. From
            the majestic snow-capped peaks of the Himalayas in the North to the
            serene backwaters of Kerala in the South, every corner offers a
            unique story.
          </p>
          <p>
            Experience the royal heritage of Rajasthan, find spiritual peace on
            the ghats of Varanasi, or relax on the pristine beaches of Gujarat.
            With its kaleidoscope of diverse cultures, mouth-watering cuisines,
            and breathtaking landscapes, a trip to India is not just a
            vacation—it is an experience that awakens the soul. Come, explore
            the magic of "Incredible India."
          </p>
        </div>

        <div className="container">
          <img
            src="./images/incredibleindia.png"
            alt="image loding"
          />
        </div>

        <div className="facts">
          <h2>Quick Facts (Definition List)</h2>
          <p>State:</p>
          <p>&nbsp;&nbsp;&nbsp;Replace with the state of your chosen city.</p>
          <p>Best Season:</p>
          <p>&nbsp;&nbsp;&nbsp;Winter or Monsoon (you can update this).</p>
          <p>Famous For:</p>
          <p>
            &nbsp;&nbsp;&nbsp;Palaces, lakes, festivals, food, handicrafts, etc.
          </p>
        </div>

        <div className="toucat">
          <h2>Tourist Categories (Unordered List)</h2>
          <ul>
            <li>Historical monuments</li>
            <li>Natural attractions (lakes,hills,beaches)</li>
            <li>Religious and spiritual places</li>
            <li>Shopping and local markets</li>
            <li>Food streets and night life</li>
          </ul>
        </div>

        <div className="planlist">
          <h2>Suggested 3-Day Plan (Ordered List)</h2>
          <ol>
            <li>Day - 1 City palace and nearly attractions</li>
            <li>Day - 2 Temples, museums and local market</li>
            <li>Day - 3 Lakeside / nature spot and food street</li>
          </ol>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Contant;
