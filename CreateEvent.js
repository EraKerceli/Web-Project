import "./styles/style.css";



export default function CreateEvent() {
  return (
    <>
      <header className="top-header">
        <h1>Krijo Event</h1>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Hobby Groups</a>
          <a href="#">Create Event</a>
        </nav>
      </header>

      <div className="create-event-wrapper">
        <div className="form-card">
          <h2 className="form-title">Krijo Event të Ri</h2>
          <p className="form-subtitle">Plotëso të dhënat më poshtë</p>

          <form>
            <input type="text" placeholder="📝 Titulli i eventit" required />
            <input type="text" placeholder="📍 Qyteti" required />
            <input type="text" placeholder="📞 Numër kontakti" />
            <input type="date" />
            <input type="number" placeholder="👥 Numri maksimal i pjesëmarrësve" />

            <button type="submit">Krijo Event</button>
            <p className="form-note">Eventin mund ta ndryshosh ose fshish më vonë.</p>
          </form>
        </div>
      </div>
    </>
  );
}
