type HeaderProps = {
  onAddEventClick: () => void;
};

function Header({ onAddEventClick }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <h1>ReadyUp</h1>
        <p>AI Meeting Reminder & Prep Assistant</p>
      </div>

      <button className="primary-button" onClick={onAddEventClick}>
        Add Event
      </button>
    </header>
  );
}

export default Header;