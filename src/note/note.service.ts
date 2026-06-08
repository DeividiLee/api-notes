import { Injectable, NotFoundException } from '@nestjs/common';
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

  findAll():NoteInterface[] {
    return this.notes
  }

  findOne(id: string):NoteInterface {
    const note = this.notes.find(note => note.id === id)

    if(!note){
      throw new NotFoundException(`Nota com Id {id} não encontrada`)
    }
    return note


  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
