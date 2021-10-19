import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async get(): Promise<Array<Book>> {
    return this.bookRepository.find();
  }

  async find(id: number): Promise<Book> {
    return this.bookRepository.findOne(id);
  }

  async create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async update(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.bookRepository.delete({
      id,
    });
  }
}
