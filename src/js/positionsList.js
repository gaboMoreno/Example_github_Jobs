import React, {Component} from 'react';
import PositionInfo from './positionInfo';
import {FormGroup, Label, Progress, InputGroup,InputGroupText, InputGroupAddon,Input,Button,Row, Col,Card, CardText, CardBody,CardHeader } from 'reactstrap';


  class PositionsList extends Component{


    render(){
        return (
          <React.Fragment>
            <Row>
              <Card className="w-100">
                <CardHeader tag="h3">
                    <Row>
                        <Col md={{size:6, offset:3}}>
                            <InputGroup >
                                <Input placeholder="Description..." id="description" name="description" onKeyPress={this.props.changeFilterText}/>
                                <InputGroupAddon addonType="append">
                                    <Button color="primary" onClick={this.props.doSearch} >Go!</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col md={4}>
                        <p>Results</p>
                    </Col>
                    <Col md={4}>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend" name="ubication" >
                          <InputGroupText>Ubication</InputGroupText>
                        </InputGroupAddon>
                        <Input name="location" id="location" onKeyPress={this.props.changeFilterText}/>
                      </InputGroup>
                    </Col>
                    <Col md={4} className="text-center" >
                       <FormGroup check className="mt-2">
                        <Label check>
                          <Input type="checkbox" onChange={this.props.changeFilterInput} id="full_time" name="full_time"/> Full Time
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    { this.props.positions.length == 0 && !this.props.loading && <Col><p> Sorry, no results avaliable </p> </Col>}  
                    { this.props.loading && 
                        <Col lg={12}>
                            <p> Loading... </p> 
                            <Progress animated color="success" value="100" />
                        </Col>
                         }  

                      { this.props.positions.map(position => <PositionInfo key={position.id} job={position}/>) }
                  </Row>
                </CardBody>
              </Card>
            </Row>
          
          </React.Fragment>
        )

    }
  }

export default PositionsList;