import React from "react";
import "./Table.css";


function Table({ AllUsers }) {
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
                <button className="actions-btn">حذف</button>
                <button className="actions-btn">ویرایش</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
