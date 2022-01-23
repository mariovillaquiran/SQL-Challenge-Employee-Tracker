DROP DATABASE IF EXISTS employeetracker;
CREATE DATABASE employeetracker;
USE employeetracker; 
CREATE TABLE department (
    id INT unsigned auto_increment PRIMARY KEY, 
    name VARCHAR(30) unique not null
);
CREATE TABLE role (
    id INT unsigned auto_increment PRIMARY KEY, 
    title VARCHAR(30) unique not null, 
    salary DECIMAL unique not null , 
    department_id INT unsigned not null, 
);
CREATE TABLE employee (
    id INT unsigned auto_increment PRIMARY KEY, 
    first_name VARCHAR(30) unique not null, 
    last_name VARCHAR(30) unique not null, 
    role_id INT unique not null , 
    manager_id INT unique not null, 
);
