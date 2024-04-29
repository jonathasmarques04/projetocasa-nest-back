import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Response } from 'express';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Post('login')
  async loginUsuario(
    @Body() body: { email: string; password: string },
    @Res() res: Response,
  ) {
    try {
      const { email, password } = body;
      const usuarioExistente = await this.usuarioService.findOneByEmail(email);

      if (!usuarioExistente) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'Email inválido!' });
      }

      if (password !== usuarioExistente.password) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'Senha incorreta!' });
      }

      return res.status(HttpStatus.OK).json({
        message: 'Email válido',
        usuario: usuarioExistente,
      });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Ocorreu um erro!' });
    }
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':idUsuario')
  findOne(@Param('idUsuario') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':idUsuario')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':idUsuario')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}
