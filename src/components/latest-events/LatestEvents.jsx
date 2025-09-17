import { memo } from "react";
import "./index.css";

const LatestEvents = () => {
  return (
    <div className="LatestEvents">
      <div className="events-title">
        <h2>Latest CoffeePLUS's Events</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="box-1">

            <div className="section-card">
            <h4>Latte & Lyrics</h4>
            <div className="section-card-2">
              <p>Live acoustic sessions every Friday night, pairing music</p>
              <a>See more</a>
              </div>
            </div>
          </div>
          <div className="box-2">

            <div className="section-card">
            <h4>Latte & Lyrics</h4>
            <div className="section-card-2">
              <p>Live acoustic sessions every Friday night, pairing music</p>
              <a>See more</a>
              </div>
            </div>
          </div>
          <div className="box-3">

            <div className="section-card">
            <h4>Latte & Lyrics</h4>
            <div className="section-card-2">
              <p>Lidivcoustic sessions every Friday night, pairing music</p>
              <a>See more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(LatestEvents);
