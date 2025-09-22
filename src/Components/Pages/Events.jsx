function Events() {
    return ( 
        <>
  <h1 className="pl-0 md:pl-20 text-2xl font-bold">Upcoming Events</h1>
  <br />
  <center>
    <div
      className="onesignal-customlink-container"
      style={{
        border: "0px solid",
        borderRadius: 15,
        paddingTop: 5,
        width: 300
      }}
    />
  </center>
  <div className="events-container">
    <div className="event-card">
      <img
        className="event-thumb"
        src="https://hackodisha-4.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fd7d594eaf4ac4a4db9cd998c65c0fc9a%2Fassets%2Fcover%2F381.png&w=1440&q=100"
        alt="Event Thumbnail"
      />
      <div className="event-info">
        <h3 className="event-title">HackOdisha 5.0</h3>
        <p className="event-date">
          <i className="fa-solid fa-calendar" />: Sep 6 - 7, 2025
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-location-dot" />: Online
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-trophy" />: $7,840
        </p>
        <p className="event-desc">
          <b>Fees</b>: Free
        </p>
        <p className="event-desc">
          <b>Type:</b> Hackthon
        </p>
      </div>
      <a
        href="https://hackodisha-4.devfolio.co/"
        target="_blank"
        className="event-btn"
      >
        Register Now
      </a>
      <div className="share-group">
        <button className="share-btn" data-url="#" title="Share Link">
          <i className="fa-solid fa-arrow-up-from-bracket" />
        </button>
      </div>
    </div>
    <div className="event-card">
      <img
        className="event-thumb"
        src="/assets/images/event2.png"
        alt="Event Thumbnail"
      />
      <div className="event-info">
        <h3 className="event-title">Forge the Future</h3>
        <p className="event-date">
          <i className="fa-solid fa-calendar" />: Sep 07, 2025
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-location-dot" />: Online
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-trophy" />: ₹300000
        </p>
        <p className="event-desc">
          <b>Fees</b>: Free
        </p>
        <p className="event-desc">
          <b>Type:</b> Hackthon
        </p>
      </div>
      <a
        href="https://elastic.hackerearth.com/"
        target="_blank"
        className="event-btn"
      >
        Register Now
      </a>
      <div className="share-group">
        <button className="share-btn" data-url="#" title="Share Link">
          <i className="fa-solid fa-arrow-up-from-bracket" />
        </button>
      </div>
    </div>
    <div className="event-card">
      <img
        className="event-thumb"
        src="/assets/images/eventcover.png"
        alt="Event Thumbnail"
      />
      <div className="event-info">
        <h3 className="event-title">Ctrl+Space</h3>
        <p className="event-date">
          <i className="fa-solid fa-calendar" />: 24 Aug 2025
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-location-dot" />: Newton School of
          Technology, ADYPU Pune (Online)
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-trophy" />: ₹60,000
        </p>
        <p className="event-desc">
          <b>Fees</b>: Free
        </p>
        <p className="event-desc">
          <b>Type:</b> Hackthon
        </p>
      </div>
      <a
        href="https://unstop.com/hackathons/ctrlspace-newton-school-of-technology-adypu-pune-1533848"
        target="_blank"
        className="event-btn"
      >
        Register Now
      </a>
      <div className="share-group">
        <button className="share-btn" data-url="#" title="Share Link">
          <i className="fa-solid fa-arrow-up-from-bracket" />
        </button>
      </div>
    </div>
    <div className="event-card">
      <img
        className="event-thumb"
        src="/assets/images/event1.png"
        alt="Event Thumbnail"
      />
      <div className="event-info">
        <h3 className="event-title">IDEA Bootcamp &amp; Pitch Fest 2025</h3>
        <p className="event-date">
          <i className="fa-solid fa-calendar" />: 6th, 7th &amp; 8th Aug 2025
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-location-dot" />: Seminar Hall, ADYPSOE,
          Lohegaon
        </p>
        <p className="event-desc">
          <i className="fa-solid fa-trophy" />: Exciting Prizes and Certificates
        </p>
        <p className="event-desc">
          <b>Fees</b>: ₹ 49
        </p>
        <p className="event-desc">
          <b>Type:</b> Event
        </p>
      </div>
      <a
        href="https://forms.gle/A3jYQcqP3dTGsK8v7"
        target="_blank"
        className="event-btn"
      >
        Register Now
      </a>
      <div className="share-group">
        <button className="share-btn" data-url="#" title="Share Link">
          <i className="fa-solid fa-arrow-up-from-bracket" />
        </button>
      </div>
    </div>
  </div>
  <div className="pb-30 md:pb-0"></div>
</>


     );
}

export default Events;