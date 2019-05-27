// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '马蜂窝旅游', //导航栏 中间的标题
      backgroundColor: "#fff",
      showMian: 0
    },
    collection_type: [
      {
        name: '全部',
        content: []
      },
      {
        name: '游记',
        content: []
      },
      {
        name: '攻略',
        content: []
      },
      {
        name: '问答',
        content: []
      },
      {
        name: '线路',
        content: []
      },
      {
        name: '必体验',
        content: []
      }
    ],
    curIndex: 0,
    userInfo: {},
    hasUserInfo: false,
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
  },
  selected(e) {
    let curIndex = e.currentTarget.dataset.index;
    this.setData({
      curIndex,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
    let collects = wx.getStorageSync('collects');
    const details = wx.getStorageSync('details');
    if (collects) {
      this.data.collection_type[0].content = collects;
    }
    if (details) {
      for (let detail of details) {
        if (!detail.isCollect) {
          for (let i = 0; i < this.data.collection_type[0].content.length; i++) {
            if (this.data.collection_type[0].content[i].name == detail.name) {
              this.data.collection_type[0].content.splice(i, 1);
            }
          }
        }
      }
    }
    const collection_type = this.data.collection_type;
    this.setData({
      collection_type,
    })
    wx.removeStorageSync('collects')
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

  },
  gotoScenicSpotDetail(e) {
    let index = 0;
    for (let i = 0; i < this.data.collection_type[0].content.length; i++) {
      if (this.data.collection_type[0].content[i].name === e.currentTarget.dataset.name) {
        let index = i;
        const {
          name,
          collectors,
          isCollect,
          label,
          list_name,
          tourists
        } = this.data.collection_type[0].content[index];
        let city = this.data.collection_type[0].content[index].city_name;
        let details = wx.getStorageSync('details');
        if (!details) {
          details = [];
        }
        const detail = {
          name,
          collectors,
          isCollect
        };
        for (let i in details) {
          if (details[i].name == detail.name) {
            details[i] = detail;
            let index = i;
            break;
          }
        }
        if (index == 0) {
          details.push(detail);
        }
        wx.setStorageSync("details", details)
        wx.navigateTo({
          url: `/pages/scenic_spot_detail/scenicSpotDetail?name=${name}&collectors=${collectors}&isCollect=${isCollect}&label=${label}&list_name=${list_name}&tourists=${tourists}&city=${city}`,
        })
      }
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})