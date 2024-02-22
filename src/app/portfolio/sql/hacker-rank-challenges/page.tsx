'use client';
import React, { EventHandler, useEffect, useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Solution from './components/Solution';
import { hrsolutionsdata } from '../../../data';
import './index.css';

type SolutionT = {
  id: number;
  problemLink: string;
  difficulty: string;
  question: string;
  solution: string;
  questionTitle?: string;
  questionCriteria?: string[];
};

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState('');
  const [solutionsData, setSolutionsData] = useState<SolutionT[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  });

  const filteredhrsolutionsdata = useMemo(() => {
    if (filterValue == '' || filterValue == 'clear-filter') {
      return hrsolutionsdata;
    }
    return hrsolutionsdata.filter(
      (solution) => solution.difficulty == filterValue
    );
  }, [filterValue]);

  const handleFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget.dataset;
    if (value) {
      setFilterValue(value.toLowerCase());
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const newData = hrsolutionsdata;
    setSolutionsData((prevData) => [...prevData, ...newData]);
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container className="pt-5 text-center mt-5">
      <h1>Hacker Rank SQL Challenges</h1>
      <Row>
        <div style={{ display: 'inline' }}>
          <div
            className="filter-button"
            data-value={'easy'}
            onClick={handleFilter}
          >
            <span
              className={`dot ${
                filterValue === 'easy' ? 'green-filled' : 'green-empty'
              }`}
            ></span>
            Easy
          </div>
          <div
            className="filter-button"
            data-value={'medium'}
            onClick={handleFilter}
          >
            <span
              className={`dot ${
                filterValue === 'medium' ? 'yellow-filled' : 'yellow-empty'
              }`}
            ></span>
            Medium
          </div>
          <div
            className="filter-button"
            data-value={'hard'}
            onClick={handleFilter}
          >
            <span
              className={`dot ${
                filterValue === 'hard' ? 'red-filled' : 'red-empty'
              }`}
            ></span>
            Hard
          </div>
          <div
            className="filter-button"
            data-value={'clear-filter'}
            onClick={handleFilter}
          >
            <span
              className={`dot ${
                filterValue === 'clear-filter' ? 'black-filled' : 'black-empty'
              }`}
            ></span>
            Clear
          </div>
        </div>
        <Col>
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
          <div>
            {filteredhrsolutionsdata.map((challenge) => {
              return (
                <div key={challenge.id}>
                  <div style={{ display: 'flex' }}>
                    <h5 style={{ display: 'inline', textAlign: 'left' }}>
                      <a href={challenge.problemLink} target="_blank">
                        {challenge.id + 1 + '.'}
                      </a>
                    </h5>
                    <h5 style={{ display: 'inline', textAlign: 'left' }}>
                      {' ' + challenge.question}
                      {challenge.questionCriteria?.map((criteria) => {
                        return <li>{criteria}</li>;
                      })}
                    </h5>
                  </div>
                  <Solution {...challenge} />
                </div>
              );
            })}
          </div>
          {/* )} */}
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
