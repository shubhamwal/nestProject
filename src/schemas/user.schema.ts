import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  userAge: number;

  @Prop()
  userAdress: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
