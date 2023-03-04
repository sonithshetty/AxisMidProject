import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import classes from "./ReadTeacher.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ReadTeacher = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8082/teachers").then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  const setData = (id, firstName, lastName, email) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
  };

  const getData = () => {
    axios.get("http://localhost:8082/teachers").then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:8082/teachers/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <h3>Admin Name</h3>
        <h3>Back</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.content}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>FirstName</Table.HeaderCell>
                <Table.HeaderCell>LastName</Table.HeaderCell>
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
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                    <Table.Cell>
                      <Link to="/update-teacher">
                        <Button
                          color="green"
                          onClick={() =>
                            setData(
                              data.id,
                              data.firstName,
                              data.lastName,
                              data.email
                            )
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

export default ReadTeacher;
