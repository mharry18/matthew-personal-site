'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container className="pt-5 text-center mt-5">
      <h1>PowerBI Porfolio</h1>
      <Row className="mt-5">
        <Col lg={12} className="m2 p-4 border rounded background-light">
          <p className="h2 mb-4">Nashville Weather Report</p>
          <p className="mb-4">
            I built this PowerBI Report based on data from Open Weather Map. It
            has data in it for Nashville from January 1st, 1979 through
            September 5th, 2023.
          </p>
          <p className="mb-4">
            The second page, Temperature Trends, has buttons to control which
            decade average is shown on the graph and a filter pane which will
            allow you to filter down to any day, month, or year.
          </p>
          <div className="embed-responsive embed-responsive-25by16">
            <iframe
              title="Report Section"
              className="embed-responsive-item"
              src="https://app.powerbi.com/view?r=eyJrIjoiZDMyY2Q2N2QtYzBjNC00MmI2LTk3NWMtZTVkYmM0ZGQ4YTFhIiwidCI6IjI0ZWY5MTJhLTdjZjctNDU5Zi1iODQxLTRiMTg3ZDdlZTRjNSJ9"
              allowFullScreen={true}
              width="100%"
              height="600"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
