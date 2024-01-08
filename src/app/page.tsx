'use client';

import './page.css';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import MainNavBar from '@/navbar';
import { Container, Row, Col } from 'react-bootstrap';
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Home() {
  return (
    <>
      <MainNavBar />
      <section className="mb-5">
        <Container className="home-section">
          <Row className="ms-5 me-5">
            <Col
              xs={12}
              lg={4}
              className="justify-content-center text-center mt-5 mb-3"
            >
              <div className="">
                <Avatar
                  className="mx-auto"
                  src="https://media.licdn.com/dms/image/C4D03AQHhSsaebWFyig/profile-displayphoto-shrink_200_200/0/1622314022456?e=1709164800&v=beta&t=sFYB53cVl9evEetPIjttdOpgheePWNQrP7uGhVn0lUA"
                  sx={{ width: 200, height: 200 }}
                ></Avatar>
                <h2 className="mt-3">Matthew Harry</h2>
                <h3 className="title fw-normal">Software Engineer</h3>
                <div className="mt-3">
                  <a
                    href="https://github.com/mharry18"
                    target="_blank"
                    className="site-link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      className="site-link"
                    />
                  </a>
                  <span>&#183;</span>
                  <a>
                    <FontAwesomeIcon
                      icon={faHackerrank}
                      size="2x"
                      className="site-link"
                    />
                  </a>
                  <span>&#183;</span>
                  <a
                    href="https://www.linkedin.com/in/matthew-h-14515397/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      className="site-link"
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              lg={8}
              className="welcome justify-content-center mt-5 mb-3"
            >
              <h1>Welcome</h1>
              <p>
                My name is Matthew and, in a journey full of twists and turns,
                I&apos;m a software engineer.
              </p>
              <p>
                I completed my Bachelor&apos;s degree in Accounting and Finance
                at Berry College in Rome, Georgia. During my studies, I
                undertook internships for two summers, serving as a financial
                analyst intern. These experiences exposed me to extensive use of
                Excel and introduced me to Visual Basic for Applications (VBA),
                marking my initial exposure to programming. Upon graduation, I
                transitioned into a role as a financial analyst at a small
                publisher.
              </p>
              <p>
                My career has led me to many places and I have moved from a
                financial analyst, to a data analyst, and then to a sql
                developer/financial analyst hybrid role. After a web development
                bootcamp and experience building websites, I am now a software
                engineer.
              </p>
              <Row className="mt-5">
                <Col md={5}>
                  <h3>Interests</h3>
                  <ul>
                    <li>Programming</li>
                    <li>Statistics</li>
                    <li>Business Intelligence</li>
                    <li>Database Management</li>
                  </ul>
                </Col>
                <Col md={7}>
                  <h3>Education</h3>
                  <ul>
                    <li className="education-list mt-2 d-flex align-items-start">
                      <FontAwesomeIcon
                        className="mt-2"
                        icon={faUserGraduate}
                        size="2x"
                      />
                      <div className="ms-4 d-inline-block">
                        <p className="fs-5 mb-1">
                          Bachelor of Science - Accounting and Finance
                        </p>
                        <p className="school fs-6">Berry College</p>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="experience">
        <Container>
          <Row>
            <h2 className="mt-5">Experience</h2>
          </Row>
        </Container>
      </section>

      {/* <iframe
          title="Nashville Weather History"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=99fc1349-0884-480f-ae99-65be72b069f6&autoAuth=true&ctid=24ef912a-7cf7-459f-b841-4b187d7ee4c5"
          frameborder="0"
          allowFullScreen={true}
        ></iframe> */}
    </>
  );
}
