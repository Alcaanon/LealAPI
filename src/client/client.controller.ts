import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('client')
export class ClientController {
  constructor(private readonly prisma: PrismaService) {
    dotenv.config();
  }

  private log(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  @Get('listar')
  async findAll() {
    const users = await this.prisma.getClient().user.findMany();
    this.log('Usuários listados: ');
    this.log(JSON.stringify(users));
    return users;
  }

  @Post('cadastrar')
  async create(@Body() data: {
    nome: string;
    email: string;
    telefone: string;
    furos: number;
    local: string;
    joias: string;
    alergia: boolean;
    alergias: string;
    medicamento: boolean;
    medicamentos: string;
    hepatite: boolean;
    hepatites: string;
    coagulacao: boolean;
    diabetes: boolean;
    cardiacas: boolean;
    hemofilia: boolean;
    convulsao: boolean;
    queloide: boolean;
    cicatrizacao: boolean;
    assinatura: string;
  }) {
    const user = await this.prisma.getClient().user.create({
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        furos: data.furos,
        local: data.local,
        joias: data.joias,
        alergia: data.alergia,
        alergias: data.alergias,
        medicamento: data.medicamento,
        medicamentos: data.medicamentos,
        hepatite: data.hepatite,
        hepatites: data.hepatites,
        coagulacao: data.coagulacao,
        diabetes: data.diabetes,
        cardiacas: data.cardiacas,
        hemofilia: data.hemofilia,
        convulsao: data.convulsao,
        queloide: data.queloide,
        cicatrizacao: data.cicatrizacao,
        assinatura: data.assinatura,
      },
    });
    this.log('Usuário Criado');
    this.log(JSON.stringify(user));
    return user;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.prisma.getClient().user.findUnique({ where: { id: parseInt(id) } });
    this.log(`Usuário com o ID: ${id} listado.`);
    this.log(JSON.stringify(user));
    return user;
  }


// OPÇÃO DE EDIÇÃO
//   @Put('profile/:email')
//   async updateProfile(
//     @Param('email') email: string,
//     @Body() data: {
//         nome: string;
//         email: string;
//         telefone: string;
//         furos: number;
//         local: string;
//         joias: string;
//         alergia: boolean;
//         alergias: string;
//         medicamento: boolean;
//         medicamentos: string;
//         hepatite: boolean;
//         hepatites: string;
//         coagulacao: boolean;
//         diabetes: boolean;
//         cardiacas: boolean;
//         hemofilia: boolean;
//         convulsao: boolean;
//         queloide: boolean;
//         cicatrizacao: boolean;
//         assinatura: string;
//     },
//   ) {
//     const user = await this.prisma.getClient().user.update({
//       where: { email },
//       data: {
//         nome: data.nome,
//         email: data.email,
//         telefone: data.telefone,
//         furos: data.furos,
//         local: data.local,
//         joias: data.joias,
//         alergia: data.alergia,
//         alergias: data.alergias,
//         medicamento: data.medicamento,
//         medicamentos: data.medicamentos,
//         hepatite: data.hepatite,
//         hepatites: data.hepatites,
//         coagulacao: data.coagulacao,
//         diabetes: data.diabetes,
//         cardiacas: data.cardiacas,
//         hemofilia: data.hemofilia,
//         convulsao: data.convulsao,
//         queloide: data.queloide,
//         cicatrizacao: data.cicatrizacao,
//         assinatura: data.assinatura,
//       },
//     });
//     this.log(`Usuário com o email: ${email} foi atualizado.`);
//     this.log(JSON.stringify(user));
//     return user;
//   }

    @Delete(':id')
    async delete(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    const user = await this.prisma.getClient().user.delete({
        where: { id: userId }, 
    });
    this.log(`Usuário com o ID: ${userId} deletado`);
    this.log(JSON.stringify(user));
    return user;
    }
}
