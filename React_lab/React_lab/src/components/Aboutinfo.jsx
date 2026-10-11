import React from "react";

function Aboutinfo() {
  return (
    <>
    <div className="main">
      <div className="history">
        <h2>
          <strong>History & Background</strong>
        </h2>
        <p>
          This city/state has a long and interesting history. You can write
          about how it was founded, important rulers, freedom movement event,and
          how tourism started growing here.
        </p>
        <p>
          Example:In the 18th century, this region became famous due to its
          strategic location and rich natural resources.over time,many{" "}
          <b>palaces</b> and <b>temples</b> were built, which are still visited
          by tourists today.
        </p>
      </div>

      <div className="culture">
        <h2>
          <strong>Culture & Lifestyle</strong>
        </h2>
        <p>
          people in this region speak multiple language such as Hindi,English
          and thier local language. They follow traditional customs,celebrate
          colourful festivals and enjoy local music and dance.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Tourism is not just about visiting monuments; it is
          about understanding the life,food and culture of the people living
          there.
        </p>
        <p>
          You can also describe local dress,flock song,arts and crafts. For
          example,many cities are known for <i>bandhani</i> cloths,{" "}
          <i>mirror work</i>, or wooden and metal handicrafts.
        </p>
      </div>
      <div className="climate">
        <h2>Climate Information</h2>
        <h3>West India:</h3>
      </div>
      <div className="firsttable">
        <h4>Average Climate of the Gujarat and Maharastra</h4>

        <table border="1" cellspacing="1" align="center">
          <thead align="center">
            <tr>
              <th>Season</th>
              <th>Month</th>
              <th>Temperature(Approx.)</th>
              <th>Tourist Crowd Level</th>
            </tr>
            <tbody align="center">
              <tr>
                <td>Summer</td>
                <td>March-June</td>
                <td>
                  30-40<sup>o</sup>C
                </td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Monsoon</td>
                <td>July-September</td>
                <td>
                  25-35<sup>o</sup>C
                </td>
                <td>High(if is s green/ hill area)</td>
              </tr>
              <tr>
                <td>Winter</td>
                <td>October-February</td>
                <td>
                  15-25<sup>o</sup>C
                </td>
                <td>High</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
      <div className="secoundtable">
        <h4>Average Climate of the Rajasthan</h4>

        <table border="1" cellspacing="1" align="center">
          <thead align="center">
            <tr>
              <th>Season</th>
              <th>Month</th>
              <th>Temperature(Approx.)</th>
              <th>Tourist Crowd Level</th>
            </tr>
            <tbody align="center">
              <tr>
                <td>Summer</td>
                <td>March-June</td>
                <td>
                  25-48<sup>o</sup>C
                </td>
                <td>low-Very hot-not suitable for tourism</td>
              </tr>
              <tr>
                <td>Monsoon</td>
                <td>July-September</td>
                <td>
                  25-35<sup>o</sup>C
                </td>
                <td>High-Desert looks green for a short time</td>
              </tr>
              <tr>
                <td>Winter</td>
                <td>October-February</td>
                <td>
                  0-22<sup>o</sup>C
                </td>
                <td>Best season for tourism</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
      <div className="north">
        <h3>North India:</h3>
      </div>
      <div className="upcla">
        <h4>Average Climate of the Utter Pradesh and Delhi</h4>

        <table border="1" cellspacing="1" align="center">
          <thead align="center">
            <tr>
              <th>Season</th>
              <th>Month</th>
              <th>Temperature(Approx.)</th>
              <th>Tourist Crowd Level</th>
            </tr>
            <tbody align="center">
              <tr>
                <td>Summer</td>
                <td>March-June</td>
                <td>
                  25-45<sup>o</sup>C
                </td>
                <td>Very hot</td>
              </tr>
              <tr>
                <td>Monsoon</td>
                <td>July-September</td>
                <td>
                  25-35<sup>o</sup>C
                </td>
                <td>Green scenery,but travel can be difficult</td>
              </tr>
              <tr>
                <td>Winter</td>
                <td>October-February</td>
                <td>
                  5-20<sup>o</sup>C
                </td>
                <td>Best season for tourism</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
      <div className="fact">
        <h2>
          <strong>Interesting Facts</strong>
        </h2>
        <p>Some interesting points about this destination:</p>
        <ul>
          <li>
            It may have a <strong>UNESCO World Heritage Site.</strong>
          </li>
          <li>
            It might be known as thr "City of Lakes","Pink City", or something
            similar.
          </li>
          <li>A famous movie or web series may have been shot here.</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Aboutinfo;
