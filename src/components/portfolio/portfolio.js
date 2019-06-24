import React from 'react';
import './portfolio.css';
import portfolioData from "./portfolio-data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Portfolio() {
    return(
      <Router>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <Link class="portfolio-item" to="/portfolioItem/ + itemId">
                <div className="card">
                <div className="card-image">
                  {/* <img class="site-cover" v-bind:src="website.img"> */}
                  A website
                </div>
                <div className="card-content portfolio-card-content">
                  {/* <span class="col s9 m9 card-title">{{website.title}}</span><span class="col s3 m3"><img style="width:90px; float:right; position: relative;" :src="website.client"></span> */}
                </div>
              </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </Router>
    );
}