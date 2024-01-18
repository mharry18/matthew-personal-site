import { Rowdies } from 'next/font/google';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import './index.css';

const Page = () => {
  return (
    <div className="body pt-2 pb-2 pr-2n">
      <div className="page">
        <hr />
        <Container fluid className="justify-content-center text-center">
          <Row lg={'auto'} className="justify-content-center">
            <h1>Matthew Harry</h1>
          </Row>
          <Row md={'auto'} className="justify-content-center mt-2">
            <h3 className="text-primary test-text">
              <u>615-510-7781</u>
            </h3>
            <span className="test-text">&#124;</span>
            <h3 className="text-primary test-text">
              <u>matthew.s.harry11@gmail.com</u>
            </h3>
            <span className="test-text">&#124;</span>
            <h3 className="text-primary test-text">
              <a
                href="https://www.linkedin.com/in/matthew-h-14515397/"
                target="_blank"
              >
                <u>linkedin.com/matthew-harry</u>
              </a>
            </h3>
          </Row>
        </Container>
        <hr />
        <div className="container">
          <Row className="justify-content-center text-center">
            <h2>Skills</h2>
          </Row>
        </div>
        <hr />
        <div className="container-fluid mb-n4">
          <div className="row text-center font-weight-bold">
            <div className="col-4">
              <ul className="list-inline mx-auto">
                <li>Microsoft Excel</li>
                <li>Microsoft PowerPoint</li>
                <li>Microsoft Visio</li>
                <li>PowerBI</li>
                <li>PowerDesigner</li>
                {/* <!--<li>HTML</li>--> */}
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-inline mx-auto justify-content-center">
                <li>MS SQL Server</li>
                <li>Teradata</li>
                <li>Cloudera Impala</li>
                <li>Data Architecture</li>
                <li>Ataccama RDM & DQC</li>
                {/* <!--<li>CSS</li>--> */}
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-inline mx-auto justify-content-center">
                <li>Data Analysis</li>
                <li>Healthcare Reporting</li>
                <li>Financial Reporting</li>
                <li>Visual Basic for Applications</li>
                <li>Budgeting</li>
                {/* <!--<li>Bootstrap 4</li>--> */}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <Row className="justify-content-center text-center">
            <h2>Professional Experience</h2>
          </Row>
        </div>
        <hr />
        <div className="container-fluid justify-content-center align-items-center">
          <Row
            md={'auto'}
            className="row justify-content-between ms-1 me-1 job-info"
          >
            <div className="col-5">
              <h4>
                <u>HCA Healthcare</u>
              </h4>
              <h5>Senior Product Analyst</h5>
            </div>
            <div className="col-7 text-end">
              <h4 className="font-weight-normal date">
                December 2021 &mdash; October 2023
              </h4>
              <h5></h5>
            </div>
          </Row>
          <Row className="justify-content-between ms-1 me-1">
            <div className="col-lg-12 job-info">
              <p className="text-left">
                <ul>
                  <li>
                    Gathered requirements from business stakeholders for
                    reporting on care management applications
                  </li>
                  <li>
                    Created reports in Power BI using sources such as MS SQL
                    Server, Teradata, Microsoft Azure for use by Oncology, ER
                    Follow Up, and Cardiovascular teams
                  </li>
                  <li>
                    Designed a dynamic row level security solution in Power BI
                    that made access granting easier to control and maintain
                  </li>
                  <li>
                    Created reporting tables in Microsoft Azure from disparate
                    sources
                  </li>
                  <li>
                    Sourced data for reporting from various systems including
                    Epic, Meditech, and Cerner EMRs
                  </li>
                </ul>
              </p>
            </div>
          </Row>
        </div>
        <div className="container-fluid justify-content-center align-items-center">
          <Row className="row justify-content-between ms-1 me-1 job-info">
            <div className="col-5">
              <h4>
                <u>Ardent Health Services</u>
              </h4>
              <h5>Reimbursement Analyst</h5>
            </div>
            <div className="col-7 text-end">
              <h4 className="font-weight-normal date">
                September 2020 &mdash; December 2021
              </h4>
            </div>
          </Row>
          <Row className="justify-content-between ms-1 me-1 job-info">
            <div className="col-lg-12">
              <p className="text-left">
                <ul>
                  <li>
                    Developed new processes for S-10 Cost Report Worksheet using
                    a SQL database as opposed to Power Query in Excel
                  </li>
                  <li>
                    Used SSIS to get data into SSMS in a normalized database and
                    built all queries for reporting
                  </li>
                  <li>
                    Shortened average time to build one S-10 from 5 days to 2 -
                    4 hours
                  </li>
                </ul>
              </p>
            </div>
          </Row>
        </div>
        <div className="container-fluid justify-content-center align-items-center">
          <Row className="row justify-content-between me-1 ms-1">
            <div className="col-5">
              <h4>
                <u>HCA Healthcare</u>
              </h4>
              <h5>Product Analyst II</h5>
            </div>
            <div className="col-7 text-end">
              <h4 className="font-weight-normal date">
                June 2019 &mdash; May 2020
              </h4>
            </div>
          </Row>
          <Row className="justify-content-between ms-1">
            <div className="col-lg-12">
              <p className="text-left">
                <ul>
                  <li>
                    Gathered data requirements for HCA&apos;s patient care
                    management applications
                  </li>
                  <li>
                    Created reference data tables in Ataccama for use in
                    applications (controlling data flow, mapping data elements
                    to other attributes, and cleaning data)
                  </li>
                  <li>Built SQL queries for reporting on ad hoc basis</li>
                </ul>
              </p>
            </div>
          </Row>
        </div>
        <div className="container-fluid justify-content-center align-items-center">
          <Row className="row justify-content-between ms-1 me-1">
            <div className="col-5">
              <h4>
                <u>LifeWay Christian Resources</u>
              </h4>
              <h5>Business Analyst</h5>
            </div>
            <div className="col-7 text-end">
              <h4 className="font-weight-normal date">
                January 2019 &mdash; May 2019
              </h4>
            </div>
          </Row>
          <Row className="justify-content-between ms-1">
            <div className="col-lg-12">
              <p className="text-left">
                <ul>
                  <li>
                    Monitored variable costs and fixed costs for new products
                  </li>
                  <li>
                    Collaborated with sales, marketing, and editorial teams to
                    determine a new project&apos;s financial viability
                  </li>
                  <li>
                    Built financial reports for business leaders in
                    Microstrategy
                  </li>
                  <li>
                    Improved budget processes using VBA in Microsoft Excel for a
                    team of 10+ analysts
                  </li>
                </ul>
              </p>
            </div>
          </Row>
        </div>
        <div className="container-fluid justify-content-center align-items-center">
          <Row className="justify-content-between ms-1 me-1">
            <div className="col-5">
              <h4>
                <u>LifeWay Christian Resources</u>
              </h4>
              <h5>Business Support Analyst</h5>
            </div>
            <div className="col-7 text-end">
              <h4 className="font-weight-normal date">
                April 2018 &mdash; January 2019
              </h4>
            </div>
          </Row>
          <Row className="justify-content-between ms-1">
            <div className="col-lg-12">
              <ul>
                <li>Supported international sales and publishing operations</li>
                <li>
                  Managed inventory and controlled reprinting tasks of product
                  lines based on history of sales and viability
                </li>
              </ul>
              <p>
                <strong>Key Contributions:</strong>
                <ul>
                  <li>
                    <strong>One Order/One Invoice</strong> – Created a discount
                    structure for all of our international trade customers and
                    improved the ordering process to allow customers to order
                    from both publishing houses and receive their products on
                    one invoice.
                  </li>
                  <li>
                    <strong>Budget Automation</strong> – Automated the budget in
                    Microsoft Excel using Visual Basic for Applications to
                    compile the budget into a data file to be loaded into
                    Oracle. This process helped to eliminate many of the risks
                    associated with the old process by eliminating many
                    formulas, issues with deleted spreadsheets, and missing data
                    points.
                  </li>
                </ul>
              </p>
            </div>
          </Row>
        </div>
      </div>
      <div className="page">
        <hr />
        <Container fluid className="container">
          <div className="row justify-content-center text-center">
            <h2>Education</h2>
          </div>
        </Container>
        <hr />
        <Container fluid className="container">
          <Row className="justify-content-center text-center">
            <h4>
              <strong>Bachelor of Science in Accounting and Finance</strong>
            </h4>
          </Row>
          <Row className="text-center">
            <h5 className="font-weight-normal">
              Berry College - Mount Berry, GA
            </h5>
          </Row>
        </Container>

        <hr />
        <Container fluid className="container">
          <Row className="justify-content-center text-center">
            <h2>Certifications</h2>
          </Row>
        </Container>
        <hr />
        <Container fluid>
          <Container fluid>
            <Row className="justify-content-center text-center">
              <h5 className="fw-bold">The Ultimate Excel Programmer Course</h5>
            </Row>
            <Row className="justify-content-center text-center">
              <h6 className="fw-normal">
                <span className="font-weight-normal">
                  Udemy &bull;&nbsp;May 2017 &mdash; Present
                </span>
              </h6>
            </Row>
            <Row className="justify-content-center mb-4 text-center">
              <a
                className="cert-link"
                href="https://www.udemy.com/certificate/UC-J41ZSCLE/"
                target="_blank"
              >
                See Certificate
              </a>
            </Row>
          </Container>
          <Container fluid>
            <Row className="justify-content-center text-center">
              <h5 className="fw-bold">
                Microsoft 2013 Advanced Online Excel Training Course
              </h5>
            </Row>
            <Row className="justify-content-center text-center">
              <h6 className="fw-normal">
                <span>Udemy &bull;&nbsp;August 2016 &mdash; Present</span>
              </h6>
            </Row>
            <Row className="justify-content-center mb-4 text-center">
              <a
                className="cert-link"
                href="https://www.udemy.com/certificate/UC-A5FL4HER/"
                target="_blank"
              >
                See Certificate
              </a>
            </Row>
          </Container>
          <Container fluid>
            <Row className="justify-content-center text-center">
              <h5 className="fw-bold">The Ultimate MySQL Bootcamp</h5>
            </Row>
            <Row className="justify-content-center text-center">
              <h6 className="fw-normal">
                <span>Udemy &bull;&nbsp;March 2019 &mdash; Present</span>
              </h6>
            </Row>
            <Row className="justify-content-center mb-4 text-center">
              <a
                className="cert-link"
                href="https://www.udemy.com/certificate/UC-74PBI5A1/"
                target="_blank"
              >
                See Certificate
              </a>
            </Row>
          </Container>
          <Container fluid>
            <Row className="justify-content-center text-center">
              <h5 className="fw-bold">
                The Complete 2020 Web Development Bootcamp
              </h5>
            </Row>
            <Row className="justify-content-center text-center">
              <h6 className="fw-normal">
                <span>Udemy &bull;&nbsp;March 2022 &mdash; Present</span>
              </h6>
            </Row>
            <Row className="justify-content-center mb-4 text-center">
              <a
                className="cert-link"
                href="https://www.udemy.com/certificate/UC-69671c7e-0589-484b-947f-2c95ed1c3eed/"
                target="_blank"
              >
                See Certificate
              </a>
            </Row>
          </Container>
        </Container>
        <hr />
      </div>
    </div>
  );
};

export default Page;
