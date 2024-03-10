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
  const [user2, setUser2] = useState({
    id: "",
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
  const changehandler2 = (event) => {
     setUser2((prevFormData) => {
       return {
         ...prevFormData,
         [event.target.name]: event.target.value,
       };
     });
  };
  async function updateuser(USERID2) {
    const { data, error } = await supabase
      .from("users")
      .update({ id: user2.id, username: user2.username, age: user2.age, skills:user2.skills})
      .eq("id", USERID2);
    GettingUser();
    
  }
  return (
    <>
      <div className="app-title">سیستم مدیریت کاربران</div>
      <form onSubmit={uploaddata}>
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
      {/* form 2 */}
      <form
        onSubmit={() => {
          updateuser(user2.id);
        }}
      >
        <input
          onChange={changehandler2}
          type="text"
          name="username"
          placeholder="لطفا نام خود را وارد کنید"
          defaultValue={user2.username}
        />
        <input
          onChange={changehandler2}
          type="number"
          name="age"
          placeholder="سن خود را وارد کنید"
          defaultValue={user2.age}
        />
        <input
          onChange={changehandler2}
          type="text"
          name="skills"
          placeholder="مهارت ها"
          defaultValue={user2.skills}
        />
        <button className="addusers" type="submit">
              ویرایش کاریر
        </button>
      </form>

      <Table AllUsers={AllUsers} setAllUsers={setAllUsers} setUser2={setUser2} />
    </>
  );
}

export default App;
