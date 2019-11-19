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
  <background-box>
     <img slot="depth-box" :src="http://img15.3lian.com/2015/f1/173/d/40.jpg"/>
 </background-box>
```

组件属性
```
depth-box: 加载背景框插槽名称

```

## 效果
![image](https://raw.githubusercontent.com/kuangch/convenience-image/master/screen.jpg)
