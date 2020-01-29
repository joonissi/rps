import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faCheck, faTimes ,faHandRock, faHandScissors, faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col, Card } from "antd";
import "antd/dist/antd.css";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      winner: null
    };
  }

  render() {

      const calculateAnswer = (human) => {
        let cpu = Math.random()

        if (cpu < 0.34) {
          cpu = "rock";
        } else if (cpu <= 0.67) {
          cpu = "paper";
        } else {
          cpu = "scissors";
        }

        if (cpu === human) {
          this.setState({ winner: null})
        }
        if (cpu === "rock") {
          if (human === "scissors") {
            this.setState({winner: false})
          } else {
            this.setState({winner: true})
          }
        }
        if (cpu === "paper") {
          if (human === "rock") {
            this.setState({winner: false})
          } else {
            this.setState({winner: true})
          }
        }
        if (cpu === "scissors") {
          if (human === "rock") {
            this.setState({winner: true})
          } else {
            this.setState({winner: false})
          }
        }
      }

      const winner = this.state.winner

    return (
      <div className="App">
        <Row>
          <Col md={{ span: 12, offset: 6 }}>
            <Card style={{ textAlign: "center" }}>
              {winner === null ? (
                <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
              ) : (
                winner === true ? (
                  <FontAwesomeIcon  style={{ color: 'green'}} icon={faCheck}></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon  style={{ color: 'red'}} icon={faTimes}></FontAwesomeIcon>
                )
              )}
              
              <p>Valitse kivi, paperi tai sakset!</p>
              <Button size={"large"} onClick={() => calculateAnswer('rock')}>
                <FontAwesomeIcon icon={faHandRock}></FontAwesomeIcon>
              </Button>
              <Button size={"large"} onClick={() => calculateAnswer('paper')}>
                <FontAwesomeIcon icon={faHandPaper}></FontAwesomeIcon>
              </Button>
              <Button size={"large"} onClick={() => calculateAnswer('scissors')}>
                <FontAwesomeIcon icon={faHandScissors}></FontAwesomeIcon>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default App;
