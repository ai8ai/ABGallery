const BASE_URL = "https://ai8ai.github.io/";
const BASE_URL8 = "https://aidres8.github.io/";
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/ai8ai/`;  //${repo}/main/${folder}/

export const genJpgList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genGifList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.gif`).sort(() => Math.random() - 0.5);

export const genJpg5 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genJpg8 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL8}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genJpg55 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${GITHUB_RAW_BASE}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);
