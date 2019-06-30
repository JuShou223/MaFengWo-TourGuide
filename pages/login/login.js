// miniprogram/pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    // 顶部导航栏数据
    navbarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '马蜂窝旅游', //导航栏 中间的标题
      backgroundColor: '#354a98', //'#354a98'
      opacity: 1,
      showMain: 0,
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
  },
  bindGetUserInfo(res) {
    let that =this
    let info = res;
    if (info.detail.userInfo) {
      console.log("点击了同意授权");
      wx.login({
        success: function (res) {
          that.getPlaceData()
        }
      })
    } else {
      console.log("点击了拒绝授权");
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getUserInfo({
      success: function (res) {
        wx.switchTab({
          url: '/pages/main/index'
        })
      },
      fail(err) {
        that.setData({
          show: true
        })
      }
    })
  },
  // 获取城市名字
  getCityName(location) {
    return new Promise((resolve, reject) => {
      let that = this;
      var e = {
        coord_type: "gcj02",
        output: "json",
        pois: 0,
        ak: 'syWOaGZoD9P7v7YgVF7xT08grOyMjI62',
        sn: "",
        timestamp: ""
      };
      e.location = location;
      wx.request({
        url: "https://api.map.baidu.com/geocoder/v2/",
        data: e,
        header: {
          "content-type": "application/json"
        },
        method: "GET",
        success: function (t) {
          let currentCity = t.data.result.addressComponent.city;
          if (currentCity.slice(currentCity.length - 1) == "市") {
            currentCity = currentCity.slice(0, currentCity.length - 1)
          }
          wx.setStorageSync('currentCity', currentCity)
          resolve(currentCity) //通过城市名字 请求城市数据
        }
      })
    })
  },
  // 获取经纬度
  getLocation() {
    return new Promise((resolve, reject) => {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          let location = latitude + ',' + longitude
          console.log(location)
          resolve(location) //获取城市名字
        }
      })
    })
  },
  getPlaceData() { // 获取地理信息
    let that = this
    this.getLocation().then((val) => {
      return that.getCityName(val)
    }).then(()=>{
      wx.switchTab({
        url: '/pages/main/index'
      })
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