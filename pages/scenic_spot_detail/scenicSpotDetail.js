// pages/scenic_spot_detail/scenicSpotDetail.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomData:{
      showCollect:1, //是否显示收藏图标
      showCamera:1,  //是否显示照相图标
    },
    navbarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '马蜂窝旅游', //导航栏 中间的标题
      backgroundColor: "#fff",
      showMian: 0,
    },
    detail:{},
    city:'',
    height: app.globalData.height * 2 + 20,   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const label = options.label === "" ? [] : options.label.split(",")
      const city = options.city
      const detail = { name: options.name, collectors: options.collectors, isCollect: options.isCollect, label, list_name: options.list_name, tourists: options.tourists };
      this.data.bottomData.isCollect = detail.isCollect;
      this.data.bottomData.collectors = detail.collectors;
      this.data.navbarData.title = detail.name;
      this.setData({
        detail,
        city
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})