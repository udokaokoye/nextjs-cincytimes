import React, { useEffect, useRef } from "react";

function Editor({ onChange, editorLoaded, name, value, editorConfiguration, data = '' }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};



  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("ckeditor5-custom-build/build/ckeditor"),
      // mediaEmbed: require('ckeditor5')
    };
  }, []);

if (editorLoaded) {
      return (
        <>
         <CKEditor
                name={name}
                editor={ClassicEditor}
                data={data}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  // console.log({ event, editor, data })
                  onChange(data);
                }}
                  config={editorConfiguration}
              />
        </>
      );
} else {
    return (
        <p>Editor Loading</p>
    )
}

}


export default Editor;
