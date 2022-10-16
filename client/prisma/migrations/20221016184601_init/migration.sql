-- CreateTable
CREATE TABLE `image` (
    `id` VARCHAR(191) NOT NULL,
    `originalName` VARCHAR(191) NOT NULL,
    `mimeType` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `destination` VARCHAR(191) NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `folderId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `image_originalName_key`(`originalName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `folder` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `image` ADD CONSTRAINT `image_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `folder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
