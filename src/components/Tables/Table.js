import React from "react";
import "./Table.css";
import supabase from "../../Suoabase";

function Table() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>شماره داوطلب</th>
            <th>نام کاربری</th>
            <th>سن</th>
            <th>مهارت ها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>صبافرزانگان</td>
            <td>24</td>
            <td>html,css</td>
          </tr>
          <tr>
            <td>1</td>
            <td>صبافرزانگان</td>
            <td>24</td>
            <td>html,css</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
