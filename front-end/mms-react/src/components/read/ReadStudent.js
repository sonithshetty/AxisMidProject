import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import classes from "./ReadStudent.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ReadStudent = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8082/students").then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  const setData = (id, name, std, email) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("std", std);
    localStorage.setItem("email", email);
  };

  const getData = () => {
    axios.get("http://localhost:8082/students").then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:8082/students/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <h3>Admin Name</h3>
        <Link to={"/admin-home"} className={classes.link}>
          Back
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.content}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Std</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {apiData.map((data) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.std}</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                    <Table.Cell>
                      <Link to="/update-student">
                        <Button
                          color="green"
                          onClick={() =>
                            setData(data.id, data.name, data.std, data.email)
                          }
                        >
                          Update
                        </Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Button color="red" onClick={() => onDelete(data.id)}>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ReadStudent;
