-- create the table DDL (database definition language)

create table greetings (
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);

-- DML (database manipulation language)

select * from greetings;
select count(*) from greetings;

insert into greetings (language, greeting) values ('zulu', 'Sawubona');

--add two more languages

insert into greetings (language, greeting) values ('sotho', 'dumela');
insert into greetings (language, greeting) values ('Xhosa', 'molo');

--delete from greetings where id > 1;
--delete from greetings where id in (2,3);