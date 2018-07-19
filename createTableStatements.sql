CREATE TABLE Brother(
	Username		varchar(50),
	Name			varchar(50) NOT NULL,
	Password		varchar(50) NOT NULL,
	IsCommittee		boolean NOT NULL DEFAULT 0,
	IsAdmin		boolean NOT NULL DEFAULT 0,
	PRIMARY KEY(Username)
) ENGINE=InnoDB;

CREATE TABLE Rushee(
	GTID			char(9),
	Name			varchar(50) NOT NULL,
	PhoneNumber		char(10),
	Picture			VARCHAR(100),
	Year			int NOT NULL CHECK (Year >= 1 AND Year <= 5),
	Major			varchar(50),
	PointOfContact	varchar(50),
	BidStatus		ENUM('none', 'has-bid', 'accepted-bid'),
	YesTotal		int,
	NoTotal			int,
	PRIMARY KEY(GTID),
	UNIQUE(PhoneNumber),
	UNIQUE(Picture),
	FOREIGN KEY (PointOfContact) REFERENCES Brother(Username)
		ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Vote(
	VoterName		varchar(50),
	RusheeGTID		char(9),
	Value			boolean,
	IsCommitteeVote	boolean NOT NULL DEFAULT 0,
	CONSTRAINT Pk_Vote PRIMARY KEY (VoterName, RusheeGTID),
	FOREIGN KEY (VoterName) REFERENCES Brother(Username)
		ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (RusheeGTID) REFERENCES Rushee(GTID)
		ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Annotation(
	CommenterName	varchar(50),
	RusheeGTID		char(9),
	CommentText		text NOT NULL,
	CONSTRAINT Pk_Comment PRIMARY KEY (CommenterName, RusheeGTID),
	FOREIGN KEY (CommenterName) REFERENCES Brother(Username)
		ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (RusheeGTID) REFERENCES Rushee(GTID)
		ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;


