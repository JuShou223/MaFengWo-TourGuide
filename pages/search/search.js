// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '马蜂窝旅游', //导航栏 中间的标题
      backgroundColor: '#ffffff', //'#354a98'
      city: '',
      opacity: 1,
      showMain: 0
    },
    height: app.globalData.height * 2 + 20,
    result: [],
    searchparams: '',
    show: true,
    searchHistory: [],
    showResult: false,
    showconfirm: false,
    placedata: []
  },
  clear() {
    this.setData({
      searchHistory: []
    })
    wx.removeStorageSync('searchHistory')
  },
  confirm(e) {
    if (e.detail.value != '') {
      let searchHistory = wx.getStorageSync('searchHistory') || []
      if (searchHistory.filter(a => a === e.detail.value).length === 0) {
        searchHistory.push(e.detail.value)
        wx.setStorageSync('searchHistory', searchHistory)
      }
      if (this.data.result.length > 0) {
        let currentCity = this.data.result[0].name;
        this.getCityDataByName(currentCity);
      }
      this.setData({
        show: false,
        showResult: false,
        showconfirm: true
      })
    }
  },
  gotomain(e) {
    wx.setStorageSync('currentCity', e.currentTarget.dataset.name)
    wx.switchTab({
      url: '/pages/main/index',
    })
  },
  gosearch(e) {
    let that = this
    wx.request({
      url: `https://www.easy-mock.com/mock/5ca457f04767c3737055c868/example/mafengwo/search?name=${e.currentTarget.dataset.name}`,
      success: (res) => {
        if (res.data.data.length > 0) {
          that.getCityDataByName(res.data.data[0].name)
        } else {
          this.setData({
            show: false,
            showResult: false,
            showconfirm: true
          })
        }
      }
    })

  },
  // 通过城市名字 获取城市数据
  getCityDataByName(cityname) {
    let that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca457f04767c3737055c868/example/mafengwo/china',
      success: (res) => {
        let placedata = [];
        placedata.push(...res.data.data.china.filter(e => e.chName === cityname))
        that.setData({
          placedata,
          show: false,
          showResult: false,
          showconfirm: true
        })
      }
    })
  },
  search(e) {
    let that = this
    wx.request({
      url: `https://www.easy-mock.com/mock/5ca457f04767c3737055c868/example/mafengwo/search?name=${e.detail.value}`,
      success: (res) => {
        if (res.data.data.length > 0) {
          that.changecolor(res.data.data, e.detail.value)
        } else {
          that.setData({
            result: [],
            searchparams: '',
            showResult: false
          })
        }
      }
    })
  },
  changecolor(result, searchparams) {
    for (let j = 0; j < result.length; j++) {
      let i = result[j].name.search(searchparams);
      let left = result[j].name.slice(0, i),
        mid = result[j].name.slice(i, i + searchparams.length),
        right = result[j].name.slice(i + searchparams.length);
      result[j].left = left;
      result[j].mid = mid;
      result[j].right = right;
    }
    this.setData({
      result,
      searchparams,
      show: false,
      showResult: true,
      showconfirm: false
    })
  },
  _navback() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let searchHistory = wx.getStorageSync('searchHistory') || []
    this.setData({
      searchHistory
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})