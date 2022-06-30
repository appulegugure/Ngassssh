import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import ImageTool from '@editorjs/image';


export default ({ $axios }, inject) => {
  inject('vieweditor', {
    Viewer: ({ holder, placeholder, data ,readOnly }) => {
      return new EditorJS({
        holder,
        placeholder,
        // data,
        // inlineToolbar: ['link', 'marker', 'bold', 'italic'],
        onReady: () => {console.log('Editor.js is ready to work!')},
        // onChange: (api, event) => {
        //   console.log('Now I know that Editor\'s content changed!', event)
        // },
        tools: { 
          header: {
            class: Header, 
            inlineToolbar: ['link'] 
          }, 
          list: { 
            class: List, 
            inlineToolbar: true 
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://static-hosting-bucket-0.s3-website-us-west-2.amazonaws.com ', // Your backend file uploader endpoint
                byUrl: 'http://static-hosting-bucket-0.s3-website-us-west-2.amazonaws.com ', // Your endpoint that provides uploading by Url
              }
            }
          }
        }, 
        autofocus: true,
        // placeholder: 'Let`s write an awesome story!',
        logLevel: 'ERROR',
        readOnly,
        data,



      })
    },
  })
}