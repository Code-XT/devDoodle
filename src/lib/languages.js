const languages = [
  { value: "matl", label: "MATL 22.5.0" },
  { value: "matl", label: "MATL 22.7.4" },
  { value: "bash", label: "Bash 5.2.0" },
  { value: "befunge93", label: "Befunge93 0.2.0" },
  { value: "bqn", label: "BQN 1.0.0" },
  { value: "brachylog", label: "Brachylog 1.0.0" },
  { value: "brainfuck", label: "Brainfuck 2.7.3" },
  { value: "cjam", label: "CJam 0.6.5" },
  { value: "clojure", label: "Clojure 1.10.3" },
  { value: "cobol", label: "COBOL 3.1.2" },
  { value: "coffeescript", label: "CoffeeScript 2.5.1" },
  { value: "cow", label: "Cow 1.0.0" },
  { value: "crystal", label: "Crystal 0.36.1" },
  { value: "dart", label: "Dart 2.19.6" },
  { value: "dash", label: "Dash 0.5.11" },
  { value: "typescript", label: "TypeScript 1.32.3 (Deno)" },
  { value: "javascript", label: "JavaScript 1.32.3 (Deno)" },
  { value: "basic.net", label: "Basic.NET 5.0.201 (Dotnet)" },
  { value: "fsharp.net", label: "FSharp.NET 5.0.201 (Dotnet)" },
  { value: "csharp.net", label: "CSharp.NET 5.0.201 (Dotnet)" },
  { value: "fsi", label: "FSI 5.0.201 (Dotnet)" },
  { value: "dragon", label: "Dragon 1.9.8" },
  { value: "elixir", label: "Elixir 1.11.3" },
  { value: "emacs", label: "Emacs 27.1.0" },
  { value: "emojicode", label: "Emojicode 1.0.2" },
  { value: "erlang", label: "Erlang 23.0.0" },
  { value: "file", label: "File 0.0.1" },
  { value: "forte", label: "Forte 1.0.0" },
  { value: "forth", label: "Forth 0.7.3" },
  { value: "freebasic", label: "FreeBasic 1.9.0" },
  { value: "awk", label: "AWK 5.1.0 (Gawk)" },
  { value: "c", label: "C 10.2.0 (GCC)" },
  { value: "c++", label: "C++ 10.2.0 (GCC)" },
  { value: "d", label: "D 10.2.0 (GDC)" },
  { value: "fortran", label: "Fortran 10.2.0 (GCC)" },
  { value: "go", label: "Go 1.16.2" },
  { value: "golfscript", label: "GolfScript 1.0.0" },
  { value: "groovy", label: "Groovy 3.0.7" },
  { value: "haskell", label: "Haskell 9.0.1" },
  { value: "husk", label: "Husk 1.0.0" },
  { value: "iverilog", label: "Iverilog 11.0.0" },
  { value: "japt", label: "Japt 2.0.0" },
  { value: "java", label: "Java 15.0.2" },
  { value: "jelly", label: "Jelly 0.1.31" },
  { value: "julia", label: "Julia 1.8.5" },
  { value: "kotlin", label: "Kotlin 1.8.20" },
  { value: "lisp", label: "Lisp 2.1.2" },
  { value: "llvm_ir", label: "LLVM IR 12.0.1" },
  { value: "lolcode", label: "LOLCODE 0.11.2" },
  { value: "lua", label: "Lua 5.4.4" },
  { value: "csharp", label: "CSharp 6.12.0 (Mono)" },
  { value: "basic", label: "Basic 6.12.0 (Mono)" },
  { value: "nasm", label: "NASM 2.15.5" },
  { value: "nasm64", label: "NASM64 2.15.5" },
  { value: "nim", label: "Nim 1.6.2" },
  { value: "javascript", label: "JavaScript 18.15.0 (Node)" },
  { value: "ocaml", label: "OCaml 4.12.0" },
  { value: "octave", label: "Octave 8.1.0" },
  { value: "osabie", label: "OSABIE 1.0.1" },
  { value: "paradoc", label: "Paradoc 0.6.0" },
  { value: "pascal", label: "Pascal 3.2.2" },
  { value: "perl", label: "Perl 5.36.0" },
  { value: "php", label: "PHP 8.2.3" },
  { value: "ponylang", label: "PonyLang 0.39.0" },
  { value: "prolog", label: "Prolog 8.2.4" },
  { value: "pure", label: "Pure 0.68.0" },
  { value: "powershell", label: "PowerShell 7.1.4 (Pwsh)" },
  { value: "pyth", label: "Pyth 1.0.0" },
  { value: "python2", label: "Python2 2.7.18" },
  { value: "python", label: "Python 3.10.0" },
  { value: "racket", label: "Racket 8.3.0" },
  { value: "raku", label: "Raku 6.100.0" },
  { value: "retina", label: "Retina 1.2.0" },
  { value: "rockstar", label: "Rockstar 1.0.0" },
  { value: "rscript", label: "RScript 4.1.1" },
  { value: "ruby", label: "Ruby 3.0.1" },
  { value: "rust", label: "Rust 1.68.2" },
  { value: "samarium", label: "Samarium 0.3.1" },
  { value: "scala", label: "Scala 3.2.2" },
  { value: "smalltalk", label: "Smalltalk 3.2.3" },
  { value: "sqlite3", label: "SQLite3 3.36.0" },
  { value: "swift", label: "Swift 5.3.3" },
  { value: "typescript", label: "TypeScript 5.0.3" },
  { value: "vlang", label: "VLang 0.3.3" },
  { value: "vyxal", label: "Vyxal 2.4.1" },
  { value: "yeethon", label: "Yeethon 3.10.0" },
  { value: "zig", label: "Zig 0.10.1" },
];

