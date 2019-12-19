import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  useEffect(() => {
    async function getName() {
      const res = await fetch("/api/yo");
      const { name } = await res.json();
      setName(name);
    }
    getName();
  }, []);
  return (
    <main>
      <h1>yo it's {name ? name : "Loading Name"}</h1>
    </main>
  );
}

export default App;
