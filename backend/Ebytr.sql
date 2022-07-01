DROP SCHEMA IF EXISTS Ebytr;
CREATE SCHEMA IF NOT EXISTS Ebytr;

CREATE TABLE Ebytr.Tasks (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  taskName TEXT NOT NULL,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  statusTask TEXT NOT NULL
);

INSERT INTO
  Ebytr.Tasks (taskName, statusTask)
VALUES
  ("HTML", "pendente");

INSERT INTO
  Ebytr.Tasks (taskName, statusTask)
VALUES
  ("JavaScript", "andamento");

INSERT INTO
  Ebytr.Tasks (taskName, statusTask)
VALUES
  ("MySQL", "pronto");
  
