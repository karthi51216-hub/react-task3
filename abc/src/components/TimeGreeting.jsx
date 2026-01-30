
// src/components/TimeGreeting.jsx
function TimeGreeting() {
  const hour = new Date().getHours();

  let greeting = "";
  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else {
    greeting = "Good Evening 🌙";
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{greeting}</h2>
      <p>Current Hour: {hour}</p>
    </div>
  );
}

export default TimeGreeting;
