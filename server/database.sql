CREATE DATABASE perntodo;

CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    description VARCHAR(200)
);
<--------------------------------------------------->
CREATE SEQUENCE seq_bbs_no INCREMENT BY 1 START WITH 1 NO CYCLE;

CREATE TABLE IF NOT EXISTS bbs(
    no integer PRIMARY KEY DEFAULT nextval(seq_bbs_no),
    subject varchar(100) NOT NULL,
    writer varchar(50) NOT NULL,
    content varchar(4000) NOT NULL,
    imgcontent bytea,
    regdate DEFAULT current_timestamp,
    modidate timestamp DEFAULT current_timestamp,
    viewcount integer DEFAULT 1
);


<--------------------------------------------------->
CREATE DATABASE userinfo;
CREATE SEQUENCE seq_users_id 
    START WITH 1000000
    INCREMENT BY 1
    NO CYCLE;
CREATE TABLE IF NOT EXISTS users(
    id integer NOT NULL DEFAULT nextval('seq_users_id') ,
    userid varchar(50) NOT NULL,
    pass varchar(50) NOT NULL,
    email varchar(200) NOT NULL,
    UNIQUE (id, userid, email)
);