export default languages;

export const LanguageVersion = {
  matl: "22.7.4",
  bash: "5.2.0",
  befunge93: "0.2.0",
  bqn: "1.0.0",
  brachylog: "1.0.0",
  brainfuck: "2.7.3",
  cjam: "0.6.5",
  clojure: "1.10.3",
  cobol: "3.1.2",
  coffeescript: "2.5.1",
  cow: "1.0.0",
  crystal: "0.36.1",
  dart: "2.19.6",
  dash: "0.5.11",
  typescript: "5.0.3",
  "basic.net": "5.0.201",
  "fsharp.net": "5.0.201",
  "csharp.net": "5.0.201",
  fsi: "5.0.201",
  dragon: "1.9.8",
  elixir: "1.11.3",
  emacs: "27.1.0",
  emojicode: "1.0.2",
  erlang: "23.0.0",
  file: "0.0.1",
  forte: "1.0.0",
  forth: "0.7.3",
  freebasic: "1.9.0",
  awk: "5.1.0",
  c: "10.2.0",
  "c++": "10.2.0",
  d: "10.2.0",
  fortran: "10.2.0",
  go: "1.16.2",
  golfscript: "1.0.0",
  groovy: "3.0.7",
  haskell: "9.0.1",
  husk: "1.0.0",
  iverilog: "11.0.0",
  japt: "2.0.0",
  java: "15.0.2",
  jelly: "0.1.31",
  julia: "1.8.5",
  kotlin: "1.8.20",
  lisp: "2.1.2",
  llvm_ir: "12.0.1",
  lolcode: "0.11.2",
  lua: "5.4.4",
  csharp: "6.12.0",
  basic: "6.12.0",
  nasm: "2.15.5",
  nasm64: "2.15.5",
  nim: "1.6.2",
  javascript: "18.15.0",
  ocaml: "4.12.0",
  octave: "8.1.0",
  osabie: "1.0.1",
  paradoc: "0.6.0",
  pascal: "3.2.2",
  perl: "5.36.0",
  php: "8.2.3",
  ponylang: "0.39.0",
  prolog: "8.2.4",
  pure: "0.68.0",
  powershell: "7.1.4",
  pyth: "1.0.0",
  python2: "2.7.18",
  python: "3.10.0",
  racket: "8.3.0",
  raku: "6.100.0",
  retina: "1.2.0",
  rockstar: "1.0.0",
  rscript: "4.1.1",
  ruby: "3.0.1",
  rust: "1.68.2",
  samarium: "0.3.1",
  scala: "3.2.2",
  smalltalk: "3.2.3",
  sqlite3: "3.36.0",
  swift: "5.3.3",
  vlang: "0.3.3",
  vyxal: "2.4.1",
  yeethon: "3.10.0",
  zig: "0.10.1",
};