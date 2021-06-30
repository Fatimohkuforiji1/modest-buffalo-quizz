-- make 6 students take all 3 tests
-- each test should have differnt teachers

-- React data 
INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id,percentage_pass_rate) VALUES ('React week 1','Review week one react class','testURL.....',1,1,70 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What programming lanugage does React use?',1,'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (1, 'python');
INSERT INTO answers (question_id,answer) VALUES (1, 'C#');
INSERT INTO answers (question_id,answer) VALUES (1, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (1, 'JavaScript');

-- A1 React
-- West Midlands
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,1,'PHP',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,2,'JavaScript',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,3,'C#',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,4,'JavaScript',true);

-- South Africa
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,5,'JavaScript',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,6,'JavaScript',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,7,'JavaScript',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,8,'PHP',false);

-- Palestine
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,8,'python',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,8,'PHP',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,8,'JavaScript',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,8,'JavaScript',true);



INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these names is not a programming language?',1,'Lobo');
INSERT INTO answers (question_id,answer) VALUES (2, 'Python');
INSERT INTO answers (question_id,answer) VALUES (2, 'Lobo');
INSERT INTO answers (question_id,answer) VALUES (2, 'Java');
INSERT INTO answers (question_id,answer) VALUES (2, 'JavaScript');

--A2 React
--West Midlands
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,1,'Lobo',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,2,'Lobo',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,3,'Java',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,4,'Lobo',true);

-- South Africa
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,5,'Lobo',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,6,'Python',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,7,'Lobo',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,8,'Lobo',true);

-- Palestine
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,9,'Lobo',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,10,'Lobo',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,11,'Lobo',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,12,'Java',false);


INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which person is not related to technology?',1,'John Mayor');
INSERT INTO answers (question_id,answer) VALUES (3, 'John Mayjor');
INSERT INTO answers (question_id,answer) VALUES (3, 'Bill Gates');
INSERT INTO answers (question_id,answer) VALUES (3, 'Steve Jobs');
INSERT INTO answers (question_id,answer) VALUES (3, 'Todd Howard');

--A3 React
-- West Midlands 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,1,'John Mayjor',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,2,'Steve Jobs',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,3,'Steve Jobs',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,4,'John Mayjor',true);

--South Africa
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,5,'John Mayjor',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,6,'Bill Gates',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,7,'Bill Gates',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,8,'John Mayjor',true);

--Palestine
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,9,'John Mayjor',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,10,'Bill Gates',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,11,'John Mayjor',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,12,'Bill Gates',false);



INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these is not a gaming console?',1,'Lynx X');
INSERT INTO answers (question_id,answer) VALUES (4, 'Playstation 5');
INSERT INTO answers (question_id,answer) VALUES (4, 'Lynx X');
INSERT INTO answers (question_id,answer) VALUES (4, 'Xbox X 360');
INSERT INTO answers (question_id,answer) VALUES (4, 'Nintendo Switch');

--A4 React
--West Midlands 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,1,'Xbox X 360',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,2,'Lynx X',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,3,'Xbox X 360',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,4,'Xbox X 360',false);

-- South Africa
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,5,'Lynx X',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,6,'Lynx X',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,7,'Lynx X',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,8,'Lynx X',true);

-- Palestine 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,9,'Lynx X',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,10,'Xbox X 360',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,11,'Lynx X',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,12,'Lynx X',true);


INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which item in the list is not a computer accessary?',1,'A comb');
INSERT INTO answers (question_id,answer) VALUES (5, 'A comb');
INSERT INTO answers (question_id,answer) VALUES (5, 'A computer Keyboard');
INSERT INTO answers (question_id,answer) VALUES (5, 'A power adaptor');
INSERT INTO answers (question_id,answer) VALUES (5, 'A compuer monitor');

--A5 React
-- West Midlands
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);

-- South Africa
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);

-- Palestine
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);


INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these is not a language?',1,'Apple');
INSERT INTO answers (question_id,answer) VALUES (6, 'Apple');
INSERT INTO answers (question_id,answer) VALUES (6, 'Java');
INSERT INTO answers (question_id,answer) VALUES (6, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (6, 'Python');

--A6 React
--West Midlands 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,1,'Python',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,2,'Apple',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,3,'Apple',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,4,'Apple',true);

-- South Africa 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,5,'Apple',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,6,'Apple',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,7,'Apple',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,8,'Python',false);

-- Palestine 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,9,'Python',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,10,'Apple',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,11,'Apple',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,12,'Apple',true);


-- javascript
INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript 1','Review week 1 javascript class','testURL1.....',2,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which tool can you use to ensure code quality?',2,'ESLint');
INSERT INTO answers (question_id,answer) VALUES (7, 'Angula');
INSERT INTO answers (question_id,answer) VALUES (7, 'jQuery');
INSERT INTO answers (question_id,answer) VALUES (7, 'RequireJS');
INSERT INTO answers (question_id,answer) VALUES (7, 'ESLint');

