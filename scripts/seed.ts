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
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.insert(schema.courses).values([
            {
                id: 1,
                title : "spanish",
                imageSrc : "/es.svg"
            },
            {
                id: 2,
                title : "Croatian",
                imageSrc : "/hr.svg"
            },
            {
                id: 3,
                title : "French",
                imageSrc : "/fr.svg"
            },
            {
                id: 4,
                title : "Italian",
                imageSrc : "/it.svg"
            },
        ]);
await db.insert(schema.units).values([
    {
        id: 1,
        courseId : 1,
        title : "Unit 1",
        description : "Learns spanish",
        order : 1,
    }
])
await db.insert(schema.lessons).values([
    {
        id: 1,
        unitId : 1,
        title : "Nouns",
        order : 1,
    }
])
await db.insert(schema.challenges).values([
    {
        id: 1,
        lessonId : 1,
        type : "SELECT",
        order : 1,
        question : 'Which one of these is "the man"'
    }
])
        console.log("seeding Finished");
    }
    catch(error) {
        throw new Error("Failed to seed the data base")
    }
}

main();