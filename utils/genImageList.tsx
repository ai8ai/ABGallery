const BASE_URL = "https://ai8ai.github.io/";
const BASE_URL8 = "https://aidres8.github.io/";
const GITHUB_RAW_AI8AI = `https://raw.githubusercontent.com/ai8ai/`;  //${repo}/main/${folder}/
const GITHUB_RAW_AIDRES8 = `https://raw.githubusercontent.com/aidres8/`;  //${repo}/main/${folder}/
const GITHUB_RAW = `https://raw.githubusercontent.com/`;  //${gh}/${repo}/main/${folder}/
const COUNT = 5;

export const genJpgList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genGifList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.gif`).sort(() => Math.random() - 0.5);

export const genJpg5 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genJpg8 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL8}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genJpg55 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${GITHUB_RAW_AI8AI}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);


export const genJpg88 = (path: string, count: number=5 ): string[] =>
    Array.from({ length: count }, (_, i) => `${GITHUB_RAW_AIDRES8}${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);


export const genJpg1 = (gh:string, path: string): string[] =>
    Array.from({ length: COUNT }, (_, i) => `${GITHUB_RAW}${gh}/${path}/bb${i + 1}.jpg`).sort(() => Math.random() - 0.5);
