DROP DATABASE IF EXISTS employeetracker;
CREATE DATABASE employeetracker;
USE employeetracker; 
CREATE TABLE department (
    id INT unsigned auto_increment PRIMARY KEY, 
    name VARCHAR(30) unique not null
);
