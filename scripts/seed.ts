import "dotenv/config";


import * as schema from "../db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, {schema});

const main = async () => {
    try{
        console.log("seeding started")
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        console.log("seeding done")
    }
    catch(error) {
        throw new Error("Failed to seed the data base")
    }
}

main();