import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "Message sent successfully!",
        data: message,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Format validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      }
      
      // Other errors
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
