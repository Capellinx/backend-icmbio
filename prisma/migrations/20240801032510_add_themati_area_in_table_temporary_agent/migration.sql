/*
  Warnings:

  - Added the required column `thematic_area` to the `temporary_agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "temporary_agent" ADD COLUMN     "thematic_area" VARCHAR(100) NOT NULL;
