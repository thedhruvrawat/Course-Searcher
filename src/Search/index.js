import React, { Component } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";


import blankImg from "./blank.gif";

import "./style.css";

import courseList from "./courses.json";

class App extends Component {
  state = {
    search: ""
  };

  rendercourse = course => {
    const { search } = this.state;
    var code = course.code.toLowerCase();
    var dep = course.dep;
    /*if( search !== "" && course.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card className="card">
          <CardBody className={dep}>
            <CardTitle title={course.id}>
              {course.code}
            </CardTitle>
            <CardText className="title">{course.name}</CardText>
            <p className="ic">{course.ic}</p>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredcourses = courseList.filter(course => {
      return course.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    Search for a course
                  </h3>
                </center>
              </div>
              <div className="col">
                <Input
                  label="Enter the name of the course"
                  icon="search" className="in"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredcourses.map(course => {
                return this.rendercourse(course);
              })}
            </div>
          </div>
        </main>
        
      </div>
    );
  }
}

export default App;
