# vue-crazy-confirm

![screenShot]('https://github.com/crazy-hope/vue-crazy-confirm/blob/master/screenshot/confirm.png')

### 安装 `vue-crazy-confirm`
``` shell
yarn add vue-crazy-confirm
# or
npm install vue-crazy-confirm
```

### 引入 `vue-crazy-confirm`
``` javascript
// main.js
import crazyConfirm from 'vue-crazy-confirm'
Vue.use(crazyConfirm)
```

### 使用 `vue-crazy-confirm`
``` javascript
// 打开
this.$crazyConfirm.open({
    title: 'Title',
    content: 'Content',
    cancel() {
        alert('cancel');
    },
    confirm() {
        alert('confirm');
    },
    classNameIn: 'animated fadeInUpBig',
    classNameOut: 'animated fadeOutUpBig',
    buttonConfirmText: '确认',
    buttonCancelText: '取消',
    buttonCancelShow: true
})

// 关闭
this.$crazyConfirm.close()
```

### 属性说明
| 属性 | 默认值 | 说明 |
|-|-|-|
| title | 空 | 弹窗标题 |
| content | 空 | 弹窗内容描述 |
| cancel | false | 取消按钮的回调函数（点击mask也会触发cancel回调函数） |
| confirm | false | 确认按钮的回调函数 |
| buttonConfirmText | 确认 | 确认按钮的文本 |
| buttonCancelText | 取消 | 取消按钮的文本 |
| buttonCancelShow | true | 是否显示取消按钮 |
| classNameIn | 'animated fadeInUpBig' | 弹窗显示动画，使用animate.css |
| classNameOut | 'animated fadeOutUpBig' | 弹窗隐藏动画，使用animate.css |