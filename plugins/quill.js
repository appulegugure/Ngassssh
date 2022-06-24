import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

const toolbaroption=[
        //見出し
        [{
            'header': [3, 4, 5, 6, false]
        }],
        //フォント種類
        [{
            'font': ['']
        }],
        //文字寄せ
        [{
            'align': []
        }],
        //太字、斜め、アンダーバー
        ['bold', 'italic', 'underline'],
        //文字色
        [{
                'color': []
            },
            //文字背景色
            {
                'background': []
            }
        ],
        // リスト
        [{
                'list': 'ordered'
            },
            {
                'list': 'bullet'
            }
        ],
        //インデント
        [{
            'indent': '-1'
        }, {
            'indent': '+1'
        }],
        //画像挿入
        ['image'],
        //動画
        ['video'],
        //数式
        ['formula'],
        //URLリンク
        ['link']
    ];

Vue.use(VueQuillEditor, {

  modules: {
      //ツールバーの設定
      toolbar: toolbaroption
  },
  placeholder: '入力してください',
  //ツールバーのあるデザイン
  theme: 'snow' //'snow' or 'bubble'

  })