import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.repository.create(createUsuarioDto);
    return this.repository.save(usuario);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ idUsuario: id });
  }

  async findOneByEmail(email: string): Promise<Usuario> {
    return this.repository.findOne({ where: { email } });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.repository.findOneBy({ idUsuario: id });
    if (!usuario) return null;
    this.repository.merge(usuario, updateUsuarioDto);
    return this.repository.save(usuario);
  }

  async remove(id: string) {
    const usuario = await this.repository.findOneBy({ idUsuario: id });
    if (!usuario) return null;
    return this.repository.remove(usuario);
  }
}
