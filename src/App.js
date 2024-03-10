import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Tables/Table";
import supabase from "./Suoabase";

function App() {
  const [AllUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    age: "",
    skills: "",
  });
  async function GettingUser() {
    const { data } = await supabase.from("users").select();
    setAllUsers(data);
  }
  useEffect(() => {
    GettingUser();
  }, []);
  const changehandler = (event) => {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  async function uploaddata() {
    await supabase
      .from("users")
      .insert({ username: user.username, age: user.age, skills: user.skills });
    GettingUser();
  }

  return (
    <>
      <div className="app-title">سیستم مدیریت کاربران</div>
      <form  onSubmit={uploaddata}>
        <input
          onChange={changehandler}
          type="text"
          name="username"
          placeholder="لطفا نام خود را وارد کنید"
        />
        <input
          onChange={changehandler}
          type="number"
          name="age"
          placeholder="سن خود را وارد کنید"
        />
        <input
          onChange={changehandler}
          type="text"
          name="skills"
          placeholder="مهارت ها"
        />
        <button className="addusers" type="submit">
          اضافه کردن کاربر جدید
        </button>
      </form>
      <Table AllUsers={AllUsers} setAllUsers={setAllUsers} />
    </>
  );
}

export default App;
