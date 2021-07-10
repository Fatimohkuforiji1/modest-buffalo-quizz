SELECT * 
    FROM qz.quizzes As qz
    INNER JOIN questions As qs ON qs.quiz_id=qz.id
    INNER JOIN answers As a ON a.question_id=qs.id
    INNER JOIN modules As m ON m.id=qz.module_id
WHERE qz.id=1;


--query for the quiz questions and possible annswers GET
SELECT qz.title,
       qz.quiz_description,
       qs.question,
       qs.correct_answer,
       a.answer
FROM quizzes As qz
        INNER JOIN questions As qs ON qs.quiz_id=qz.id
        INNER JOIN answers As a ON a.question_id=qs.id
        INNER JOIN modules As m ON m.id=qz.module_id
WHERE qz.id=1;

--New query
SELECT 
       qs.question,
       qs.correct_answer,
    FROM questions
WHERE qs.quiz_id=1;


--
SELECT qz.title As category,
       qs.question,
       qs.correct_answer
    FROM questions As qs
INNER JOIN quizzes As qz ON qz.id=qs.quiz_id
WHERE qs.quiz_id=1;

SELECT a.* FROM answers As a 
INNER JOIN questions As qs ON qs.id=a.question_id
Where a.question_id=1 AND a.answer <> qs.correct_answer;




-- query for creating a quiz question POST 
-- id should appear in authouristation token 
-- map the module id in a drop down GET
-- create  numerical input box with range 1-100
INSERT INTO quizzes 
    (title,quiz_description,image_url,teacher_id,module_id,percentage_pass_rate) 
    VALUES ('React week 1','Review week one react class','testURL.....',1,1,70 );
INSERT INTO questions (question,quiz_id,correct_answer) 
    VALUES ('What programming lanugage does React use?',currval(pg_get_serial_sequence('quizzes','id')),'JavaScript'); 
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'python');
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'C#');
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'PHP');
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'JavaScript');
INSERT INTO questions (question,quiz_id,correct_answer) 
    VALUES ('What does React use to build the UI?',currval(pg_get_serial_sequence('quizzes','id')),'Components'); 
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'Lego');
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'Components');
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'HTML');
INSERT INTO answers (question_id,answer) 
    VALUES (currval(pg_get_serial_sequence('questions','id')), 'JavaScript');



SELECT * 
    FROM questions As qs ON qs.quiz_id=qz.id
    INNER JOIN answers As a ON a.question_id=qs.id
