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
    flex-grow: 1;
    flex-basis: 50%;
    padding: 8px;
    background:red;
  }  
  `

  writeCode('',result,()=>{
    createPaper(()=>{
      writeCode(result,result2)
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
  let paper = document.createElement('div')
  paper.id = 'paper'
  paper.innerText = '第二部分准备完毕'
  document.body.appendChild(paper)
  callback()
}
