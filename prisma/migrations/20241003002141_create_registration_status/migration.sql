-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
ALTER TYPE "PersonType" ADD VALUE 'ANALISTA';

-- AlterTable
ALTER TABLE "collaborators" ADD COLUMN     "registration_status" "RegistrationStatus" NOT NULL DEFAULT 'PENDING';
