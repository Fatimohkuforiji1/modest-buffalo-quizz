drop table if exists teacher cascade;

CREATE TABLE teacher (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(50) NOT NULL,
  address  VARCHAR(120)
);

INSERT INTO teacher (name, address) VALUES ('Testing Sql','United Kingdom');
INSERT INTO teacher (name, address) VALUES ('Tes Sql','United Kingdom');
INSERT INTO teacher (name, address) VALUES ('Test ql','United Kingdom');