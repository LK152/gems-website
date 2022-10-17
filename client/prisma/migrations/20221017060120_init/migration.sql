-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `image_folderId_fkey`;

-- AddForeignKey
ALTER TABLE `image` ADD CONSTRAINT `image_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `folder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
