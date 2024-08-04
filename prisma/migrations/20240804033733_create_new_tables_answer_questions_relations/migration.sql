/*
  Warnings:

  - You are about to alter the column `thematic_area` on the `temporary_agent` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(36)`.

*/
-- AlterTable
ALTER TABLE "temporary_agent" ALTER COLUMN "thematic_area" SET DATA TYPE VARCHAR(36);

-- CreateTable
CREATE TABLE "questions" (
    "id" VARCHAR(36) NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "fieldSheetId" VARCHAR(36) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answer" (
    "id" VARCHAR(36) NOT NULL,
    "field_sheet_id" VARCHAR(36) NOT NULL,
    "temporary_agent_id" VARCHAR(36) NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_fieldSheetId_fkey" FOREIGN KEY ("fieldSheetId") REFERENCES "fieldSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_field_sheet_id_fkey" FOREIGN KEY ("field_sheet_id") REFERENCES "fieldSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_temporary_agent_id_fkey" FOREIGN KEY ("temporary_agent_id") REFERENCES "temporary_agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
