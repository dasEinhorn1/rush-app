INSERT INTO Brother
VALUES ("bglowniak", "Brian Glowniak", "password", true, true);

INSERT INTO Brother
VALUES ("ahayward", "Adam Hayward", "password", false, true);

INSERT INTO Brother
VALUES ("abayon", "Austin Bayon", "password", false, false);

INSERT INTO Brother
VALUES ("aberger", "Adam Berger", "password", true, false);

INSERT INTO Brother
VALUES ("gautry", "Gene Autry", "password", false, false);

INSERT INTO Brother
VALUES ("gpalm", "Grant Palm", "password", false, false);

INSERT INTO Brother
VALUES ("jkuperman", "Josh Kuperman", "password", true, false);

INSERT INTO Brother
VALUES ("jsteffey", "Joseph Steffey", "password", false, false);

/* ===================================================== */

INSERT INTO Rushee
VALUES ("123456789", "Bob", "Bill", "1234567892", "img1.png", 2, "IE", null, "none", 0, 0);

INSERT INTO Rushee
VALUES ("902389218", "Elon", "Musk", "7862345678", "img2.png", 4, "AE", null, "has-bid", 0, 0);

INSERT INTO Rushee
VALUES ("123896578", "Jeff", "Kaplan", "6304567890", "img3.png", 1, "CS", "ahayward", "accepted-bid", 1, 0);

INSERT INTO Rushee
VALUES ("234567890", "Fuckboy", "McGee", "4206906969", "img4.png", 3, "CivE", "bglowniak", "none", 1, 0);

INSERT INTO Rushee
VALUES ("890234568", "Bill", "Hader", "6969696969", "img5.png", 2, "LMC", "gpalm", "has-bid", 0, 0);

INSERT INTO Rushee
VALUES ("567890456", "Donald", "Trump", "1111111111", "img6.png", 1, "BME", "abayon", "none", 0, 0);

INSERT INTO Rushee
VALUES ("555555555", "Fuckatron", "2000", "1234567890", "img7.png", 5, "CS", null, "none", 1, 5);

INSERT INTO Rushee
VALUES ("903456789", "Godzilla", "LastName", "4568901233", "img8.png", 4, "ChemE", null, "none", 1, 0);

INSERT INTO Rushee
VALUES ("123890234", "Hollow", "Knight", "4204204200", "img9.png", 2, "AE", "aberger", "accepted-bid", 0, 1);

INSERT INTO Rushee
VALUES ("111111111", "Shit", "Licker", "1133339999", "img10.png", 1, "NRE", "gautry", "has-bid", 2, 0);

/* ===================================================== */

INSERT INTO Vote
VALUES ("bglowniak", "234567890", 1, false);

INSERT INTO Vote
VALUES ("bglowniak", "555555555", -1, false);

INSERT INTO Vote
VALUES ("bglowniak", "903456789", 1, false);

INSERT INTO Vote
VALUES ("ahayward", "123896578", 1, false);

INSERT INTO Vote
VALUES("ahayward", "555555555", 1, false);

INSERT INTO Vote
VALUES ("ahayward", "123890234", -1, false);

INSERT INTO Vote
VALUES ("abayon", "555555555", -1, false);

INSERT INTO Vote
VALUES ("jkuperman", "555555555", -1, false);

INSERT INTO Vote
VALUES ("gautry", "555555555", -1, false);

INSERT INTO Vote
VALUES ("gautry", "111111111", 1, false);

INSERT INTO Vote
VALUES ("aberger", "555555555", -1, false);

INSERT INTO Vote
VALUES ("aberger", "111111111", 1, false);

/* ===================================================== */

INSERT INTO Annotation
VALUES ("bglowniak", "111111111", "This kid licks shit, what a guy");

INSERT INTO Annotation
VALUES ("ahayward", "555555555", "What a fuckboy");

INSERT INTO Annotation
VALUES ("jkuperman", "890234568", "Great guy, little nervous about grades though");