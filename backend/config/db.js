import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://karthik:karthik%40123@cluster0.imivkpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};
