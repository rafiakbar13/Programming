import "./App.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";
import Avatar from "./Avatar";
function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("projects").select();
    setProjects(data);
    console.log(data);
  }

  return (
    <ul>
      {projects.map((country) => (
        <li key={country.name}>{country.title}</li>
      ))}
    </ul>
  );
}

export default App;
