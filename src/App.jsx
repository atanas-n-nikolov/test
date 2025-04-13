
import './App.css'

function App() {
  return (
    <div className="invite-container">
      <div className="invite-card">
        <img
          className="invite-image"
          src="/test.jpg"
          alt="Event"
        />
        <h1 className="invite-title">You're Invited!</h1>
        <p className="invite-text">
          Join us for a special evening of joy, laughter, and celebration!
        </p>
        <p className="invite-details">
          📍 Location: Sofia, Bulgaria <br />
          📅 Date: June 07, 2025 <br />
          🕗 Time: 12:00
        </p>
      </div>
    </div>
  )
}

export default App
