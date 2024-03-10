import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Tables/Table";
import supabase from "./Suoabase";

function App() {
  const [AllUsers, setAllUsers] = useState([]);
  async function GettingUser() {
    const { data } = await supabase.from("users").select();
    setAllUsers(data)
  }
  useEffect(() => {
    GettingUser();
  }, []);

  return (
    <>
      <div className="app-title">سیستم مدیریت کاربران</div>
      <Table AllUsers={AllUsers} />
    </>
  );
}

export default App;
