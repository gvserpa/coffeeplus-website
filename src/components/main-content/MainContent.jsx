import { memo } from 'react';
import './index.css'

const MainContent = () => {
  return (
    <main>
        <div className="main-content">
            <h1>Where Every Sip Feels Like Home.</h1>
            <p>Comforting pause in your day, where great taste meets heartfelt hospitality.</p>
            <button>Order now !</button>
        </div>
    </main>
  );
};

export default memo(MainContent);