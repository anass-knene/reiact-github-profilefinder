import React from "react";
import "./style.scss";

export default function User({ userData }) {
  console.log(userData);
  return (
    <div className="user">
      <div className="image">
        <img src={userData && userData.avatar_url} width="200px" alt="img" />
      </div>
      <table className="table">
        <tbody className="tbody">
          <tr>
            <td>Name :{userData.name}</td>
            <td>login : {userData.login}</td>
            <td>
              location :
              {userData.location ? userData.location : "no location found "}
            </td>
          </tr>
          <tr>
            <td>Public Repos : {userData.public_repos}</td>
            <td>Followers {userData.followers}</td>
            <td>login : {userData.login}</td>
          </tr>
          <tr>
            <td>Repositories {userData.repos_url}</td>
            <td>Repo URL {userData.url}</td>
            <td>login : {userData.login}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
