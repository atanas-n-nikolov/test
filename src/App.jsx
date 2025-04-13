
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const targetDate = new Date('2025-06-07T17:00:00');
  const [now, setNow] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setNow(currentTime);
      const difference = targetDate - currentTime;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className="invite-container">
      <div className="invite-card">
        <img
          className="invite-image"
          src="/test.jpg"
          alt="Event"
        />
        {timeLeft.days} дни, {timeLeft.hours} часа, {timeLeft.minutes} минути, {timeLeft.seconds} секунди
        <h1 className="invite-title">You're Invited!</h1>
        <p className="invite-text">
          Join us for a special evening of joy, laughter, and celebration!
        </p>
        <p className="invite-details">
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40aa858885a28299:0xbe0e608a52b3ccca?sa=X&ved=1t:8290&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="invite-link"
          >
            📍 Location: 40 Bratya Buxton Boulevard, Sofia, Bulgaria <br /></a>
          📅 Date: June 07, 2025 <br />
          🕗 Time: 17:00
        </p>
      </div>
    </div>
  )
}

export default App
