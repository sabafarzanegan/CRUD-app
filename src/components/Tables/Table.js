import React from "react";
import "./Table.css";

function Table({ AllUsers, setAllUsers, setUser2 }) {
  const delethandler = (USERID) => {
    const Newuser = AllUsers.filter((user) => user.id !== USERID);
    setAllUsers(Newuser);
  };
  const editedhandler = (USERID2) => {
    AllUsers.map((user) => {
      if (user.id === USERID2) {
        setUser2({
          id: user.id,
          username: user.username,
          age: user.age,
          skills: user.skills,
        });
      }
    });
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>شماره داوطلب</th>
            <th>نام کاربری</th>
            <th>سن</th>
            <th>مهارت ها</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {AllUsers.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.skills}</td>
              <td>
                <button
                  className="actions-btn"
                  onClick={() => {
                    delethandler(user.id);
                  }}
                >
                  حذف
                </button>
                <button
                  onClick={() => {
                    editedhandler(user.id);
                  }}
                  className="actions-btn"
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
