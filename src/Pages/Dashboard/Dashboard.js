import React from "react";
import Card from "../../Components/Card/Card";

function Dashboard() {
  const personajes = [
    { title: "GOKU", description: "100%\nEs un guerrero." },
    { title: "VEGETA", description: "80%\nEs un guerrero." },
    { title: "PICCOLO", description: "60%\nEs un guerrero." },
    { title: "PICCOLO", description: "60%\nEs un guerrero." },
  ];

  return (
    <section className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      <div className="dashboard-cards">
        {personajes.map((personaje, index) => (
          <Card key={index} {...personaje} />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
