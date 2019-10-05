----- 1. Create New Database -----

create database adulting_app;


----- 2. Create USER table. -----

CREATE TABLE "user"(
	"id" serial primary key,
	"name" varchar(255) not null,
	"email" varchar(255) not null,
	"address" varchar(1000) null,
  "zipCode" integer,
  "latitude" decimal null,
  "longitude" decimal null,
);


INSERT INTO user ("name", "email", "address", "zipCode", "latitude", "longitude")
VALUES ('Bobbi', 'bobbie@adulting_app.com','7801 Audubon Rd, Chanhassen, MN', '55317', '44.86174', '-93.56102');


----- 3. Create "Categoy" table -----
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    "categoryName" text
);

INSERT INTO categories ("categoryName")
VALUES ("Health", "Assets", "Personal");


----- 4. Create "UserCategoy" table -----
CREATE TABLE user_category (
    id SERIAL PRIMARY KEY,
    "userId" integer,
    "categoryId" integer
);

INSERT INTO user_category ("userId", "categoryId")
VALUES ((1, 1), (1, 2));

----- 4. Create "Events" table -----
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    "eventName" text,
    "userId" integer,
    "categoryId" integer,
    frequency integer,
    "reminderDate" date,
    "dateCompleted" date
);

INSERT INTO events ("eventName", "userId", "categoryId", "frequency", "reminderDate")
VALUES ("Oil change", 1, 2, 60, "2019-12-15");
