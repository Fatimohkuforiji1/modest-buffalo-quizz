-- make 6 students take all 3 tests
-- each test should have differnt teachers

-- React 
--Q1
INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id,percentage_pass_rate) VALUES ('React week 1','Review week one react class','testURL.....',1,1,70 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What programming lanugage does React use?',1,'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (1, 'python');
INSERT INTO answers (question_id,answer) VALUES (1, 'C#');
INSERT INTO answers (question_id,answer) VALUES (1, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (1, 'JavaScript');

--Q2
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these names is not a programming language?',1,'Lobo');
INSERT INTO answers (question_id,answer) VALUES (2, 'Python');
INSERT INTO answers (question_id,answer) VALUES (2, 'Lobo');
INSERT INTO answers (question_id,answer) VALUES (2, 'Java');
INSERT INTO answers (question_id,answer) VALUES (2, 'JavaScript');

--Q3
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which person is not related to technology?',1,'John Mayor');
INSERT INTO answers (question_id,answer) VALUES (3, 'John Mayjor');
INSERT INTO answers (question_id,answer) VALUES (3, 'Bill Gates');
INSERT INTO answers (question_id,answer) VALUES (3, 'Steve Jobs');
INSERT INTO answers (question_id,answer) VALUES (3, 'Todd Howard');

--Q4
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these is not a gaming console?',1,'Lynx X');
INSERT INTO answers (question_id,answer) VALUES (4, 'Playstation 5');
INSERT INTO answers (question_id,answer) VALUES (4, 'Lynx X');
INSERT INTO answers (question_id,answer) VALUES (4, 'Xbox X 360');
INSERT INTO answers (question_id,answer) VALUES (4, 'Nintendo Switch');

--Q5
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which item in the list is not a computer accessary?',1,'A comb');
INSERT INTO answers (question_id,answer) VALUES (5, 'A comb');
INSERT INTO answers (question_id,answer) VALUES (5, 'A computer Keyboard');
INSERT INTO answers (question_id,answer) VALUES (5, 'A power adaptor');
INSERT INTO answers (question_id,answer) VALUES (5, 'A compuer monitor');

--Q6
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these is not a language?',1,'Apple');
INSERT INTO answers (question_id,answer) VALUES (6, 'Apple');
INSERT INTO answers (question_id,answer) VALUES (6, 'Java');
INSERT INTO answers (question_id,answer) VALUES (6, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (6, 'Python');


-- javascript
--Q7
INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript 1','Review week 1 javascript class','testURL1.....',2,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which tool can you use to ensure code quality?',2,'ESLint');
INSERT INTO answers (question_id,answer) VALUES (7, 'Angula');
INSERT INTO answers (question_id,answer) VALUES (7, 'jQuery');
INSERT INTO answers (question_id,answer) VALUES (7, 'RequireJS');
INSERT INTO answers (question_id,answer) VALUES (7, 'ESLint');

--Q8
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Who invented JavaScript?',2,'Brendan Eich');
INSERT INTO answers (question_id,answer) VALUES (8, 'Douglas Crockford');
INSERT INTO answers (question_id,answer) VALUES (8, 'Sheryl Sandberg');
INSERT INTO answers (question_id,answer) VALUES (8, 'Brendan Eich');
INSERT INTO answers (question_id,answer) VALUES (8, 'Robert W Clarke');

--Q9
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these is a JavaScript package manager?',2,'npm');
INSERT INTO answers (question_id,answer) VALUES (9, 'Eliesum grey');
INSERT INTO answers (question_id,answer) VALUES (9, 'TypeScript');
INSERT INTO answers (question_id,answer) VALUES (9, 'Node.js');
INSERT INTO answers (question_id,answer) VALUES (9, 'npm');

--Q10
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these variables is not apart of the JavaScript language?',2,'str');
INSERT INTO answers (question_id,answer) VALUES (10, 'const');
INSERT INTO answers (question_id,answer) VALUES (10, 'let');
INSERT INTO answers (question_id,answer) VALUES (10, 'var');
INSERT INTO answers (question_id,answer) VALUES (10, 'str');

--Q11
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What is the meaning of JSON?',2,' JavaScript Object Notation');
INSERT INTO answers (question_id,answer) VALUES (11,'JavaScript Object Notation');
INSERT INTO answers (question_id,answer) VALUES (11,'JavaScript Orientated Notation');
INSERT INTO answers (question_id,answer) VALUES (11,'JavaScript Object Navigation');
INSERT INTO answers (question_id,answer) VALUES (11,'Java Object Notation');

--Q12
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which syntax can not be used to enclose strings in JavaScript?',2,'^book^');
INSERT INTO answers (question_id,answer) VALUES (12, '"book"');
INSERT INTO answers (question_id,answer) VALUES (12, '`book`');
INSERT INTO answers (question_id,answer) VALUES (12, 'book');
INSERT INTO answers (question_id,answer) VALUES (12, '^book^');

