-- DropEnum
DROP TYPE "Roles";

-- CreateTable
CREATE TABLE "fieldSheet" (
    "id" VARCHAR(36) NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "temporary_agentId" VARCHAR(36) NOT NULL,

    CONSTRAINT "fieldSheet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fieldSheet" ADD CONSTRAINT "fieldSheet_temporary_agentId_fkey" FOREIGN KEY ("temporary_agentId") REFERENCES "temporary_agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
