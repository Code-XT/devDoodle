import axios from "axios";
import { LanguageVersion } from "../lib/languages";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export default async function executeCode(language, code, stdin, args) {
  console.log(language, code, LanguageVersion[language]);
  const response = await API.post("/execute", {
    language: language,
    version: LanguageVersion[language],
    files: [
      {
        content: code,
      },
    ],
    stdin: stdin,
    args: [args],
  });
  return response.data;
}
