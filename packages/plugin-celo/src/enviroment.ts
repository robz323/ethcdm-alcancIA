import { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";

export const tatumEnvSchema = z.object({
    TATUM_API_KEY: z.string().min(1, "Tatum API key is required"),
});

export type tatumConfig = z.infer<typeof tatumEnvSchema>;

export async function validateTatumConfig(
    runtime: IAgentRuntime
): Promise<tatumConfig> {
    try {
        const config = {
            TATUM_API_KEY: runtime.getSetting("TATUM_API_KEY"),
        };
        console.log('config Tatumss: ', config)
        return tatumEnvSchema.parse(config);
    } catch (error) {
        console.log("error::::", error)
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors
                .map((err) => `${err.path.join(".")}: ${err.message}`)
                .join("\n");
            throw new Error(
                `Tatum API configuration validation failed:\n${errorMessages}`
            );
        }
        throw error;
    }
}