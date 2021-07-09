drop table if exists student_quiz_answers cascade;
drop table if exists answers cascade;
drop table if exists questions cascade;
drop table if exists quizzes cascade;
drop table if exists students cascade;
drop table if exists teachers cascade;
drop table if exists modules cascade;
drop table if exists groups cascade;

CREATE TABLE groups (
  id       SERIAL PRIMARY KEY,
  group_name  VARCHAR(100) NOT NULL
);

CREATE TABLE modules (
  id       SERIAL PRIMARY KEY,
  module_name     VARCHAR(50) NOT NULL
);

CREATE TABLE students (
  id       SERIAL PRIMARY KEY,
  first_name  VARCHAR(150) NOT NULL,
  last_name  VARCHAR(150) NOT NULL,
  email  VARCHAR(150) NOT NULL,
  user_password  VARCHAR(250) NOT NULL,
  groups_id   INT REFERENCES groups(id),
  city     VARCHAR(100) NOT NULL,
  country  VARCHAR(100) NOT NULL
);

CREATE TABLE teachers (
  id       SERIAL PRIMARY KEY,
  first_name  VARCHAR(150) NOT NULL,
  last_name     VARCHAR(150) NOT NULL,
  email        VARCHAR(150) NOT NULL,
  user_password     VARCHAR(250) NOT NULL,
  city     VARCHAR(50) NOT NULL,
  country  VARCHAR(50) NOT NULL
);

CREATE TABLE quizzes (
  id       SERIAL PRIMARY KEY,
  title  VARCHAR(150) NOT NULL,
  quiz_description  VARCHAR(150) NOT NULL,
  image_url  VARCHAR(250) NOT NULL,
  teacher_id  INT REFERENCES teachers(id),
  module_id   INT REFERENCES modules(id),
  percentage_pass_rate DECIMAL(5,2),
  date_added TIMESTAMPTZ DEFAULT(CURRENT_TIMESTAMP) 
);

CREATE TABLE questions (
  id       SERIAL PRIMARY KEY,
  question  VARCHAR(350) NOT NULL,
  quiz_id  INT REFERENCES quizzes(id),
  correct_answer  VARCHAR(150)
);

CREATE TABLE answers (
  id       SERIAL PRIMARY KEY,
  question_id INT REFERENCES questions(id),
  answer  VARCHAR(150)
);

CREATE TABLE student_quiz_answers(
  id       SERIAL PRIMARY KEY,
  question_id INT REFERENCES questions(id),
  student_answer  VARCHAR(150) NOT NULL,
  student_id INT REFERENCES students(id),
  is_correct BOOLEAN
);


INSERT INTO students (first_name, last_name, email,user_password, groups_id, city,country) VALUES ('David Earl','Saint','dsaint@gmail.com','hk9hsbsuJ',1,'Birmingham','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Sara Sally','Smith-Jackson','sssj@gmail.com','jh9HSKU9-9h',1,'Birmigham','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city,country) VALUES ('John','Smith','js@gmail.com','b-tsg-shsh-js',1,'Dudley','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city,country) VALUES ('Samuel Jacob','Adams','sja@yahoo.com','b-REEK-91191',1,'Coventry','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Arno James','Johnson','ajj@yahoo.com','bhj726gvabmUgv',2,'Cape Town','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Samantha Jasmine','Gordana','ajj@yahoo.com','bhj726gvabmUgv',2,'Cape Town','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Sello Maake','KaNcube','sja@smkproductions.com','TY-hshs89-Hhj',2,'Soweto','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Lesley-Ann','Brandt','lab@gmail.com','5454usbsg-YT',2,'Cape Town','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Emile Salem','Muhammad','sja@yahoo.com','b-REEK-91191',3, 'Ramallah','Palestine');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Sara','Kaur','sk1990@yahoo.com','b-Rkkjh28',3,'Ramallah','Palestine');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Neelam','Kaur','nkaur@aol.com','iuuhyvfrd7363-hdhJ',3,'Ramallah','Palestine');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, city, country) VALUES ('Mariam','Smith','mhsmith@aol.com','HIjhnhjsh-029',3,'Ramallah','Palestine');

INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Fatty','Kihjhj','fkj@gmail.com','bbbjsh89-Uh-bb','Birmigham','UK');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Scarlet Sara','Grey','white@gmail.com','jhjhvjhvjhv9s','London','UK');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Clara','Janes','clara@gmail.com','g&977-ksh33u-ggg','London','UK');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Bilqis','Dhan','bjhda@gmail.com','JSKKyy2jdde','Cape Town','South Africa');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Deghe','Cbit','dehgdc@gmail.com','JSfgfgbAAAk','Cape Town','South Africa');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Funim','Fate','sffm@gmail.com','GTguiikd-1','Cape Town','South Africa');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Adrian','Jamie Siad','ajs@gmail.com','g&K-5X-hhsy-E33sSg','West Bank','Palestine');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Samia','Ismail','cyf.io@hotmail.com','ghsdadADDJA0008s','West Bank','Palestine');
INSERT INTO teachers (first_name, last_name, email,user_password, city, country) VALUES ('Susana Julia','Clarke','sjc@gmail.com','JSKKK22j-E','West Bank','Palestine');

INSERT INTO modules (module_name) VALUES ('React');
INSERT INTO modules (module_name) VALUES ('JavaScript');
INSERT INTO modules (module_name) VALUES ('SQL');

INSERT INTO groups (group_name) VALUES ('West Midlands 3');
INSERT INTO groups (group_name) VALUES ('South Africa 2');
INSERT INTO groups (group_name) VALUES ('Palestine 1');



INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('React','Review React Undertsanding','testURL.....',1,1, 70);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What programming lanugage does React use?',1,'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (1, 'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (1, 'C#');
INSERT INTO answers (question_id,answer) VALUES (1, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (1, 'python');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,1,'PHP',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('React','Review React Undertsanding','testURL2.....',1,1, 70);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these names is a programming language?',2,'Python');
INSERT INTO answers (question_id,answer) VALUES (2, 'Python');
INSERT INTO answers (question_id,answer) VALUES (2, 'Lobo');
INSERT INTO answers (question_id,answer) VALUES (2, 'Perl');
INSERT INTO answers (question_id,answer) VALUES (2, 'Amharic');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,1,'Python',true);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('React','Review React Undertsanding','testURL3.....',1,1, 70 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES (' Elements are the smallest building blocks of which apps.',3,'React');
INSERT INTO answers (question_id,answer) VALUES (3, 'React');
INSERT INTO answers (question_id,answer) VALUES (3, 'HTML');
INSERT INTO answers (question_id,answer) VALUES (3, 'Nodes');
INSERT INTO answers (question_id,answer) VALUES (3, 'CSS');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,1,'React',true);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('React','Review React Undertsanding','testURL4.....',1,1, 70 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What do we use to render another component for efficiently re-using the code?',4,'Props');
INSERT INTO answers (question_id,answer) VALUES (4, 'Props');
INSERT INTO answers (question_id,answer) VALUES (4, 'Component');
INSERT INTO answers (question_id,answer) VALUES (4, 'Render');
INSERT INTO answers (question_id,answer) VALUES (4, 'Switch');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,1,'Props',true);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('React','Review React Undertsanding','testURL3.....',1,1, 70 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which word do we use to export a component in React?',5,'export default');
INSERT INTO answers (question_id,answer) VALUES (5, 'export default');
INSERT INTO answers (question_id,answer) VALUES (5, 'export react');
INSERT INTO answers (question_id,answer) VALUES (5, 'default import');
INSERT INTO answers (question_id,answer) VALUES (5, 'import react');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'export react',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript','Review JavaScript understanding','testURL1.....',1,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('A program that is an Object-based Programming language',6,'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (6, 'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (6, 'Node');
INSERT INTO answers (question_id,answer) VALUES (6, 'HTML');
INSERT INTO answers (question_id,answer) VALUES (6, 'CSS');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,1,'Node',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript','Review JavaScript understanding','testURL2.....',1,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of the names is a JavaScript Data type',7,'Number');
INSERT INTO answers (question_id,answer) VALUES (7, 'Number');
INSERT INTO answers (question_id,answer) VALUES (7, 'Operator');
INSERT INTO answers (question_id,answer) VALUES (7, 'Syntax');
INSERT INTO answers (question_id,answer) VALUES (7, 'TypeOf');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(7,1,'Syntax',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript','Review JavaScript understanding','testURL3.....',1,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('which sign is used to Break within a string statement',8,'\');
INSERT INTO answers (question_id,answer) VALUES (8, '\');
INSERT INTO answers (question_id,answer) VALUES (8, '~');
INSERT INTO answers (question_id,answer) VALUES (8, '*');
INSERT INTO answers (question_id,answer) VALUES (8, '|');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,1,'|',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript','Review JavaScript understanding','testURL4.....',1,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What is === operator?',9,'strictly equality');
INSERT INTO answers (question_id,answer) VALUES (9, 'strictly equality');
INSERT INTO answers (question_id,answer) VALUES (9, 'equality');
INSERT INTO answers (question_id,answer) VALUES (9, 'partially equality');
INSERT INTO answers (question_id,answer) VALUES (9, 'All of the above');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,1,'strictly equality',true);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript','Review JavaScript understanding','testURL5.....',1,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which sign is use for an array in JavaScript',10,'[]');
INSERT INTO answers (question_id,answer) VALUES (10, '[]');
INSERT INTO answers (question_id,answer) VALUES (10, '{}');
INSERT INTO answers (question_id,answer) VALUES (10, '()');
INSERT INTO answers (question_id,answer) VALUES (10, '||');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,1,'[]',true);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('SQL','Review understanding of SQL','testURL1.....',1,3, 65);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which SQL function is used to count the number of rows in a SQL query?',11,'COUNT()');
INSERT INTO answers (question_id,answer) VALUES (11, 'COUNT()');
INSERT INTO answers (question_id,answer) VALUES (11, 'NUMBER()');
INSERT INTO answers (question_id,answer) VALUES (11, 'SUM()');
INSERT INTO answers (question_id,answer) VALUES (11, 'TOP()');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'Top()',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('SQL','Review understanding of SQL','testURL2.....',1,3, 65);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('The FROM SQL clause is used to…',12,'Specify what table we are selecting or deleting data from');
INSERT INTO answers (question_id,answer) VALUES (12, 'Specify what table we are selecting or deleting data from');
INSERT INTO answers (question_id,answer) VALUES (12, 'Specify search condition');
INSERT INTO answers (question_id,answer) VALUES (12, 'specify range for search condition');
INSERT INTO answers (question_id,answer) VALUES (12, 'specify what to do on an operation');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'Specify search condition',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('SQL','Review understanding of SQL','testURL3.....',1,3, 65);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of the following is a SQL keyword or SQL clause?',13,'INSERT');
INSERT INTO answers (question_id,answer) VALUES (13, 'INSERT');
INSERT INTO answers (question_id,answer) VALUES (13, 'INVERT');
INSERT INTO answers (question_id,answer) VALUES (13, 'CHOOSE');
INSERT INTO answers (question_id,answer) VALUES (13, 'THEN');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(13,1,'INVERT',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('SQL','Review understanding of SQL','testURL4.....',1,3, 65);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What does DML stand for?',14,'Data Manipulation Language');
INSERT INTO answers (question_id,answer) VALUES (14, 'Data Manipulation Language');
INSERT INTO answers (question_id,answer) VALUES (14, 'Different Mode Level');
INSERT INTO answers (question_id,answer) VALUES (14, 'Data Mode Lane');
INSERT INTO answers (question_id,answer) VALUES (14, 'Data Model Language');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(14,1,'Data Manipulation Language', true);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('SQL','Review understanding of SQL','testURL5.....',1,3, 65);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which SQL keyword is used to retrieve a maximum value?',15,'MAX');
INSERT INTO answers (question_id,answer) VALUES (15, 'MAX');
INSERT INTO answers (question_id,answer) VALUES (15, 'MOST');
INSERT INTO answers (question_id,answer) VALUES (15, 'TOP');
INSERT INTO answers (question_id,answer) VALUES (15, 'UPPER');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(15,1,'UPPER',false);