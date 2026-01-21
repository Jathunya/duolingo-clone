"use server";

import { getCourseById } from "@/db/queries";
import { currentUser } from "@clerk/nextjs/server";

export const upset async = async (courseId: number) => {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);
    
        // TODO: enable once units and lessons are added
    // if(!course.units.lenth || !course.units[0].lessons.length) {
    //     throw new Error("Course is empty");
    // }

    }
}