export const hrsolutionsdata = [
  {
    id: 0,
    problemLink: "https://www.hackerrank.com/challenges/revising-the-select-query/problem",
    difficulty: "easy",
    question: "Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.",
    solution: `
    SELECT * 

    FROM CITY 
    WHERE COUNTRYCODE IN ('USA') 
    AND POPULATION > 100000;
    `
  },
  {
    id: 1,
    problemLink: "https://www.hackerrank.com/challenges/revising-the-select-query-2/problem",
    difficulty: "easy",
    question: "Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.",
    solution: `
    SELECT 
    NAME

    FROM CITY 
    WHERE COUNTRYCODE IN ('USA') 
    AND POPULATION > 120000;
    `
  },
  {
    id: 2,
    problemLink: "",
    difficulty: "easy",
    question: "Query all columns (attributes) for every row in the CITY table.",
    solution: `
    SELECT 
    ID,
    NAME, 
    COUNTRYCODE, 
    DISTRICT, 
    POPULATION 
    
    FROM CITY;
    `
  },
  {
    id: 3,
    problemLink: "https://www.hackerrank.com/challenges/select-by-id/problem",
    difficulty: "easy",
    question: "Query all columns for a city in CITY with the ID 1661.",
    solution: `
    SELECT 
    ID, 
    NAME, 
    COUNTRYCODE, 
    DISTRICT, 
    POPULATION 
    
    FROM CITY 
    WHERE ID IN (1661);
    `
  },
  {
    id: 4,
    problemLink: "https://www.hackerrank.com/challenges/japanese-cities-attributes/problem",
    difficulty: "easy",
    question: "Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.",
    solution: `
    SELECT * 
    
    FROM CITY
    WHERE COUNTRYCODE IN ('JPN')
    `
  },
  {
    id: 5,
    problemLink: "https://www.hackerrank.com/challenges/japanese-cities-name/problem",
    difficulty: "easy",
    question: "Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.",
    solution: `
    SELECT NAME 

    FROM CITY 
    WHERE COUNTRYCODE IN ('JPN')
    `
  },
  {
    id: 6,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-1/problem",
    difficulty: "easy",
    question: "Query a list of CITY and STATE from the STATION table.",
    solution: `
    SELECT 
    CITY, 
    STATE 

    FROM STATION
    `
  },
  {
    id: 7,
    problemLink: "",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 3",
    question: "Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.",
    solution: `
    SELECT DISTINCT 
    CITY 
    
    FROM STATION 
    WHERE ID % 2 = 0
    `
  },
  {
    id: 8,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-4/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 4",
    question: "Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.",
    solution: `
    DECLARE @TotalCities AS INT
    SELECT @TotalCities = COUNT(CITY) FROM STATION
    
    DECLARE @DistinctCities AS INT
    SELECT @DistinctCities = COUNT(DISTINCT CITY) FROM STATION


    SELECT @TotalCities - @DistinctCities AS [TotalDistinctCitiesDiff]
    `
  },
  {
    id: 9,
    problemLink: "Weather Observation Station 5",
    difficulty: "easy",
    questionTitle: "https://www.hackerrank.com/challenges/weather-observation-station-5/problem",
    question: "Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.",
    solution: `
      WITH CityLengths AS (

      SELECT 
      LEN(CITY) AS CityNameLength, 
      CITY, 
      ROW_NUMBER() OVER(PARTITION BY LEN(CITY) ORDER BY CITY ASC) AS CityOrder
      
      FROM STATION
      
      WHERE LEN(CITY) = (SELECT MAX(LEN(CITY)) FROM STATION)
      
      UNION
      
      SELECT 
      LEN(CITY) AS CityNameLength, 
      CITY, 
      ROW_NUMBER() OVER(PARTITION BY LEN(CITY) ORDER BY CITY ASC) AS CityOrder
      
      FROM STATION
      
      WHERE LEN(CITY) = (SELECT MIN(LEN(CITY)) FROM STATION)
      
      )
      
      SELECT 
      CITY, 
      CityNameLength  

      FROM CityLengths 
      WHERE CityOrder = 1
    `
  },
  {
    id: 10,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-6/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 6",
    question: "Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.",
    solution: `
    SELECT DISTINCT 
    CITY 

    FROM STATION
    WHERE CITY LIKE '[a,e,i,o,u]%'
    `
  },
  {
    id: 11,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-7/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 7",
    question: "Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.",
    solution: `
    SELECT DISTINCT 
    CITY 

    FROM STATION
    WHERE CITY LIKE '%[a,e,i,o,u]'
    `
  },
  {
    id: 12,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-8/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 8",
    question: "Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.",
    solution: `
    SELECT DISTINCT 
    CITY

    FROM STATION 
    WHERE CITY LIKE '[a,e,i,o,u]%' AND
    CITY LIKE '%[a,e,i,o,u]'
    `
  },
  {
    id: 13,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-9/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 9",
    question: "Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.",
    solution: `
    SELECT DISTINCT 
    CITY 

    FROM STATION 
    WHERE CITY NOT LIKE '[aeiou]%'
    `
  },
  {
    id: 14,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-10/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 10",
    question: "Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.",
    solution: `
    SELECT DISTINCT 
    CITY

    FROM STATION 
    WHERE CITY NOT LIKE '%[aeiou]'`
  },
  {
    id: 15,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-11/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 11",
    question: "Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.",
    solution: `
    SELECT DISTINCT 
    CITY

    FROM STATION 
    WHERE CITY NOT LIKE '[aeiou]%' 
    OR CITY NOT LIKE '%[aeiou]'
    `
  },
  {
    id: 16,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-12/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 12",
    question: "Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.",
    solution: `
    SELECT DISTINCT 
    CITY

    FROM STATION
    WHERE CITY NOT LIKE '[aeiou]%'
    AND CITY NOT LIKE '%[aeiou]'`
  },
  {
    id: 17,
    problemLink: "https://www.hackerrank.com/challenges/more-than-75-marks/problem",
    difficulty: "easy",
    questionTitle: "Higher Than 75 Marks",
    question: "Query the Name of any student in STUDENTS who scored higher than  Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.",
    solution: `
      WITH students_last_three_chars AS (

      SELECT 
      STUDENTS.ID, 
      STUDENTS.Name, 
      RIGHT(STUDENTS.Name, 3) AS Last_Three 
          
      FROM STUDENTS
      
      WHERE STUDENTS.Marks > 75
          
      )
      
      SELECT Name 
      
      FROM students_last_three_chars
      
      ORDER BY Last_Three ASC, ID ASC
      `
  },
  {
    id: 18,
    problemLink: "https://www.hackerrank.com/challenges/name-of-employees/problem",
    difficulty: "easy",
    questionTitle: "Employee Names",
    question: "Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.",
    solution: `
    SELECT name 

    FROM Employee
    ORDER BY name ASC`
  },
  {
    id: 19,
    problemLink: "https://www.hackerrank.com/challenges/salary-of-employees/problem",
    difficulty: "easy",
    questionTitle: "Employee Salaries",
    question: "Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than  per month who have been employees for less than  months. Sort your result by ascending employee_id.",
    solution: `
    SELECT name 
    
    FROM Employee 
    WHERE salary > 2000
    AND months < 10
    `
  },
  {
    id: 20,
    problemLink: "https://www.hackerrank.com/challenges/what-type-of-triangle/problem",
    difficulty: "easy",
    questionTitle: "Type of Triangle",
    question: `Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:`,
    questionCriteria: [
    `Equilateral: It's a triangle with  sides of equal length.`,
    `Isosceles: It's a triangle with  sides of equal length.`,
    `Scalene: It's a triangle with  sides of differing lengths.`,
    `Not A Triangle: The given values of A, B, and C don't form a triangle.`
    ]
    ,
    solution: `
    SELECT 
    CASE 
    WHEN A + B <= C THEN 'Not A Triangle'
    WHEN A = B AND B = C THEN 'Equilateral'
    WHEN A = B OR B = C OR A = C THEN 'Isosceles'
    WHEN A <> B AND B <> C THEN 'Scalene'
    END AS TriangleType
    
    FROM TRIANGLES`
  },
  {
    id: 21,
    problemLink: "https://www.hackerrank.com/challenges/the-pads/problem",
    difficulty: "medium",
    questionTitle: "The PADS",
    question: "See Link To Question (Click Number)",
    solution: `
    SELECT 
    CONCAT(Name, '(', LEFT(Occupation, 1), ')') 
    
    FROM OCCUPATIONS

    ORDER BY 1;
    
    SELECT 
    CONCAT('There are a total of ', COUNT(*), ' ', lower(Occupation), CASE WHEN COUNT(*) > 1 THEN 's' ELSE '' END, '.') 
    
    FROM Occupations
    GROUP BY Occupation
    ORDER BY COUNT(*);`
  },
  {
    id: 22,
    problemLink: "https://www.hackerrank.com/challenges/occupations/problem",
    difficulty: "medium",
    questionTitle: "Occupations",
    question: "Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. The output column headers should be Doctor, Professor, Singer, and Actor, respectively.",
    solution: `
      SELECT 
      Doc.Name, 
      Prof.Name, 
      Sing.Name, 
      Act.Name 
      
      FROM (

      SELECT 
      'Person' AS Person, 
      Name, 
      ROW_NUMBER() OVER(PARTITION BY 'Person' ORDER BY Name ASC) AS Row_Num 
      
      FROM OCCUPATIONS
      WHERE Occupation IN ('Doctor')
      
      ) Doc
          
      FULL OUTER JOIN (
          SELECT 
          'Person' AS Person, 
          Name, 
          ROW_NUMBER() OVER(PARTITION BY 'Person' ORDER BY Name ASC) AS Row_Num 
          
          FROM OCCUPATIONS
          WHERE Occupation IN ('Actor')

      ) AS Act
      
      ON Doc.Row_Num = Act.Row_Num
      
      FULL OUTER JOIN (
          SELECT 
          'Person' AS Person, 
          Name, ROW_NUMBER() OVER(PARTITION BY 'Person' ORDER BY Name ASC) AS Row_Num 
          
          FROM OCCUPATIONS
          WHERE Occupation IN ('Singer')

      ) AS Sing
      
      ON Act.Row_Num = Sing.Row_Num
      
      FULL OUTER JOIN (
          SELECT 
          'Person' AS Person, 
          Name, 
          ROW_NUMBER() OVER(PARTITION BY 'Person' ORDER BY Name ASC) AS Row_Num 
          
          FROM OCCUPATIONS
          WHERE Occupation IN ('Professor')

      ) AS Prof
      
      ON Sing.Row_Num = Prof.Row_Num
      
      ORDER BY case when Prof.Name is null then 1 else 0 end, Prof.Row_Num ASC`
  },
  {
    id: 23,
    problemLink: "https://www.hackerrank.com/challenges/binary-search-tree-1/problem",
    difficulty: "medium",
    questionTitle: "Binary Tree Nodes",
    question: "See Link To Question (Click Number)",
    solution: `
    SELECT DISTINCT 
    Node.N as Node, 
    CASE WHEN Parent.P IS NULL 
    THEN 'Leaf' 
    WHEN InnerNode.P IS NOT NULL 
    THEN 'Inner' 
    WHEN InnerNode.P IS NULL
    THEN 'Root'
    ELSE NULL
    END AS NodeType
    
    FROM BST Node
    
    LEFT JOIN BST Parent
    ON Node.N = Parent.P
    
    LEFT JOIN BST InnerNode
    ON Parent.P = InnerNode.N`
  },
  {
    id: 24,
    problemLink: "https://www.hackerrank.com/challenges/the-company/problem",
    difficulty: "medium",
    questionTitle: "New Companies",
    question: "See Link To Question (Click Number)",
    solution: `
    SELECT 
    Company.company_code, 
    Company.founder, 
    COUNT(DISTINCT LM.lead_manager_code), 
    COUNT(DISTINCT SM.senior_manager_code), 
    COUNT(DISTINCT M.manager_code), 
    COUNT(DISTINCT Employee.employee_code) 
    
    FROM Company

    JOIN Lead_Manager LM
    ON Company.company_code = LM.company_code
    
    JOIN Senior_Manager SM
    ON LM.lead_manager_code = SM.lead_manager_code
    AND LM.company_code = SM.company_code
    
    JOIN Manager M
    ON SM.company_code = M.company_code
    AND SM.lead_manager_code = M.lead_manager_code
    AND SM.senior_manager_code = M.senior_manager_code
    
    JOIN Employee
    On M.company_code = Employee.company_code
    AND M.lead_manager_code = Employee.lead_manager_code
    AND M.senior_manager_code = Employee.senior_manager_code
    AND M.manager_code = Employee.manager_code
    
    
    GROUP BY Company.company_code, Company.founder
    ORDER BY Company.company_code ASC`
  },
  {
    id: 25,
    problemLink: "https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem",
    difficulty: "easy",
    questionTitle: "Revising Aggregations - The Count Function",
    question: "Query a count of the number of cities in CITY having a Population larger than 100,000.",
    solution: `
    SELECT COUNT(ID) AS CityCount
    
    FROM CITY

    WHERE POPULATION > 100000`
  },
  {
    id: 26,
    problemLink: "https://www.hackerrank.com/challenges/revising-aggregations-sum/problem",
    difficulty: "easy",
    questionTitle: "Revising Aggregations - The Sum Function",
    question: "Query the total population of all cities in CITY where District is California.",
    solution: `
    SELECT SUM(POPULATION) AS Population

    FROM CITY
    
    WHERE DISTRICT IN ('CALIFORNIA')`
  },
  {
    id: 27,
    problemLink: "https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem",
    difficulty: "easy",
    questionTitle: "Revising Aggregations - Averages",
    question: "Query the average population of all cities in CITY where District is California.",
    solution: `
    SELECT AVG(POPULATION) AS AveragePopulation

    FROM CITY
    
    WHERE DISTRICT IN ('CALIFORNIA')`
  },
  {
    id: 28,
    problemLink: "https://www.hackerrank.com/challenges/average-population/problem",
    difficulty: "easy",
    questionTitle: "Average Population",
    question: "Query the average population for all cities in CITY, rounded down to the nearest integer.",
    solution: `
    SELECT ROUND(AVG(POPULATION), 0) AS AveragePopulation

    FROM CITY`
  },
  {
    id: 29,
    problemLink: "https://www.hackerrank.com/challenges/japan-population/problem",
    difficulty: "easy",
    questionTitle: "Japan Population",
    question: "Query the sum of the populations for all Japanese cities in CITY. The COUNTRYCODE for Japan is JPN.",
    solution: `
    SELECT 
    SUM(POPULATION) AS Population
    
    FROM CITY

    WHERE COUNTRYCODE IN ('JPN')`
  },
  {
    id: 30,
    problemLink: "https://www.hackerrank.com/challenges/population-density-difference/problem",
    difficulty: "easy",
    questionTitle: "Population Density Difference",
    question: "Query the difference between the maximum and minimum populations in CITY.",
    solution: `
    SELECT 
    MAX(POPULATION) - MIN(POPULATION) AS PopulationDifference

    FROM CITY`
  },
  {
    id: 31,
    problemLink: "https://www.hackerrank.com/challenges/the-blunder/problem",
    difficulty: "easy",
    questionTitle: "The Blunder",
    question: "Samantha was tasked with calculating the average monthly salaries for all employees in the EMPLOYEES table, but did not realize her keyboard's  key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeros removed), and the actual average salary. Write a query calculating the amount of error (i.e.: actual - expected average monthly salaries), and round it up to the next integer.",
    solution: `
    SELECT 
    CEILING(AVG(CONVERT(decimal, SALARY)) - AVG(CONVERT(decimal, REPLACE(SALARY, 0, "")))) AS AvgMonthlySalaryError

    FROM EMPLOYEES`
  },
  {
    id: 32,
    problemLink: "https://www.hackerrank.com/challenges/earnings-of-employees/problem",
    difficulty: "easy",
    questionTitle: "Top Earners",
    question: "We define an employee's total earnings to be their monthly  worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as  space-separated integers.",
    solution: `
    WITH total_earnings AS (

      SELECT 
      employee_id,
      name,
      salary * months AS Total_Earnings
      
      FROM Employee
  
  )
  
  SELECT 
  CONCAT_WS(' ', Total_Earnings,COUNT(employee_id))
  
  FROM total_earnings
  
  WHERE Total_Earnings = (SELECT MAX(Total_Earnings) FROM total_earnings)
  
  GROUP BY Total_Earnings`
  },
  {
    id: 33,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-2/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 2",
    question: "See Link To Question (Click Number)",
    solution: `
    SELECT 
    CONCAT_WS(' ', ROUND(CONVERT(decimal(10,2),SUM(LAT_N),2),2), ROUND(CONVERT(decimal(10,2),SUM(LONG_W)),2))

    FROM STATION`
  },
  {
    id: 34,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-13/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 13",
    question: "Query the sum of Northern Latitudes (LAT_N) from STATION having values greater than 38.7780 and less than 137.2345. Truncate your answer to 4 decimal places.",
    solution: `
    SELECT 
    CONVERT(decimal(10,4),ROUND(SUM(LAT_N),4)) AS Sum
    
    FROM STATION

    WHERE LAT_N > 38.7880 AND LAT_N < 137.2345`
  },
  {
    id: 35,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-14/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 14",
    question: "Query the greatest value of the Northern Latitudes (LAT_N) from STATION that is less than 137.2345. Truncate your answer to  decimal places.",
    solution: `
    SELECT 
    CONVERT(decimal(10,4),MAX(LAT_N)) MaxNorthernLat

    FROM STATION
    
    WHERE LAT_N < 137.2345;`
  },
  {
    id: 36,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-15/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 15",
    question: "Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than 137.2345. Round your answer to 4 decimal places.",
    solution: `
    SELECT 
    CONVERT(decimal(10,4),LONG_W) AS WesternLongitude

    FROM STATION 
    
    WHERE LAT_N = (SELECT MAX(LAT_N) FROM STATION WHERE LAT_N < 137.2345);`
  },
  {
    id: 37,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-16/problem",
    difficulty: "easy",
    questionTitle: "Query the smallest Northern Latitude (LAT_N) from STATION that is greater than 38.7780. Round your answer to  decimal places.",
    question: "Weather Observation Station 16",
    solution: `
    SELECT 
    CONVERT(decimal(10,4),MIN(LAT_N)) AS NorthernLat

    FROM STATION 
    
    WHERE LAT_N > 38.7780`
  },
  {
    id: 38,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-17/problem",
    difficulty: "easy",
    questionTitle: "Weather Observation Station 17",
    question: "Query the Western Longitude (LONG_W)where the smallest Northern Latitude (LAT_N) in STATION is greater than 38.7780. Round your answer to 4 decimal places.",
    solution: `
    SELECT 
    CONVERT(decimal(10,4), LONG_W) AS WesternLong

    FROM STATION
    
    WHERE LAT_N = (SELECT MIN(LAT_N) FROM STATION WHERE LAT_N > 38.7780)`
  },  
  {
    id: 39,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-18/problem",
    difficulty: "medium",
    questionTitle: "Weather Observation Station 18",
    question: "See Link To Question (Click Number)",
    solution: `
    SELECT 
    CAST(ROUND((ABS(MIN(lAT_N) - MAX(LAT_N))) + ABS((MIN(LONG_W) - MAX(LONG_W))),4) AS FLOAT) ManhattanDistance
    
    FROM STATION
    `
  },
  {
    id: 40,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-19/problem",
    difficulty: "medium",
    questionTitle: "Weather Observation Station 19",
    question: "See Link To Question (Click Number)",
    solution: `
    DECLARE @P1A AS decimal(18,8)
    DECLARE @P1C AS decimal(18,8)
    DECLARE @P2B AS decimal(18,8)
    DECLARE @P2D AS decimal(18,8)
    
    SELECT @P1A=MIN(LAT_N)
    FROM STATION
    
    SELECT @P1C=MIN(LONG_W)
    FROM STATION
    
    SELECT @P2B=MAX(LAT_N)
    FROM STATION
    
    SELECT @P2D=MAX(LONG_W)
    FROM STATION
    
    SELECT CONVERT(decimal(12,4),SQRT(SQUARE(@P1A - @P2B) + SQUARE(@P1C - @P2D))) AS EuclideanDistance`
  },
  {
    id: 41,
    problemLink: "https://www.hackerrank.com/challenges/weather-observation-station-20/problem",
    difficulty: "medium",
    questionTitle: "Weather Observation Station 20",
    question: "See Link To Question (Click Number)",
    solution: `
    WITH sorted_lats AS (

      SELECT 
      LAT_N, 
      ROW_NUMBER() OVER (PARTITION BY 1 ORDER BY LAT_N) AS Lat_Order 
      
      FROM STATION
          
      )
      
      SELECT 
      CONVERT(decimal(10,4), ROUND(LAT_N, 4)) MedianNorthernLat
      
      FROM sorted_lats 
      
      WHERE Lat_Order = (SELECT CEILING(COUNT(*)/2) + 1 FROM STATION )`
  },
  {
    id: 42,
    problemLink: "https://www.hackerrank.com/challenges/asian-population/problem",
    difficulty: "easy",
    questionTitle: "Population Census",
    question: "Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'. Note: CITY.CountryCode and COUNTRY.Code are matching key columns.",
    solution: `
    SELECT SUM(CITY.POPULATION) AS Population

    FROM CITY 
    
    JOIN COUNTRY 
    ON CITY.COUNTRYCODE = COUNTRY.CODE
    
    WHERE COUNTRY.CONTINENT IN ('Asia')`
  },
  {
    id: 43,
    problemLink: "https://www.hackerrank.com/challenges/african-cities/problem",
    difficulty: "easy",
    questionTitle: "African Cities",
    question: "Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'. Note: CITY.CountryCode and COUNTRY.Code are matching key columns.",
    solution: `
    SELECT 
    CITY.NAME

    FROM CITY
    
    JOIN COUNTRY 
    ON CITY.COUNTRYCODE = COUNTRY.CODE
    
    WHERE COUNTRY.CONTINENT IN ('Africa')`
  },
  {
    id: 44,
    problemLink: "https://www.hackerrank.com/challenges/average-population-of-each-continent/problem",
    difficulty: "easy",
    questionTitle: "Average Population of Each Continent",
    question: "Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer. Note: CITY.CountryCode and COUNTRY.Code are matching key columns.",
    solution: `
    SELECT 
    COUNTRY.CONTINENT, 
    FLOOR(AVG(CITY.POPULATION)) AS Population

    FROM CITY 
    
    JOIN COUNTRY
    ON CITY.COUNTRYCODE = COUNTRY.CODE
    
    GROUP BY COUNTRY.CONTINENT`
  },
  {
    id: 45,
    problemLink: "https://www.hackerrank.com/challenges/the-report/problem",
    difficulty: "medium",
    questionTitle: "The Report",
    question: "See Link To Question (Click Number)",
    solution: `
    SELECT 
    CASE WHEN Grades.Grade < 8 THEN NULL ELSE Students.Name END AS Name, 
    Grades.Grade, 
    Students.Marks 
    
    FROM Students

    LEFT JOIN Grades
    ON Students.Marks >= Grades.Min_Mark AND Students.Marks <= Grades.Max_Mark
    
    ORDER BY Grades.Grade DESC, Students.Name ASC`
  },
  {
    id: 46,
    problemLink: "https://www.hackerrank.com/challenges/full-score/problem",
    difficulty: "medium",
    questionTitle: "Top Competitors",
    question: "See Link To Question (Click Number)",
    solution: `
      WITH perfect_scores AS (

      SELECT 
      Hackers.hacker_id, 
      Hackers.name, 
      COUNT(*) as submissions FROM Hackers
      
      JOIN Submissions
      ON Hackers.hacker_id = Submissions.hacker_id
      AND Hackers.hacker_id = Submissions.hacker_id
      
      JOIN Challenges
      ON Submissions.challenge_id = Challenges.challenge_id
      
      JOIN Difficulty
      ON Challenges.difficulty_level = Difficulty.difficulty_level
      
      WHERE Submissions.score = Difficulty.score
      
      GROUP BY Hackers.hacker_id, Hackers.name
      
      HAVING COUNT(*) > 1
          
      
      )
      
      SELECT 
      hacker_id, 
      name 
      
      FROM perfect_scores
      
      ORDER BY submissions DESC, hacker_id ASC`
  },
  {
    id: 47,
    problemLink: "https://www.hackerrank.com/challenges/harry-potter-and-wands/problem",
    difficulty: "medium",
    questionTitle: "Ollivander's Inventory",
    question: "See Link To Question (Click Number)",
    solution: `
    WITH minimum_coins_needed AS (

      SELECT MIN(Wands.coins_needed) as coins_needed, 
      Wands.code, 
      Wands.power
      
      FROM Wands
      
      JOIN Wands_Property
      ON Wands.code = Wands_Property.code
      
      GROUP BY Wands.code, Wands.power
      
  )
  
  SELECT 
  Wands.id, 
  Wands_Property.age, 
  Wands.coins_needed, 
  Wands.power 
  
  FROM Wands
  
  JOIN Wands_Property
  ON Wands.code = Wands_Property.code
  
  JOIN minimum_coins_needed 
  ON Wands.coins_needed = minimum_coins_needed.coins_needed
  AND Wands.code = minimum_coins_needed.code
  AND Wands.power = minimum_coins_needed.power
  
  WHERE Wands_Property.is_evil = 0
  
  ORDER BY Wands.power DESC, Wands_Property.age DESC;`
  },
  {
    id: 48,
    problemLink: "https://www.hackerrank.com/challenges/challenges/problem",
    difficulty: "medium",
    questionTitle: "Challenges",
    question: "Julia asked her students to create some coding challenges. Write a query to print the hacker_id, name, and the total number of challenges created by each student. Sort your results by the total number of challenges in descending order. If more than one student created the same number of challenges, then sort the result by hacker_id. If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.",
    solution: `
    WITH hacker_challenges AS (

      SELECT 
      Hackers.hacker_id, 
      Hackers.name, 
      COUNT(Challenges.challenge_id) as challenge_count
      
      FROM Hackers
      
      JOIN Challenges
      ON Hackers.hacker_id = Challenges.hacker_id
      
      GROUP BY Hackers.hacker_id, Hackers.name
          
      ), 
      
      challenge_summary AS (
      
      SELECT 
      COUNT(*) as record_count, 
      challenge_count
      
      FROM hacker_challenges
      
      GROUP BY challenge_count
          
      )
      
      SELECT 
      hacker_id, 
      name, 
      challenge_count
      
      FROM hacker_challenges
      
      WHERE (challenge_count = (SELECT MAX(challenge_count) FROM hacker_challenges))
      OR (challenge_count IN (SELECT DISTINCT challenge_count FROM challenge_summary WHERE record_count = 1))
      
      ORDER BY challenge_count DESC, hacker_id`
  },
  {
    id: 49,
    problemLink: "https://www.hackerrank.com/challenges/contest-leaderboard/problem",
    difficulty: "medium",
    questionTitle: "Contest Leaderboard",
    question: "You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too! The total score of a hacker is the sum of their maximum scores for all of the challenges. Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. Exclude all hackers with a total score of  from your result.",
    solution: `
    WITH max_scores AS (
    
      SELECT MAX(score) as max_score, 
      challenge_id, 
      hacker_id
      
      FROM Submissions 
      GROUP BY challenge_id, hacker_id

  ), 
  score_summary AS (
  
  SELECT 
  max_scores.hacker_id, 
  Hackers.name, 
  SUM(max_scores.max_score) as total_score
  
  FROM max_scores
  
  JOIN Hackers
  ON max_scores.hacker_id = Hackers.hacker_id
  
  
  GROUP BY max_scores.hacker_id, Hackers.name
  
  HAVING SUM(max_scores.max_score) > 0
  
  )
     
  
  SELECT * 

  FROM score_summary
  ORDER BY total_score DESC, hacker_id ASC`
  },
  {
    id: 50,
    problemLink: "https://www.hackerrank.com/challenges/sql-projects/problem",
    difficulty: "medium",
    questionTitle: "SQL Project Planning",
    question: "See Link To Question (Click Number)",
    solution: `
    WITH ordered_tasks AS (
      SELECT 
      Task_ID, 
      Start_Date, 
      End_Date, 
      Row_Number() OVER (PARTITION BY 1 ORDER BY End_Date) AS Task_Order
      
      FROM Projects
      
  ),
  
  task_category AS (
      
      SELECT 
      *, 
      Row_Number() OVER(PARTITION BY Project ORDER BY End_Date) AS Project_Order,
      Row_Number() OVER(PARTITION BY 1 ORDER BY End_Date) AS Row_Order
      
      FROM (
  
          SELECT 
          ordered_tasks.*, 
          shifted.end_date as shifted_end_date, 
          DATEDIFF(day, shifted.End_Date, ordered_tasks.End_Date) as Days_Between_End , 
          CASE 
          WHEN DATEDIFF(day, shifted.End_Date, ordered_tasks.End_Date) > 1 
          OR shifted.end_date IS NULL 
          THEN 'NEW PROJECT' 
          ELSE 'SAME PROJECT' 
          END AS Project
  
          FROM ordered_tasks
  
          LEFT JOIN ordered_tasks shifted
          ON ordered_tasks.Task_Order = shifted.Task_Order + 1
          
          ) Sub 
  
      ), 
      
      project_list AS (
  
  
  SELECT 
  CASE 
  WHEN task_category.Project = 'NEW PROJECT' AND shifted.Project = 'SAME PROJECT' THEN task_category.Start_Date
  WHEN task_category.Project = 'NEW PROJECT' AND shifted.Project = 'NEW PROJECT' THEN task_category.Start_Date
  WHEN task_category.Project = 'NEW PROJECT' AND shifted.Project IS NULL THEN task_category.Start_Date
  ELSE NULL
  END AS Project_Start_Date,
  CASE 
  WHEN task_category.Project = 'SAME PROJECT' AND shifted.Project = 'NEW PROJECT' THEN task_category.End_Date
  WHEN task_category.Project = 'NEW PROJECT' AND shifted.Project = 'NEW PROJECT' THEN task_category.End_Date
  WHEN task_category.Project = 'NEW PROJECT' AND shifted.Project IS NULL THEN task_category.End_Date
  ELSE NULL
  END AS Project_End_Date,
  CASE WHEN task_category.Project = 'SAME PROJECT' AND shifted.Project = 'SAME PROJECT'
  THEN 'REMOVE'
  ELSE NULL
  END AS Removal_Flag
  
  
  FROM task_category
  
  LEFT JOIN task_category shifted
  ON task_category.Row_Order = shifted.Row_Order - 1
          
   ), 
   
   multi_day_projects AS (
   
   SELECT 
       Project_Start_Date, 
       Project_End_Date, 
       ROW_NUMBER() OVER (PARTITION BY 1 ORDER BY COALESCE(Project_Start_Date, Project_End_Date) ASC) AS mdp_rows 
   
   FROM project_list 
   
   WHERE Removal_Flag IS NULL
   AND (Project_Start_Date IS NULL
   OR Project_End_Date IS NULL)
       
  )
      
      SELECT 
      Project_Start_Date, 
      Project_End_Date 
      
      FROM (
       
      SELECT 
          start_date.Project_Start_Date, 
          end_date.Project_End_Date,
          DATEDIFF(day, start_date.Project_Start_Date, end_date.Project_End_Date) AS project_length
      
      FROM multi_day_projects start_date
      
      JOIN multi_day_projects end_date
      ON start_date.mdp_rows = end_date.mdp_rows - 1
      
      WHERE start_date.Project_Start_Date IS NOT NULL
      
      
      UNION 
      
      SELECT 
          Project_Start_Date, 
          Project_End_Date,
          DATEDIFF(day, Project_Start_Date, Project_End_Date) AS project_length
          
      FROM project_list
      
      WHERE Removal_Flag IS NULL
      AND (Project_Start_Date IS NOT NULL
      AND Project_End_Date IS NOT NULL)
  
      ) Final 
          
      ORDER BY project_length ASC, Project_Start_Date ASC`
  },
  {
    id: 51,
    problemLink: "https://www.hackerrank.com/challenges/placements/problem",
    difficulty: "medium",
    questionTitle: "Placements",
    question: "See Link To Question (Click Number)",
    solution: `
    SELECT 
    Students.Name
    
    FROM Students
    
    JOIN Friends
    ON Students.ID = Friends.ID
    
    JOIN Students Best_Friend_Name
    ON Friends.Friend_ID = Best_Friend_Name.ID
    
    JOIN Packages Self_Salary
    ON Students.ID = Self_Salary.ID
    
    JOIN Packages Best_Friend_Salary
    ON Friends.Friend_ID = Best_Friend_Salary.ID
    
    WHERE Self_Salary.Salary < Best_Friend_Salary.Salary
    
    ORDER BY Best_Friend_Salary.Salary`
  },
  {
    id: 52,
    problemLink: "https://www.hackerrank.com/challenges/symmetric-pairs/problem",
    difficulty: "medium",
    questionTitle: "Symmetric Pairs",
    question: "See Link To Question (Click Number)",
    solution: `
    WITH Ordered_Pairs AS (
      SELECT 
      X, 
      Y, 
      ROW_NUMBER() OVER (PARTITION BY 1 ORDER BY X) AS Pair_Order
          
      FROM Functions
      
      )
      
      SELECT DISTINCT 
      Base_Pair.X, 
      Base_Pair.Y 
      
      FROM Ordered_Pairs Base_Pair
      
      JOIN Ordered_Pairs Sym_Pair
      ON Base_Pair.X = Sym_Pair.Y
      AND Base_Pair.Y = Sym_Pair.X
      AND Base_Pair.Pair_Order <> Sym_Pair.Pair_Order
      
      WHERE Base_Pair.X <= Base_Pair.Y
      
      ORDER BY Base_Pair.X ASC`
  },
  {
    id: 53,
    problemLink: "https://www.hackerrank.com/challenges/interviews/problem",
    difficulty: "hard",
    questionTitle: "Interviews",
    question: "Samantha interviews many candidates from different colleges using coding challenges and contests. Write a query to print the contest_id, hacker_id, name, and the sums of total_submissions, total_accepted_submissions, total_views, and total_unique_views for each contest sorted by contest_id. Exclude the contest from the result if all four sums are 0. Note: A specific contest can be used to screen candidates at more than one college, but each college only holds  screening contest.",
    solution: `
    WITH view_stats_data AS (
      SELECT 
          challenge_id,
          SUM(total_views) AS total_views,
          SUM(total_unique_views) AS total_unique_views
      
      FROM View_Stats
          
      GROUP BY challenge_id
      ),
      
      submission_stats_data AS (
      SELECT 
          challenge_id,
          SUM(total_submissions) AS total_submissions,
          SUM(total_accepted_submissions) AS total_accepted_submissions
      
      FROM Submission_Stats
          
      GROUP BY challenge_id
      )
      
      SELECT 
      Contests.contest_id,
      Contests.hacker_id,
      Contests.name,
      SUM(submission_stats_data.total_submissions),
      SUM(submission_stats_data.total_accepted_submissions),
      SUM(view_stats_data.total_views),
      SUM(view_stats_data.total_unique_views)
      
      
      FROM Contests
      
      JOIN Colleges
      ON Contests.contest_id = Colleges.contest_id
      
      JOIN Challenges
      ON Colleges.college_id = Challenges.college_id
      
      LEFT JOIN view_stats_data
      ON Challenges.challenge_id = view_stats_data.challenge_id
      
      LEFT JOIN submission_stats_data
      ON Challenges.challenge_id = submission_stats_data.challenge_id
      
      GROUP BY 
      Contests.contest_id,
      Contests.hacker_id,
      Contests.name
      
      HAVING 
      SUM(submission_stats_data.total_submissions) > 0 AND 
      SUM(submission_stats_data.total_accepted_submissions) > 0 AND 
      SUM(view_stats_data.total_views) > 0 AND 
      SUM(view_stats_data.total_unique_views) > 0
      
      ORDER BY Contests.contest_id
      
      `
  },
  {
    id: 54,
    problemLink: "https://www.hackerrank.com/challenges/15-days-of-learning-sql/problem",
    difficulty: "hard",
    questionTitle: "15 Days of Learning SQL",
    question: "See Link To Question (Click Number)",
    solution: `
    WITH Hacker_Daily_Submissions AS (
    
      SELECT 
      *, 
      Row_Number() OVER (PARTITION BY hacker_id ORDER BY submission_date ASC) AS Daily_Submissions_Ordered
      FROM (
      SELECT
      submission_date,
      hacker_id,
      COUNT(submission_id) as submission_count
    
      FROM Submissions
          
      GROUP BY submission_date, hacker_id
          
      ) Sub
  
  ),
  
  Distinct_Days_Ordered AS (
  
  SELECT submission_date,
  Row_Number() OVER (PARTITION BY 1 ORDER BY submission_date ASC) AS Day
  
  FROM 
  
  (
  SELECT DISTINCT submission_date
      
      FROM Submissions
      
      ) sub
  ),
  
  Max_Hacker_Submissions AS (
  
      SELECT 
      submission_date,
      hacker_id,
      name,
      submission_count,
      ROW_NUMBER() OVER (PARTITION BY submission_date ORDER BY submission_count DESC, hacker_id ASC) AS submission_order
                         
          FROM (
              
          SELECT 
          Submissions.submission_date,
          Submissions.hacker_id,
          Hackers.name,
          COUNT(Submissions.submission_id) as submission_count
          FROM Submissions
              
          JOIN Hackers
          ON Submissions.hacker_id = Hackers.hacker_id
              
              
          GROUP BY Submissions.submission_date, Submissions.hacker_id, Hackers.name
            
          ) Sub
      
  )
  
  
  SELECT 
  Hacker_Daily_Submissions.submission_date, 
  COUNT(DISTINCT Hacker_Daily_Submissions.Hacker_id),
  Max_Hacker_Submissions.hacker_id,
  Max_Hacker_Submissions.name
  
  
  FROM Hacker_Daily_Submissions
  
  JOIN Distinct_Days_Ordered
  ON Hacker_Daily_Submissions.submission_date = Distinct_Days_Ordered.submission_date
  AND Hacker_Daily_Submissions.Daily_Submissions_Ordered = Distinct_Days_Ordered.Day
  
  JOIN Max_Hacker_Submissions
  ON Hacker_Daily_Submissions.submission_date = Max_Hacker_Submissions.submission_date
  AND Max_Hacker_Submissions.submission_order = 1
  
  GROUP BY Hacker_Daily_Submissions.submission_date, Max_Hacker_Submissions.hacker_id,
  Max_Hacker_Submissions.name
  
  ORDER BY Hacker_Daily_Submissions.submission_date`
  },
  // {
  //   id: 55,
  //   problemLink: "",
  //   questionTitle: "",
  //   question: "See Link To Question (Click Number)",
  //   solution: ``
  // },
  // {
  //   id: 40,
  //   problemLink: "",
  //   questionTitle: "",
  //   question: "See Link To Question (Click Number)",
  //   solution: ``
  // }

];