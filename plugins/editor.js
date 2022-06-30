import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
const Link = require('@editorjs/link');
import Embed from '@editorjs/embed';
const Quote = require('@editorjs/quote');
// const SimpleImage = require('@editorjs/simple-image');
import ImageTool from '@editorjs/image';
import Table from '@editorjs/table';
const Checklist = require('@editorjs/checklist');





export default ({ $axios }, inject) => {
  inject('editor', {
    EditorJS: ({ holder, placeholder, data ,readOnly }) => {
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
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true
              }
            }
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          // image: SimpleImage,
          image: {
            class: ImageTool,
            config: {
              /**
               * Custom uploader
               */
              uploader: {
                /**
                 * Upload file to the server and return an uploaded image data
                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByFile(file){
                  // your own uploading logic here

                  console.log('hi',file)
                  // return MyAjax.upload(file).then(() => {
                  //   return {
                  //     success: 1,
                  //     file: {
                  //       url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                  //       // any other image data you want to store, such as width, height, color, extension, etc
                  //     }
                  //   };
                  // });
                },

                /**
                 * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
                 * @param {string} url - pasted image URL
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByUrl(url){
                  // your ajax request for uploading
                  return MyAjax.upload(file).then(() => {
                    return {
                      success: 1,
                      file: {
                        url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                        // any other image data you want to store, such as width, height, color, extension, etc
                      }
                    }
                  })
                }
              },
            }
          },
          // emb  
          quote: Quote,
          table: Table,
          linkTool: {
            class: Link,
            config: {
              endpoint: 'http://localhost:8008/edit  ', // Your backend endpoint for url data fetching,
            }
          },
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