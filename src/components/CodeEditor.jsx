import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import Select from "react-select";
import languages from "../lib/languages";
import boilerplate from "../lib/boilerplate";
import executeCode from "../api/executeCode";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState("console.log('Hello, World!')");
  const [output, setOutput] = useState("");
  const [stdin, setStdin] = useState("");
  const [args, setArgs] = useState("");
  const [running, setRunning] = useState(false);

  const setLanguageHandler = (language) => {
    setLanguage(language.value);
    setValue(boilerplate[language.value]);
  };

  const runCode = async () => {
    if (!value) return;
    try {
      setRunning(true);
      const output = await executeCode(language, value, stdin, args);
      setOutput(output.run.output);
    } catch (err) {
      setOutput(err.message);
    }
    setRunning(false);
  };

  return (
    <div className="h-screen w-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-4xl font-bold mb-6">
        dev
        <span className="text-red-500">
          D<span className="text-yellow-500">oo</span>d
          <span className="text-blue-500">le</span>
        </span>
        <span className="text-gray-500 text-sm">
          {" "}
          - just another code editor
        </span>
      </div>
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex flex-col w-full md:w-1/2 h-full mb-6 md:mb-0 pr-0 md:pr-3">
          <Select
            options={languages}
            onChange={setLanguageHandler}
            className="w-1/2 mb-4 text-black"
            placeholder="Select Language"
          />
          <div className="text-xl font-semibold mb-4">Code</div>
          <div className="w-full h-full bg-gray-800 rounded-md overflow-hidden">
            <Editor
              height="80vh"
              language={language}
              theme="vs-dark"
              value={value}
              onChange={(value) => setValue(value)}
              options={{
                wordWrap: "on",
                minimap: { enabled: false },
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize: 16,
                scrollBeyondLastLine: true,
                automaticLayout: true,
              }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 h-full pl-0 md:pl-3">
          <div className="text-xl font-semibold mb-4">Output</div>
          <button
            onClick={runCode}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {running ? "Running..." : "Run"}
          </button>
          <div className="w-full h-full bg-gray-800 rounded-md p-4 text-white overflow-auto">
            <pre>{output ? output : "Click Run to Execute"}</pre>
          </div>
          <div className="w-full h-auto bg-gray-800 rounded-md mt-4 p-4">
            <textarea
              value={stdin}
              onChange={(e) => setStdin(e.target.value)}
              className="w-full bg-gray-700 rounded-md p-2 text-white"
              placeholder="Enter stdin..."
              rows={3}
            />
            <textarea
              value={args}
              onChange={(e) => setArgs(e.target.value)}
              className="w-full mt-4 bg-gray-700 rounded-md p-2 text-white"
              placeholder="Enter arguments..."
              rows={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
