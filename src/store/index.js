import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected:'profile',
        lineSize:1,
        resume: {
            config:[
                {field: 'profile', icon: "fa fa-user"},
                {field: 'education', icon: "fa fa-university"},
                {field: 'contact', icon: "fa fa-envelope-open"},
                {field: 'skills', icon: "fa fa-map-signs"},
                {field: 'workHistory', icon: "fa fa-id-card"},
                {field: 'projects', icon: "fa fa-wrench"}
            ],
            profile:{
                name:'沐清子',
                job:'一厢情愿的程序媛',
                city:'深圳'
            },
            education:[
                {school:'学校',content:'专业'}
            ],
            contact:[
                {contacts:'电话',content:'描述'}
            ],
            skills:[
                {name:'★ web前端',content:'描述'},
                {name:'★ web后端',content:'描述'},
            ],
            workHistory:[
                {company:'公司',content:'描述'}
            ],
            projects:[
                {project:'项目名称',content:'描述'}
            ]
        }
    },
    mutations: {
        switchTab(state,temp){
            state.selected = temp
            localStorage.setItem('state',JSON.stringify(state))
        },
        updateResume(state,{path,value}){
            objectPath.set(state.resume,path,value)
            localStorage.setItem('state',JSON.stringify(state))
        },
        append(state,temp){
            var newInput = {}

            //循环属性名称
            for(var i in temp.key){
                //newInput[i] = temp.key[i]
                newInput[i] = ''
            }
            temp.field.push(newInput)
        },
        addLineHeight(state) {
            state.lineSize += 0.1
        },
        reduceLineHeight(state) {
            state.lineSize -= 0.1
        },
        downloadPDF(state) {
            var loadarea = document.getElementById('previewDiv')
            html2canvas(loadarea,{
                onrendered:function(canvas) {
                    //返回图片dataURL，参数：图片格式和清晰度(0-1)
                    var contentWidth = canvas.width;
                  var contentHeight = canvas.height;

                  //一页pdf显示html页面生成的canvas高度;
                  var pageHeight = contentWidth / 592.28 * 841.89;
                  //未生成pdf的html页面高度
                  var leftHeight = contentHeight;
                  //页面偏移
                  var position = 0;
                  //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                  var imgWidth = 595.28;
                  var imgHeight = 592.28/contentWidth * contentHeight;

                  var pageData = canvas.toDataURL('image/jpeg', 1.0);

                  var pdf = new jsPDF('', 'pt', 'a4');

                  //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                  //当内容未超过pdf一页显示的范围，无需分页
                  if (leftHeight < pageHeight) {
            	  pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
                  } else {
            	      while(leftHeight > 0) {
            	          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            	          leftHeight -= pageHeight;
            	          position -= 841.89;
            	          //避免添加空白页
            	          if(leftHeight > 0) {
            		        pdf.addPage();
            	          }
            	      }
                  }

                  pdf.save('content.pdf');
                }
            })
        }
    }
})
