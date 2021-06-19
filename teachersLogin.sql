drop table if exists teacher cascade;

CREATE TABLE teacher (
  id       SERIAL PRIMARY KEY,
  first_name    VARCHAR(150) NOT NULL,
  last_name VARCHAR(150) NOT NULL,
  email  VARCHAR(150) NOT NULL,
  user_password  VARCHAR(75) NOT NULL,
  country  VARCHAR(100) NOT NULL
  
);

INSERT INTO teacher (first_name,last_name, email, user_password, country) VALUES ('Charles', 'Kilt', 'charKl@gmail.com', 'hhgghghdc','United Kingdom');
INSERT INTO teacher (first_name,last_name, email, user_password, country) VALUES ('Slavados', 'Green', 'SalGre@gmail.com', 'hhgghghdc','United Kingdom');


-- INSERT INTO teacher (email, address) VALUES ('Test ql','United Kingdom');