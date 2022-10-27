-- DropIndex
DROP INDEX `image_order_idx` ON `image`;

-- RenameIndex
ALTER TABLE `image` RENAME INDEX `image_folderId_fkey` TO `image_folderId_idx`;
