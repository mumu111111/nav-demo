// 1.初始化数据
var hashA=init()
var keys= hashA['keys']
var hash= hashA['hash'] 

//  2.生成键盘：遍历keys, 生成kbd标签
generatorKeyboard(keys,hash)

// 3.监听用户动作
ListenUser(hash)


function init(){
        
    var  keys={
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        length: 3
    }
    var hash ={
    
        'q': 'qq.com', 
        'w': 'weibo.com',
        'e': 'ele.me', 
        'r': 'renren.com', 
        't': 'tianya.com', 
        'y': 'youtube.com', 
        'u': 'uc.com' , 
        'i': 'iqiyi.com', 
        'o': 'opera.com', 
        'p': undefined, 
        'a': 'acfun.tv', 
        's': 'sohu.com', 
        'z': 'zhihu.com', 
        'm': 'www.mcdonalds.com.cn'
    }
    // 覆盖hash ,获取最新的hash
    var hashInLocalStorage=  getFromlocalStorage(name)
    if(hashInLocalStorage){
        hash=hashInLocalStorage
    }
    return {
        "keys":keys,
        "hash":hash
    }
}
function getFromlocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || null)
}

function generatorKeyboard(keys, hash){
    for(var index=0;index< keys['length'];index=index+1 ){

        var div= tag('div')
        div.className="row"

        main.appendChild(div)

        var row=keys[index]//keys中第一个 、 第二个、第三个数组
        
        for(var index2=0;index2<row['length'];index2=index2+1){

            var span=createSpan(row[index2])

            var img=createImg(hash[row[index2]])
            
            var button=createButton(row[index2])
        
            var kbd=tag('kbd')
            kbd.className="key"

            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)

            div.appendChild(kbd)
        }
    }
}

function ListenUser(hash){
    document.onkeypress=function(djjfkf){
    var key =djjfkf['key']
    var website= hash[key]
    window.open('http://'+website, '_blank')
    //location.href='http://'+website
    }
}

function tag(tagName){
    var element= document.createElement(tagName)
    return element; 
}

function createSpan(textContent){
        var span=tag('span')
        span.textContent=textContent
        span.className="text"
        return span
}
function createImg(domain){
        var img=tag('img')
        if(domain){ //域名
            img.src='http://'+domain+'/favicon.ico'
        }
        else{
            img.src='//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        img.onerror= function(ddddd){
            console.log(ddddd.target.src='//i.loli.net/2017/11/10/5a05afbc5e183.png')
        }
        return img
}
function createButton(id){
        var button=tag('button')
        button.textContent= "E"
        button.id= id
        button.onclick= function(ddfhgh){
            //console.log(ddfhgh);
            var button2=ddfhgh.target;
            var img2=button2.previousSibling
            var key=button2['id']
            var x= prompt('给我一个网址')
            hash[key]=x
            img2.src='http://'+x+'/favicon.ico'
            img2.onerror= function(ffffff){
                ffffff.target.src='//i.loli.net/2017/11/10/5a05afbc5e183.png'
            }
            localStorage.setItem('zzz',JSON.stringify(hash))
        }
        return button
}