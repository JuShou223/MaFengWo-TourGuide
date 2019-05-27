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
      observer: function (newVal, oldVal) {
       }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: '',
    isCollect:false,
    collectors:0
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
    let details = wx.getStorageSync('details')
    let isCollect = details[0].isCollect;
    let collectors = details[0].collectors;
    this.setData({
      isCollect,
      collectors
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    collected(){
      let isCollect = this.data.isCollect;
      let collectors = this.data.collectors;
      isCollect = !isCollect;
      if(isCollect){
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
          duration: 2000
        })
        collectors++;
      }else{
        wx.showToast({
          title: '已取消',
          icon: 'success',
          duration: 2000
        })
        collectors--;
      }
      const details = wx.getStorageSync('details');
      details[0].isCollect = isCollect;
      details[0].collectors = collectors;
      wx.setStorageSync('details', details)
      this.setData({
        isCollect,
        collectors
      })
    }
  }
})
