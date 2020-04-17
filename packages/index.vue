<template>
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="pop" v-if="show">
      <div class="mask" @click="onCancel"></div>
      <transition
        :enter-active-class="parameter.classNameIn"
        :leave-active-class="parameter.classNameOut"
      >
        <div class="box" v-if="showContent">
          <div class="title">{{ parameter.title }}</div>
          <div class="content" v-if="parameter.content" v-html="parameter.content"></div>
          <div class="btns">
            <div class="confirm" @click="onConfirm">{{ parameter.buttonConfirmText }}</div>
            <div class="cancel" @click="onCancel" v-if="parameter.buttonCancelShow">{{ parameter.buttonCancelText }}</div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
require('animate.css')
export default {
  name: 'CrazyConfirm',

  data() {
    return {
      show: false,
      showContent: false,
      defaultParameter: {
        title: '',
        content: '',
        classNameIn: 'animated fadeInUpBig',
        classNameOut: 'animated fadeOutUpBig',
        confirm: false,
        cancel: false,
        buttonConfirmText: '确认',
        buttonCancelText: '取消',
        buttonCancelShow: true
      },
      parameter: {}
    }
  },

  methods: {
    // 关闭按钮
    close() {
      console.log('pop close')
      this.showContent = false
      setTimeout(() => {
        this.show = false
      }, 0)
    },
    // 打开弹窗
    open(parameter) {
      this.parameter = {
        ...this.defaultParameter,
        ...parameter
      }
      console.log('pop open')
      this.show = true
      setTimeout(() => {
        this.showContent = true
      }, 0)
    },
    // 取消按钮
    onCancel() {
      this.close()
      if(typeof this.parameter.cancel == 'function') this.parameter.cancel()
    },
    // 确认按钮
    onConfirm() {
      this.close()
      if(typeof this.parameter.confirm == 'function') this.parameter.confirm()
    }
  },

  mounted() {
    console.log('pop mounted')
  },

  destroyed() {
    console.log('pop destory')
    this.clear()
  }
};
</script>

<style scoped lang="scss">
.pop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .box {
    position: relative;
    z-index: 2;
    width: 310px;
    background: #ffffff;
    border-radius: 13px;
    padding: 27px;
    color: #666666;
    .title {
      font-size: 18px;
      color: #333333;
      margin-bottom: 15px;
    }
    .content {
      margin-bottom: 15px;
      line-height: 1.8em;
    }
    .btns {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      > * {
        height: 20px;
        line-height: 20px;
        margin-right: 15px;
        font-size: 16px;
        cursor: pointer;
        background: rgba(0,0,0,0.04);
        padding: 5px 10px;
        &:active,
        &:hover {
          color: lighten(#666666, 5);
          background: rgba(0,0,0,0.05);
        }
      }
      .confirm {
        color: #FF6363;
        &:active,
        &:hover {
          color: lighten(#FF6363, 5)
        }
      }
    }
  }
}
</style>
