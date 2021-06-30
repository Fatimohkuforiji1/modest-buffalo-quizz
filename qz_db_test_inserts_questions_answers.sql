-- make 6 students take all 3 tests
-- each test should have differnt teachers

-- React data 
INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id,percentage_pass_rate) VALUES ('React week 1','Review week one react class','testURL.....',1,1,70 );
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What programming lanugage does React use?',1,'JavaScript');
INSERT INTO answers (question_id,answer) VALUES (1, 'python');
INSERT INTO answers (question_id,answer) VALUES (1, 'C#');
INSERT INTO answers (question_id,answer) VALUES (1, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (1, 'JavaScript');


INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(1,1,'PHP',false);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these names is not a programming language?',1,'Lobo');
INSERT INTO answers (question_id,answer) VALUES (2, 'Python');
INSERT INTO answers (question_id,answer) VALUES (2, 'Lobo');
INSERT INTO answers (question_id,answer) VALUES (2, 'Java');
INSERT INTO answers (question_id,answer) VALUES (2, 'JavaScript');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(2,1,'Lobo',true);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which person is not related to technology?',1,'John Mayor');
INSERT INTO answers (question_id,answer) VALUES (3, 'John Mayjor');
INSERT INTO answers (question_id,answer) VALUES (3, 'Bill Gates');
INSERT INTO answers (question_id,answer) VALUES (3, 'Steve Jobs');
INSERT INTO answers (question_id,answer) VALUES (3, 'Todd Howard');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(3,1,'John Mayjor',true);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these is not a gaming console?',1,'Lynx X');
INSERT INTO answers (question_id,answer) VALUES (4, 'Playstation 5');
INSERT INTO answers (question_id,answer) VALUES (4, 'Lynx X');
INSERT INTO answers (question_id,answer) VALUES (4, 'Xbox X 360');
INSERT INTO answers (question_id,answer) VALUES (4, 'Nintendo Switch');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(4,1,'Lynx X',true);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which item in the list is not a computer accessary?',1,'A comb');
INSERT INTO answers (question_id,answer) VALUES (5, 'A comb');
INSERT INTO answers (question_id,answer) VALUES (5, 'A computer Keyboard');
INSERT INTO answers (question_id,answer) VALUES (5, 'A power adaptor');
INSERT INTO answers (question_id,answer) VALUES (5, 'A compuer monitor');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(5,1,'A power adaptor',false);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these is not a language?',1,'Apple');
INSERT INTO answers (question_id,answer) VALUES (6, 'Apple');
INSERT INTO answers (question_id,answer) VALUES (6, 'Java');
INSERT INTO answers (question_id,answer) VALUES (6, 'PHP');
INSERT INTO answers (question_id,answer) VALUES (6, 'Python');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(6,1,'Python',false);



-- javascript
INSERT INTO quizzes (title,quiz_description,image_url,teacher_id,module_id, percentage_pass_rate) VALUES ('JavaScript 1','Review week 1 javascript class','testURL1.....',2,2, 60);
INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which tool can you use to ensure code quality?',2,'ESLint');
INSERT INTO answers (question_id,answer) VALUES (7, 'Angula');
INSERT INTO answers (question_id,answer) VALUES (7, 'jQuery');
INSERT INTO answers (question_id,answer) VALUES (7, 'RequireJS');
INSERT INTO answers (question_id,answer) VALUES (7, 'ESLint');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(7,1,'ESLint',true);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Who invented JavaScript?',2,'Brendan Eich');
INSERT INTO answers (question_id,answer) VALUES (8, 'Douglas Crockford');
INSERT INTO answers (question_id,answer) VALUES (8, 'Sheryl Sandberg');
INSERT INTO answers (question_id,answer) VALUES (8, 'Brendan Eich');
INSERT INTO answers (question_id,answer) VALUES (8, 'Robert W Clarke');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(8,1,'Brendan Eich',false);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which one of these is a JavaScript package manager?',2,'npm');
INSERT INTO answers (question_id,answer) VALUES (9, 'Eliesum grey');
INSERT INTO answers (question_id,answer) VALUES (9, 'TypeScript');
INSERT INTO answers (question_id,answer) VALUES (9, 'Node.js');
INSERT INTO answers (question_id,answer) VALUES (9, 'npm');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(9,1,'npm',true);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which of these variables is not apart of the JavaScript language?',2,'str');
INSERT INTO answers (question_id,answer) VALUES (10, 'const');
INSERT INTO answers (question_id,answer) VALUES (10, 'let');
INSERT INTO answers (question_id,answer) VALUES (10, 'var');
INSERT INTO answers (question_id,answer) VALUES (10, 'str');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(10,1,'str',true);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('What is the meaning of JSON?',2,' JavaScript Object Notation');
INSERT INTO answers (question_id,answer) VALUES (11, ' JavaScript Object Notation');
INSERT INTO answers (question_id,answer) VALUES (11, 'JavaScript Orientated Notation');
INSERT INTO answers (question_id,answer) VALUES (11, 'JavaScript Object Navigation');
INSERT INTO answers (question_id,answer) VALUES (11, 'Java Object Notation');
INSERT INTO student_quiz_answers  (question_id, student_id,student_answer,is_correct) VALUES(11,1,'JavaScript Object Notation',true);

INSERT INTO questions (question,quiz_id,correct_answer) VALUES ('Which syntax can not be used to enclose strings in JavaScript?',2,'^book^');
INSERT INTO answers (question_id,answer) VALUES (12, '"book"');
INSERT INTO answers (question_id,answer) VALUES (12, '`book`');
INSERT INTO answers (question_id,answer) VALUES (12, 'book');
INSERT INTO answers (question_id,answer) VALUES (12, '^book^');
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