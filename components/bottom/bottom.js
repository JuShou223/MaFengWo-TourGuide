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
    height: ''
  },
  created: function(){
    
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    collected(){
      let {isCollect,collectors} = this.data.bottomData.placeData;
      isCollect = !isCollect;
      this.data.bottomData.placeData.isCollect = isCollect;
      this.data.bottomData.placeData.collectors = collectors;
      let collectData = wx.getStorageSync('collectData') || [];
      if(isCollect){
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
          duration: 2000
        })
        collectors++;
        collectData.push(this.data.bottomData.placeData);
      }else{
        wx.showToast({
          title: '已取消',
          icon: 'success',
          duration: 2000
        })
        collectors--;
        collectData = collectData.filter(e => e.name != this.data.bottomData.placeData.name)
      }
      wx.setStorageSync('collectData', collectData)
      let bottomData = this.data.bottomData;
      this.setData({
        bottomData
      })
    }
  }
})
