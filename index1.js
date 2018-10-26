let result = `
  /*
  *面试官你好，我是丁胜
  *我将以动画的形式来介绍我自己

  *只用文字写太单调了
  *我就用代码来介绍吧

  *首先准备一些样式
  */

  *{
    transition: all 1s;
    box-sizing: border-box;
  }
  body {
    background: rgb(222, 222, 222);
    font - size: 16px;
  }
  #pre {
    flex-grow: 1;
    border: 1px solid red;
    padding: 8px;
    margin: 0;
    flex-basis: 50% ;
  }

  /*我需要一些代码高亮*/

  .token.selector {
    color: #690;
  }
  .token.property{
    color: #905;
    }
  .token.function {
    color: #DD4A68;
  }

  /*加点3D效果*/
  #pre{
    transform: rotate(360deg);
  }

  /*我需要一张白纸*/
  `
  let result2 = `
  #paper{
    font-size:18px;
    flex-grow: 1;
    flex-basis: 50%;
    padding: 8px;
    margin: 0;
    border: 5px solid black;
  }  
  `

  let md = `
  # 自我介绍

  我叫丁胜
  1992年 1月 15日 出生
  毕业于重庆西南大学
  自学前端半年
  希望应聘贵公司前端开发岗位

  # 技能

  熟悉JavaScript CSS 

  # 项目介绍
  
  1 网易云音乐
  2 简书网站模仿
  `

  writeCode('',result,()=>{
    createPaper(()=>{
      writeCode(result,result2,()=>{
        writeMarkdown(md)
      })
    })
  })

  
  
function writeCode(prefix,result,callback){
  let n = 0
  let id = setInterval(() => {
    n += 1
    let html = Prism.highlight(prefix + result.substring(0, n), Prism.languages.css, 'css');
    pre.innerHTML = html
    styleTag.innerHTML = prefix + result.substring(0, n)
    if (n >= result.length) {
      window.clearInterval(id)
      callback && callback()
    }
  }, 10)
}


function createPaper(callback) {
  let paper = document.createElement('pre')
  paper.id = 'paper'
  document.body.appendChild(paper)
  callback()
}

function writeMarkdown(md){
  let n = 0
  let id = setInterval(() => {
    n += 1
    let markdown = md.substring(0, n)
    paper.innerHTML = markdown
    document.querySelector('#paper').scrollTop = 10000
    if (n >= md.length) {
      window.clearInterval(id)
    }
  }, 10)
}
