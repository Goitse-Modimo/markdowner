import React from 'react'
import  marked  from 'marked';
import Prism from "prismjs";

marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  });
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
return `<a target="_blank" href="${href}">${text}</a>`;
};

const HTMLcontant = ({ markdown }) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked( markdown )
            }} 
            className='preview'
        />
        // <h1>Hello MarkDown~!</h1>
    )
}

export default HTMLcontant
