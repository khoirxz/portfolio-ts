import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Project = GetTypeByName<typeof configuration, "projects">;
export declare const allProjects: Array<Project>;

export type Activity = GetTypeByName<typeof configuration, "activities">;
export declare const allActivities: Array<Activity>;

export {};
