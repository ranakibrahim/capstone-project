import "./MyNotes.scss";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyNotes() {
  const [value, setValue] = useState("");
  const [editorContent, setEditorContent] = useState(null);
  const quillRef = useRef(null);

  const handleGetContents = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const contents = editor.getContents();
      console.log(contents);
      setEditorContent(contents);
    }
  };

  const handleSetContents = () => {
    if (quillRef.current && editorContent) {
      const editor = quillRef.current.getEditor();
      editor.setContents(editorContent);
    }
  };

  return (
    <div className="mynotes">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        ref={quillRef}
      />
      <button
        type="submit"
        onClick={handleGetContents}
        className="mynotes__save"
      >
        Save
      </button>
    </div>
  );
}
