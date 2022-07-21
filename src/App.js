import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
function App() {
  const [text, setText] = useState(defaultMarkdown);
  const handleChange = (e) => setText(e.target.value);

  return (
    <div className="App">
      <h1 id="title">Markdown Previewer</h1>
      <textarea
        name="editor"
        id="editor"
        value={text}
        onChange={handleChange}
        placeholder="Enter markdown..."
      />

      <div id="preview">
        <ReactMarkdown children={text} />
      </div>
    </div>
  );
}

export default App;

const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!
&nbsp;&nbsp;

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

&nbsp;

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
&nbsp;

> “The mind is everything. What you think you become.”
― Buddha
&nbsp;

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
&nbsp;

Coded by **Nagaraj Biradar**, 2022`;
