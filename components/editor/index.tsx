"use client";

import * as React from "react";
import { Box } from "@chakra-ui/react";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor as Wysiwyg } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface EditorProps {
  content: string;
  onUpdate: (value: string) => void;
}

const Editor = ({ onUpdate, content }: EditorProps) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(content) as any)
    )
  );

  React.useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    onUpdate(html);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState]);

  return (
    <Box
      css={`
        .editor-class {
          border: 1px solid #cbd5e0;
          border-radius: 0.375rem;
          min-height: 120px;
          padding-left: 12px;
          padding-right: 12px;
        }

        .editor-class:focus-visible {
          z-index: 1;
          border-color: #3182ce;
          box-shadow: 0 0 0 1px #3182ce;
        }
        .toolbar-class {
          border-radius: 0.375rem;
          background: #fff2dc;
          min-height: 40px;
        }
      `}
    >
      <Wysiwyg
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: ["inline", "list"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
          list: {
            options: ["ordered", "unordered"],
          },
        }}
      />
    </Box>
  );
};

export default Editor;
