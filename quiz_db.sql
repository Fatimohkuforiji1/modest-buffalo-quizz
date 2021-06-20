drop table if exists student_quiz_answers;
drop table if exists answers;
drop table if exists questions;
drop table if exists quizzes;
drop table if exists students;
drop table if exists teachers;
drop table if exists modules;
drop table if exists groups;

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
  user_password  VARCHAR(75) NOT NULL,
  groups_id   INT REFERENCES groups(id),
  city     VARCHAR(100) NOT NULL,
  country  VARCHAR(100) NOT NULL
);

CREATE TABLE teachers (
  id       SERIAL PRIMARY KEY,
  first_name  VARCHAR(150) NOT NULL,
  last_name     VARCHAR(150) NOT NULL,
  email        VARCHAR(150) NOT NULL,
  user_password     VARCHAR(50) NOT NULL,
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
