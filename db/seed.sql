use employee;
insert into department
(name)
values
("ENGINEERING"),("FINANCE"),("SALES"),("MARKETING");
insert into role
(title,salary,department_id)
values
("JUNIOR",40000,001),("MID LEVEL",70000,002),("SENIOR",100000,003),("DIRECTOR",180000,004);
insert into employee
(first_name,last_name,role_id,manager_id)
("Sally","Mae",001,005),("Bob","Heinz",002,006),("Pepper","Corn",003,007),("Kenneth","Gee",004,null);