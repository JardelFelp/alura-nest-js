import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async list(): Promise<Array<Book>> {
    return this.bookService.get();
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Book> {
    return this.bookService.find(id);
  }

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Put()
  async update(@Body() book: Book): Promise<Book> {
    return this.bookService.update(book);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.bookService.delete(id);
  }
}
