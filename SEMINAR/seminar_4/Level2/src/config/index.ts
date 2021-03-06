import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

// env 파일이 없다면 에러 처리
const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

//configure 설정
export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT as string, 10) as number,

  /**
   * MongoDB URI
   */
  mongoURI: process.env.MONGODB_URI as string,
};
