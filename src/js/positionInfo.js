import React, {Component} from 'react';
import {Row, Col, Card, CardImg,CardSubtitle, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input} from 'reactstrap';

const PositionInfo = ( props ) =>{
  let job = props.job;
  let jobDate = new Date(job.created_at);

  return (
    <Col md={3} className="py-3">
      <Card   className="text-center h-100">
        <CardImg top className="card_img d-none d-md-block"  src={job.company_logo ? job.company_logo:"https://placeholdit.imgix.net/~text?txtsize=23&txt=Image_not_avaliable&w=256&h=200"} alt="Card image cap" />
        <CardBody>
          <Row>
          <Col xs={6} className="d-lg-none d-md-none">
            <img  className="card_img card_img_left "  src={job.company_logo ? job.company_logo:"https://placeholdit.imgix.net/~text?txtsize=23&txt=Image_not_avaliable&w=256&h=200"} alt="Card image cap" />
          </Col>

          <Col xs={6} sm={6} md={12}>
            <CardTitle>{job.title}</CardTitle>
              <CardSubtitle> <a href={job.company_url}> {job.company}</a> </CardSubtitle>
              <CardText>Created at: {jobDate.getDay()+"/"+jobDate.getMonth()+"/"+jobDate.getFullYear()}</CardText>
              <CardText>Type: {job.type}</CardText>              
              <Button size="sm" color="primary" >See more</Button>

              <FormGroup check className="mt-2">
                <Label check>
                  <Input type="checkbox" name="full_time" /> Favorites
                </Label>
              </FormGroup>
          </Col>
            
          </Row>  
          

        </CardBody>
      </Card>
    </Col>
  )
}

  export default PositionInfo;