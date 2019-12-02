# background-box

基于vue的图片背景组件

## 使用

安装
``` bash
npm install background-box -S
```

全局应用组件
``` javascript
import BackgroundBox from 'background-box'
Vue.use(BackgroundBox)
```

使用组件background-box
``` html
<background-box :src-img="defImg" frame-height="calc(1vw + 10px)" frame-width="calc(1vw + 10px)">
     <img style="height: 200px;width: 200px" :src="../assets/defaultImg.png"/>
</background-box>
```

组件属性
```
src-img: 加载背景框素材 默认蓝色背景框
frame-height:边框高度
frame-width:边框宽度

```

## 效果
![image](https://raw.githubusercontent.com/qq1060844713/background-box/master/background.png)
