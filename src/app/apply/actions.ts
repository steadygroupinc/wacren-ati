'use server';

import { z } from 'zod';

const applySchema = z.object({
  firstName: z.string().min(2, "First name is too short").max(50),
  lastName: z.string().min(2, "Last name is too short").max(50),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization name is too short").max(100),
  country: z.string().min(1, "Please select a country"),
  position: z.string().min(2, "Position is too short").max(100),
  experience: z.string().min(1, "Please select your experience level"),
  trainingInterest: z.string().min(1, "Please select a training program"),
  motivation: z.string().min(20, "Please provide a more detailed motivation (min 20 chars)").max(2000),
  specialRequirements: z.string().max(1000).optional(),
  // Honeypot field
  website: z.string().max(0, "Bot detected").optional().or(z.literal('')),
});

export async function submitApplication(formData: FormData) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const rawData = Object.fromEntries(formData.entries());
  
  try {
    const validatedData = applySchema.parse(rawData);

    // If we were using a real DB, we would save here
    // const { firstName, lastName, email, ...info } = validatedData;
    // await db.applications.create({ data: validatedData });
    
    console.log('Securely processed application for:', validatedData.email);

    return { 
      success: true, 
      message: 'Thank you for your application! We will review it and get back to you within 2-3 weeks.' 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Validation failed. Please check your inputs.',
        errors: error.flatten().fieldErrors 
      };
    }
    return { 
      success: false, 
      message: 'An unexpected error occurred. Please try again later.' 
    };
  }
}
