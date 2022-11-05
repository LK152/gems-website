/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `image` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `image_id_key` ON `image`(`id`);
