import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    return (await this.UserModel.create(createUserDto)).save();
  }

  findAll() {
    return this.UserModel.find();
  }

  findOne(id: string) {
    return this.UserModel.findOne({id})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.findOneAndUpdate({id}, updateUserDto)
  }
                              
  remove(id: string) {
    return this.UserModel.findByIdAndDelete({_id:id},)
  }
}
