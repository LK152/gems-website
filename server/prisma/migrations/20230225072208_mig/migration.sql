/*
  Warnings:

  - The primary key for the `folder` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `image_folderId_fkey`;

-- AlterTable
ALTER TABLE `folder` DROP PRIMARY KEY,
    MODIFY `id` ENUM('homeSlider', 'homeGallery', 'mathCurriculums', 'teachers') NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `image` MODIFY `folderId` ENUM('homeSlider', 'homeGallery', 'mathCurriculums', 'teachers') NOT NULL;

-- AddForeignKey
ALTER TABLE `image` ADD CONSTRAINT `image_folderId_fkey` FOREIGN KEY (`folderId`) REFERENCES `folder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
