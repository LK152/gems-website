CREATE TABLE IF NOT EXISTS imagePaths (
    id varchar(100) NOT NULL,
    folder varchar(50) NOT NULL, 
    fileName varchar(100) NOT NULL, 
    mimeType varchar(100) NOT NULL,
    path varchar(100) NOT NULL,
    size int NOT NULL,
    UNIQUE(id, fileName, path)
)