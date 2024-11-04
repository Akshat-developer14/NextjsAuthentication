import { UserRole } from '@prisma/client';
import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.USER, UserRole.ADMIN]),
  email: z.optional(z.string().email()),
  password: z.string().min(8).optional(),
  newPassword: z.string().min(8).optional(),
})
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }
    return true;
  }, {
    message: "Old Password is required!",
    path: ["password"]
  })
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }
    return true;
  }, {
    message: "New Password is required!",
    path: ["newPassword"]
  });


export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Minimum 8 characters required",
  }),
});
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  })
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
