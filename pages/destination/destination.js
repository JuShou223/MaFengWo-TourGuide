// pages/destination/destination.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '目的地切换', //导航栏 中间的标题
      backgroundColor: '#fff',
      showMain: 0
    },
    height: app.globalData.height * 2 + 20,
    continents: [],
    curIndex: 0
  },
  switch_des(e) {
    let curIndex = e.currentTarget.dataset.index;
    this.setData({
      curIndex,
    })
  },
  goMain(e){
    const city_name = e.currentTarget.dataset.city_name;
    wx.setStorageSync('currentCity', city_name)
    wx.switchTab({
      url: '/pages/main/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca457f04767c3737055c868/example/mafengwo/continents',
      success:(res)=>{
        that.setData({
          continents: res.data.continents
        })
      }
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