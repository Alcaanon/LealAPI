-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "furos" INTEGER NOT NULL,
    "local" TEXT NOT NULL,
    "joias" TEXT NOT NULL,
    "alergia" BOOLEAN NOT NULL DEFAULT false,
    "alergias" TEXT NOT NULL,
    "medicamento" BOOLEAN NOT NULL DEFAULT false,
    "medicamentos" TEXT NOT NULL,
    "hepatite" BOOLEAN NOT NULL DEFAULT false,
    "hepatites" TEXT NOT NULL,
    "coagulacao" BOOLEAN NOT NULL DEFAULT false,
    "diabetes" BOOLEAN NOT NULL DEFAULT false,
    "cardiacas" BOOLEAN NOT NULL DEFAULT false,
    "hemofilia" BOOLEAN NOT NULL DEFAULT false,
    "convulsao" BOOLEAN NOT NULL DEFAULT false,
    "queloide" BOOLEAN NOT NULL DEFAULT false,
    "cicatrizacao" BOOLEAN NOT NULL DEFAULT false,
    "assinatura" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
