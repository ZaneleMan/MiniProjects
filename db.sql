CREATE DATABASE todos; 

CREATE TABLE todos(
    todoid VARCHAR, 
    description VARCHAR, 

    PRIMARY KEY(todoid)
); 

CREATE TABLE employee(
 					 employeeID VARCHAR, 
 					 employeeGivenName VARCHAR,
 					 employeeLastName VARCHAR,
 					 dateOfBirth DATE,
 					 email VARCHAR ,
 					 Address TEXT,
 					 contractType TEXT ,
 					 jobTitle TEXT ,
 					 empPassword VARCHAR ,  
  					 createdBy VARCHAR ,   
 					 createdAt VARCHAR DEFAULT TO_CHAR(NOW(), 'dd/mm/yyyy'), 
 					 departmentID VARCHAR  , 
					  
 					 PRIMARY KEY (employeeID),
					  
                     FOREIGN KEY(departmentID) REFERENCES department(departmentID)
 					 );
ALTER TABLE employee ADD CONSTRAINT kf_createdby_employee FOREIGN KEY (createdBy) REFERENCES super_users(adminID);


CREATE TABLE department (
 						   departmentID VARCHAR,
 						   departmentName VARCHAR, 
 						   createdAt  VARCHAR DEFAULT TO_CHAR(NOW(), 'dd/mm/yyyy'),
 						   createdBy VARCHAR,  
						   
 						   PRIMARY KEY(departmentID)

 						);
						

 create table super_users(
 						  adminID VARCHAR,
	 					  workPosition VARCHAR,
	 					  
	 					  PRIMARY KEY (adminID)
	 
 						);
