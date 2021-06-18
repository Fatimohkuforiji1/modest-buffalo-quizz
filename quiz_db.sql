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
id  SERIAL PRIMARY KEY,
first_name  VARCHAR(150) NOT NULL,
last_name  VARCHAR(150) NOT NULL,
email  VARCHAR(150) NOT NULL,
user_password  VARCHAR(75) NOT NULL,
groups_id   integer,
module_id   integer,
city     VARCHAR(100) NOT NULL,
country  VARCHAR(100) NOT NULL,
FOREIGN KEY  (groups_id)REFERENCES groups(id),
FOREIGN KEY (module_id)REFERENCES modules(id)
);

CREATE TABLE teachers (
id       SERIAL PRIMARY KEY,
first_name  VARCHAR(150) NOT NULL,
last_name     VARCHAR(150) NOT NULL,
email        VARCHAR(150) NOT NULL,
user_password     VARCHAR(50) NOT NULL,
city     VARCHAR(50) NOT NULL,
country  VARCHAR(50) NOT NULL,
module_id integer,
FOREIGN KEY (module_id)REFERENCES modules(id)
);

CREATE TABLE quizzes (
id       SERIAL PRIMARY KEY,
title  VARCHAR(150) NOT NULL,
quiz_description  VARCHAR(150) NOT NULL,
is_mulitple_c BOOLEAN NOT NULL,
image_url  VARCHAR(250) NOT NULL,
teacher_id  integer,
date_added TIMESTAMPTZ DEFAULT(CURRENT_TIMESTAMP),
FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);

CREATE TABLE questions (
id       SERIAL PRIMARY KEY,
question  VARCHAR(350) NOT NULL,
quiz_id   integer, 
correct_answer  VARCHAR(150),
FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);

CREATE TABLE answers (
id       SERIAL PRIMARY KEY,
question_id integer,
answer  VARCHAR(150),
FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE student_quiz_answers(
id       SERIAL PRIMARY KEY,
quiz_id  integer,
question_id integer,
student_answer  VARCHAR(50) NOT NULL,
is_correct BOOLEAN,
FOREIGN KEY (quiz_id) REFERENCES quizzes(id),
FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO groups (group_name) VALUES ('West Midlands 3');
INSERT INTO groups (group_name) VALUES ('South Africa 2');
INSERT INTO groups (group_name) VALUES ('Palestine 1');

INSERT INTO modules (module_name) VALUES ('React');
INSERT INTO modules (module_name) VALUES ('JavaScript');
INSERT INTO modules (module_name) VALUES ('SQL');


INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city,country) VALUES ('David Earl','Saint','dsaint@gmail.com','hk9hsbsuJ',1,1,'Birmingham','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Sara Sally','Smith-Jackson','sssj@gmail.com','jh9HSKU9-9h',1,1,'Birmigham','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city,country) VALUES ('John','Smith','js@gmail.com','b-tsg-shsh-js',1,1,'Dudley','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city,country) VALUES ('Samuel Jacob','Adams','sja@yahoo.com','b-REEK-91191',1,1,'Coventry','UK');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Arno James','Johnson','ajj@yahoo.com','bhj726gvabmUgv',2,2,'Cape Town','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Samantha Jasmine','Gordana','ajj@yahoo.com','bhj726gvabmUgv',2,2,'Cape Town','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Sello Maake','KaNcube','sja@smkproductions.com','TY-hshs89-Hhj',2,2,'Soweto','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Lesley-Ann','Brandt','lab@gmail.com','5454usbsg-YT',2,2,'Cape Town','South Africa');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Emile Salem','Muhammad','sja@yahoo.com','b-REEK-91191',3,3, 'Ramallah','Palestine');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Sara','Kaur','sk1990@yahoo.com','b-Rkkjh28',3,3,'Ramallah','Palestine');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Neelam','Kaur','nkaur@aol.com','iuuhyvfrd7363-hdhJ',3,3,'Ramallah','Palestine');
INSERT INTO students (first_name, last_name, email,user_password, groups_id, module_id, city, country) VALUES ('Mariam','Smith','mhsmith@aol.com','HIjhnhjsh-029',3,3,'Ramallah','Palestine');

INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Fatty','Kihjhj','fkj@gmail.com','bbbjsh89-Uh-bb','Birmigham','UK',1);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Scarlet Sara','Grey','white@gmail.com','jhjhvjhvjhv9s','London','UK',1);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Clara','Janes','clara@gmail.com','g&977-ksh33u-ggg','London','UK',1);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Bilqis','Dhan','bjhda@gmail.com','JSKKyy2jdde','Cape Town','South Africa',2);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Deghe','Cbit','dehgdc@gmail.com','JSfgfgbAAAk','Cape Town','South Africa',2);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Funim','Fate','sffm@gmail.com','GTguiikd-1','Cape Town','South Africa',2);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Adrian','Jamie Siad','ajs@gmail.com','g&K-5X-hhsy-E33sSg','West Bank','Palestine',3);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Samia','Ismail','cyf.io@hotmail.com','ghsdadADDJA0008s','West Bank','Palestine',3);
INSERT INTO teachers (first_name, last_name, email,user_password, city, country, module_id) VALUES ('Susana Julia','Clarke','sjc@gmail.com','JSKKK22j-E','West Bank','Palestine',3);

INSERT INTO quizzes (title,quiz_description,is_mulitple_c,image_url,teacher_id) VALUES ('React week 1','Review week one react class',true,'testURL.....',1 );
INSERT INTO quizzes (title,quiz_description,is_mulitple_c,image_url,teacher_id) VALUES ('React week 1','testing your understanding of react',true,'sdadsadadsadasdasd',1 );
INSERT INTO quizzes (title,quiz_description,is_mulitple_c,image_url,teacher_id) VALUES ('JavaScript','intro to debugging',true,'test..URL',2 );

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What programming lanugage does React use?',1,'JavaScript');
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What is everything called in React?',2,'Component');
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What is CYF cooperate colour',3,'red');

INSERT INTO answers (question_id,answer) VALUES (1, 'python');
INSERT INTO answers (question_id,answer) VALUES (1, 'C#');
INSERT INTO answers (question_id,answer) VALUES (1, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (1, 'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (2, 'Module');
INSERT INTO answers (question_id,answer) VALUES (2, 'Component');
INSERT INTO answers (question_id,answer) VALUES (2, 'Package');
INSERT INTO answers (question_id,answer) VALUES (2, 'Class');
INSERT INTO answers (question_id,answer) VALUES (3, 'green');
INSERT INTO answers (question_id,answer) VALUES (3, 'grey');
INSERT INTO answers (question_id,answer) VALUES (3, 'yellow');
INSERT INTO answers (question_id,answer) VALUES (3, 'red');


INSERT INTO student_quiz_answers  (quiz_id,question_id,student_answer,is_correct) VALUES(1,1,'PHP',false);
INSERT INTO student_quiz_answers  (quiz_id,question_id,student_answer,is_correct)VALUES (2,2,'Component',true);
INSERT INTO student_quiz_answers  (quiz_id,question_id,student_answer,is_correct)VALUES (3,3,'red',true);