--A1 JS 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(7,1,'ESLint',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(7,2,'RequireJS',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(7,3,'ESLint',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(7,4,'RequireJS',false);


INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Who invented JavaScript?',2,'Brendan Eich');
INSERT INTO answers (question_id,answer) VALUES (8, 'Douglas Crockford');
INSERT INTO answers (question_id,answer) VALUES (8, 'Sheryl Sandberg');
INSERT INTO answers (question_id,answer) VALUES (8, 'Brendan Eich');
INSERT INTO answers (question_id,answer) VALUES (8, 'Robert W Clarke');

--A2 JS 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,1,'Brendan Eich',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,2'Brendan Eich',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,3,'Sheryl Sandberg',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,4,'Robert W Clarke',false);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,5,'Brendan Eich',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,6,'Brendan Eich',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,7,'Sheryl Sandberg',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,8,'Robert W Clarke',false);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,9,'Brendan Eich',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,10,'Brendan Eich',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,11,'Robert W Clarke',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,12,'Robert W Clarke',false);


INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these is a JavaScript package manager?',2,'npm');
INSERT INTO answers (question_id,answer) VALUES (9, 'Eliesum grey');
INSERT INTO answers (question_id,answer) VALUES (9, 'TypeScript');
INSERT INTO answers (question_id,answer) VALUES (9, 'Node.js');
INSERT INTO answers (question_id,answer) VALUES (9, 'npm');

--A3 JS  
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,1,'npm',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,2,'Node.js',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,3,'Node.js',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,4,'Node.js',false);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,5,'npm',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,6,'Node.js',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,7,'Node.js',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,8,'Node.js',false);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,9,'npm',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,10,'npm',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,11,'npm',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,12,'npm',true);



INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these variables is not apart of the JavaScript language?',2,'str');
INSERT INTO answers (question_id,answer) VALUES (10, 'const');
INSERT INTO answers (question_id,answer) VALUES (10, 'let');
INSERT INTO answers (question_id,answer) VALUES (10, 'var');
INSERT INTO answers (question_id,answer) VALUES (10, 'str');

--A4 JS
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,1,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,2,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,3,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,4,'str',true);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,5,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,6,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,7,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,8,'str',true);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,9,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,10,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,11,'str',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,12,'str',true);


INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What is the meaning of JSON?',2,' JavaScript Object Notation');
INSERT INTO answers (question_id,answer) VALUES (11,'JavaScript Object Notation');
INSERT INTO answers (question_id,answer) VALUES (11,'JavaScript Orientated Notation');
INSERT INTO answers (question_id,answer) VALUES (11,'JavaScript Object Navigation');
INSERT INTO answers (question_id,answer) VALUES (11,'Java Object Notation');

--A5 JS 
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Object Notation',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Orientated Notation',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Object Notation',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Orientated Notation',false);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Object Notation',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Orientated Notation',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Orientated Notation',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Object Notation',true);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Orientated Notation',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Orientated Notation',false);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Object Notation',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Object Notation',true);


INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which syntax can not be used to enclose strings in JavaScript?',2,'^book^');
INSERT INTO answers (question_id,answer) VALUES (12, '"book"');
INSERT INTO answers (question_id,answer) VALUES (12, '`book`');
INSERT INTO answers (question_id,answer) VALUES (12, 'book');
INSERT INTO answers (question_id,answer) VALUES (12, '^book^');

--A6 JS
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);

INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(12,1,'^book^',true);




-- SQL
INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id,percentage_pass_rate) VALUES ('SQL 1','Review week 1 SQL class','testURL.....',1,3, 75);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What the SQL language used for',2,'Building databases');
INSERT INTO answers (question_id,answer) VALUES (6, 'Creating UI components');
INSERT INTO answers (question_id,answer) VALUES (6, 'Creating server endpoints');
INSERT INTO answers (question_id,answer) VALUES (6, 'As a Javascript framework');
INSERT INTO answers (question_id,answer) VALUES (6, 'Building databases');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,1,'Creating server endpoints',false);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('',2,'Building databases');
INSERT INTO answers (question_id,answer) VALUES (6, 'Creating UI components');
INSERT INTO answers (question_id,answer) VALUES (6, 'Creating server endpoints');
INSERT INTO answers (question_id,answer) VALUES (6, 'As a Javascript framework');
INSERT INTO answers (question_id,answer) VALUES (6, 'Building databases');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,1,'Creating server endpoints',false);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What the SQL language used for',2,'Building databases');
INSERT INTO answers (question_id,answer) VALUES (6, 'Creating UI components');
INSERT INTO answers (question_id,answer) VALUES (6, 'Creating server endpoints');
INSERT INTO answers (question_id,answer) VALUES (6, 'As a Javascript framework');
INSERT INTO answers (question_id,answer) VALUES (6, 'Building databases');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,1,'Creating server endpoints',false);