CREATE table images (
    fileName varchar(100) NOT NULL,
    originalName varchar(100) NOT NULL,
    mimeType varchar(100) NOT NULL,
    path varchar(100) NOT NULL,
    size int NOT NULL, 
    UNIQUE(fileName, path)
);