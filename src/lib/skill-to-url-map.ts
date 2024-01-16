interface SkillToUrlMap {
  [skill: string]: string;
}

const skillToURLMap: SkillToUrlMap = {
  "Next.js": "https://nextjs.org/",
  React: "https://reactjs.org/",
  TypeScript: "https://www.typescriptlang.org/",
  "Node.js": "https://nodejs.org/en/",
  Firebase: "https://firebase.google.com/",
  "Tailwind CSS": "https://tailwindcss.com/",
  Figma: "https://www.figma.com/",
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  I2C: "https://en.wikipedia.org/wiki/I%C2%B2C",
  FreeRTOS: "https://www.freertos.org/",
  "Framer Motion": "https://www.framer.com/motion/",
  LaTeX: "https://www.latex-project.org/",
  Overleaf: "https://www.overleaf.com/",
  "Visual Studio Code": "https://code.visualstudio.com/",
  "LaTeX Workshop":
    "https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop",
  "C#": "https://docs.microsoft.com/en-us/dotnet/csharp/",
  Unity: "https://unity.com/",
  Python: "https://www.python.org/",
  Selenium: "https://www.selenium.dev/",
  pandas: "https://pandas.pydata.org/",
  aiohttp: "https://docs.aiohttp.org/en/stable/",
  asyncio: "https://docs.python.org/3/library/asyncio.html",
  yfinance: "https://pypi.org/project/yfinance/",
};

export default skillToURLMap;