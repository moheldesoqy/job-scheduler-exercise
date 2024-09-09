-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL,
    "updateDate" TIMESTAMP(3) NOT NULL,
    "runtime" TEXT NOT NULL,
    "nextRun" TIMESTAMP(3) NOT NULL,
    "priority" TEXT NOT NULL,
    "interval" TEXT NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
