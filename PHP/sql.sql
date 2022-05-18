create database school;

create user 'Ali'@'127.0.0.1' identified by '123';

grant select, update on school.* to 'Ali'@'127.0.0.1';

show grants for 'Ali'@'127.0.0.1';

revoke select on school.* from 'Ali'@'127.0.0.1';

create table students (
	stu_id int primary key,
    stu_name varchar(20) not null,
    email varchar(40) unique,
    address varchar(30) );
    

alter table stu rename to students;

alter table stu add column gender enum('Male', 'Female');

alter table students drop column address;

alter table students rename column email to stu_email;

drop table students;


desc students;

insert into students (stu_id, stu_name, stu_email, gender) 
	values(3, 'Mai', 'mai@gmail.com', 'Female'),
    (4, 'Aya', 'aya@gmail.com', 'Female');


select * 
from students
where gender ='Male'
order by stu_id desc;



update students 
set stu_email = 'mohamed@gmail.com'
where stu_id = 1;

delete from students
where stu_id > 3;



select * from students;





Insert into employee (Fname, Lname, Dno, SSN, Superssn)values('ahmed','sameh', 30,102672,112233);

Insert into employee (Fname,Lname,dno,ssn)values('omar','tarek',30,102660); 
  
Insert into Departments values ('Dept it',100,112233,'1/11/2006');

Update employee set salary= salary+(salary*20/100);
//////////////////////////////////////////////////
Select * from Employee;
 
Select (fname , lname , salary, dno) from Employee;
 
Select ( fname,'',lname)as'fullname',salary *12*10/100 as'alias'from Employee; 
 
Select (Fname,Lname,SSN) from employee where salary>1000;

Select (Fname,Lname,SSN) from employee where 12*salary>10000;

Select (Fname,Lname,salary)from employee
where gender ='female'order by emp_id desc;
 








Need the answer?

5641 tutors online. Answers in as fast as 15 minutes.
6.Display the employees Id, name who earns more than 10000 LE annually.

Need the answer?






Data Manipulating Language:
1.
Insert your personal data to the employee table as a new employee in department 
number 30, SSN = 102672, Superssn = 112233.
INSERT INTO employee ( Fname, Lname, Dno, SSN, Superssn )
values ('ahmed','sameh', 30,102672,112233);
2.
Insert another employee with, personal data your friend as new employee in 
department number 30, SSN = 102660, but don't enter any value for salary or 
supervisor number to him.
insert into employee (Fname,Lname,dno,ssn)
values ('omar','tarek',30,102660);
3.
In the department table insert new department called "DEPT IT", with id 100, 
employee with SSN = 112233 as a manager for this department. The start date for this
manager is '1-11-2006'
INSERT INTO Departments values ('Dept it',100,112233,'1/11/2006');
 
4.
Do what is required if you know that: Mrs.Noha Mohamed(SSN=968574) moved to 
be the manager of the new department (id = 100), and they give you (use your SSN 
from question1) her position (Dept. 20 manager) 
a.
First try to update her record in the department table
 
UPDATE Departments 
SET MGRSSN=Null
WHERE Dnum=100 or Dnum=20;
UPDATE Departments 
SET MGRSSN=968574
WHERE Dnum=100;


b.
Update your record to be department 20 manager.
 
UPDATE Departments 
SET MGRSSN=112233
WHERE Dnum=20;
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
c.
Update your friend data (entered in question2) to be in your teamwork 
(supervised by you)
 
UPDATE Employee 
SET superssn=112233
WHERE ssn=102660;
Need the answer?

 
3.
Display all the projects names, locations and the department which is responsible 
about it.
 
SELECT Pname,Plocation,Dnum
from project;
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
4.
If you know that the company policy is to pay an annual commission for each 
employee with specific percent equals 10% of his/her annual salary. Display each 
employee full name and his annual commission in an ANNUAL COMM column 
(alias).
 
select Fname,Lname,1.1*salary as "ANNUAL COMM"
from employee;
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
5.
Display the employees Id, name who earns more than 1000 LE monthly.
 
SELECT Fname,Lname,SSN 
from employee 
where salary>1000;
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
6.
Display the employees Id, name who earns more than 10000 LE annually.
 
SELECT Fname,Lname,SSN 
from employee 
where 12*salary>10000;
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
7.
Display the names and salaries of the female employees
 
SELECT Fname,Lname,salary 
from employee 
where sex='f';
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
8.
Display each department id, name which managed by a manager with id equals 
968574.
 
SELECT Dname,Dnum 
from Departments 
where MGRSSN=968574;
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
9.
Display the IDs, names and locations of the pojects which controlled with 
department 10.
 
SELECT pname,pnumber,plocation
from project
where Dnum=10;
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
10. Display the Department id, name and id and the name of its manager.
11. Display the name of the departments and the name of the projects under its 
control.
12. Display the Id, name and location of the projects in Cairo or Alex city.
Need the answer?
5775 tutors online. Answers in as fast as 15 minutes.
Get it—with an explanation
 
 
13. Display the Projects full data of the projects with a name starts with 
"a"
letter.
14. display all the employees in department 30 whose salary from 1000 to 2000 LE 
monthly


