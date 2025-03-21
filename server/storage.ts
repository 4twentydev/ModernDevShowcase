import { users, type User, type InsertUser } from "@shared/schema";
import { type ContactMessage, type InsertContactMessage } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message operations
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private userIdCounter: number;
  private messageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.userIdCounter = 1;
    this.messageIdCounter = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact message operations
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageIdCounter++;
    const createdAt = new Date();
    const contactMessage: ContactMessage = { ...message, id, createdAt };
    this.contactMessages.set(id, contactMessage);
    
    // Log the new message for debugging purposes
    console.log(`New contact message from ${message.name} (${message.email}): ${message.subject}`);
    
    return contactMessage;
  }
}

export const storage = new MemStorage();
