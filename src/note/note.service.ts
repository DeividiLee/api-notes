import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NoteInterface } from './note.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class NoteService {
  private notes:NoteInterface[] = []
  create(newDto: CreateNoteDto) {

    const newNote: NoteInterface = {
      id: randomUUID(),
      title: newDto.title,
      content: newDto.content,
      createdAt: new Date(),
    }

    this.notes.push(newNote)
    return newNote

  }

  findAll() {
    return `This action returns all note`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
