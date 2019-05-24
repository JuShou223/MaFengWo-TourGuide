// components/bottom/bottom.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bottomData: {   //   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: '',
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
    console.log(app.globalData)
    this.setData({
      height: app.globalData.height
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
