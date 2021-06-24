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



INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id) VALUES ('React week 1','Review week one react class','testURL.....',1,1 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What programming lanugage does React use?',1,'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (1, 'python');
INSERT INTO answers (question_id,answer) VALUES (1, 'C#');
INSERT INTO answers (question_id,answer) VALUES (1, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (1, 'JavaScript');
INSERT INTO student_quiz_answers  (question_id,, student_id,student_answer,is_correct) VALUES(1,1,'PHP',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id) VALUES ('React week 1','Review week one react class test 2','testURL2.....',1,1 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these names is not a programming language?',1,'Lobo');
INSERT INTO answers (question_id,answer) VALUES (1, 'Python');
INSERT INTO answers (question_id,answer) VALUES (1, 'Lobo');
INSERT INTO answers (question_id,answer) VALUES (1, 'Java');
INSERT INTO answers (question_id,answer) VALUES (1, 'JavaScript');
INSERT INTO student_quiz_answers  (question_id,, student_id,student_answer,is_correct) VALUES(1,1,'Lobo',false);

INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id) VALUES ('React week 1','Review week one react class test 3','testURL3.....',1,1 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which perosn is not related to technology?',1,'John Mayor');
INSERT INTO answers (question_id,answer) VALUES (1, 'John Mayjor');
INSERT INTO answers (question_id,answer) VALUES (1, 'Bill Gates');
INSERT INTO answers (question_id,answer) VALUES (1, 'Steve Jobs');
INSERT INTO answers (question_id,answer) VALUES (1, 'Todd Howard');
INSERT INTO student_quiz_answers  (question_id,, student_id,student_answer,is_correct) VALUES(1,1,'John Mayjor',true);