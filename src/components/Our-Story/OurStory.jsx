import { memo } from "react";
import "./index.css";
import storyPhoto from "../../assets/story-photo-1.png";
import storyPhoto2 from "../../assets/products-photo-2.png";

const OurStory = () => {
  return (
    <div className="our-story">
      <div className="story-title">
        <p>Learn about our shop by reading</p>
        <div className="title">
          <div className="divider">
            <hr />
          </div>
          <h2>Our Story</h2>
          <div className="divider">
            <hr />
          </div>
        </div>
      </div>
      <div className="story-description">
        <div className="story-photo">
          <img src={storyPhoto} />
        </div>
        <div className="story-desc">
          <p>
            At CoffeePlus, our journey began with a simple passion: bringing
            people together over the perfect cup of coffee. From carefully
            sourcing premium beans to crafting blends that highlight unique
            flavors, every step of our process is guided by quality and care.
            What started as a small idea quickly grew into a community-driven
            brand that values connection, sustainability, and authentic
            experiences. We believe coffee is more than just a drink—it’s a
            moment to share, reflect, and create memories. CoffeePlus is here to
            make every cup meaningful, inspiring warmth and conversation
            wherever it’s enjoyed.
          </p>
          <br />
          <p>
            Over the years, we have built strong relationships with farmers,
            roasters, and coffee lovers who share our vision. By supporting
            ethical sourcing and environmentally friendly practices, we ensure
            every cup contributes to something greater. Whether you are starting
            your morning, meeting with friends, or taking a quiet break,
            CoffeePlus delivers exceptional taste and a story you can feel proud
            to join. Together, we celebrate the art of coffee and the
            connections it creates.
          </p>
        </div>
      </div>
      <div className="check-products">
        <div className="products-desc">
          <h2>Check Our Products</h2>
          <p>
            Over the years, we have built strong relationships with farmers,
            roasters, and coffee lovers who share our vision. By supporting
            ethical sourcing and environmentally friendly practices, we ensure
            every cup contributes to something greater. Whether you are starting
            your morning, meeting with friends, or taking a quiet break,
            CoffeePlus delivers exceptional taste and a story you can feel proud
            to join. Together, we celebrate the art of coffee and the
            connections it creates.
          </p>
          <button>See menu</button>
        </div>
        <div className="products-photo">
          <img src={storyPhoto2} />
          <h4>Homebrew Comfort</h4>
          <p>Rich aroma, gentle sweetness</p>
          <button>Order now</button>
        </div>
      </div>
    </div>
  );
};

export default memo(OurStory);
