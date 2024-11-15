/** @type { import("drizzle-kit").Config} */

export default {
  
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials:{
    url: 'postgresql://ai-interview-prep_owner:Ek8H3TZjBUyd@ep-twilight-darkness-a55oc76k.us-east-2.aws.neon.tech/ai-interview-prep?sslmode=require',
  }
};
