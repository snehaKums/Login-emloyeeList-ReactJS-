import React from "react";
import { data } from "../data";
import './dashboard.css';
import history from '../router/history';

const Dashboard = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                name={data.name}
                age={data.age}
                gender={data.gender}
                email={data.email}
                phone={data.phoneNo}
              />
            </div>
          );
        })}
     <button
        type="button"
        onClick={(e) => {
        e.preventDefault();
        history.push('/Login-emloyeeList-ReactJS-')
        }}>Logout
    </button>
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Employee List</h2>
    </header>
  );
};

const Stock = ({ name, age, gender, email,phone }) => {
  if (!name) return <div />;
  return (
    <table>
      <tbody>

        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{age}</h5>
          </td>
          <td>
            <h4>{gender}</h4>
          </td>
          <td>
            <p>{email}</p>
          </td>
          <td>
            <p>{phone}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Dashboard;