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
    continents: [
      {
        name: '热门',
        id: 'Hot',
        cities: [
          {
            title: '国内热门城市',
            city: [
              { city_name: "香港" },
              { city_name: "北京" },
              { city_name: "厦门" },
              { city_name: "上海" },
              { city_name: "三亚" },
              { city_name: "成都" },
              { city_name: "丽江" },
              { city_name: "西安" },
              { city_name: "重庆" },
              { city_name: "杭州" }
            ]
          },
          {
            title: '国外热门城市',
            city: [
              { city_name: "曼谷" },
              { city_name: "普吉岛" },
              { city_name: "清迈" },
              { city_name: "新加坡" },
              { city_name: "首尔" },
              { city_name: "巴厘岛" },
              { city_name: "京都" },
              { city_name: "大阪" },
              { city_name: "吉隆坡" },
              { city_name: "芽庄" }
            ]
          }
        ]
      },
      {
        name: '中国',
        id: 'China',
        cities: [
          {
            city_name: '云南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '四川',
            img: '/images/sichuan.jpg'
          },
          {
            city_name: '香港',
            img: '/images/liaoning.png'
          },
          {
            city_name: '北京',
            img: '/images/beijing.jpeg'
          },
          {
            city_name: '浙江',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '台湾',
            img: '/images/xizhang.png'
          },
          {
            city_name: '广东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '上海',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '江苏',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '福建',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '山东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '西藏',
            img: '/images/xizhang.png'
          },
          {
            city_name: '重庆',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '广西',
            img: '/images/guangxi.jpeg'
          },
          {
            city_name: '湖南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '澳门',
            img: '/images/aomen.jpeg'
          },
          {
            city_name: '青海',
            img: '/images/qinghai.jpeg'
          },
          {
            city_name: '内蒙古',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '河北',
            img: '/images/hebei.jpeg'
          },
          {
            city_name: '安徽',
            img: '/images/anhui.jpeg'
          },
          {
            city_name: '贵州',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '江西',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '新疆',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '湖北',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '黑龙江',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '甘肃',
            img: '/images/gansu.png'
          },
          {
            city_name: '辽宁',
            img: '/images/liaoning.png'
          },
          {
            city_name: '山西',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '河南',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '天津',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '吉林',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '宁夏',
            img: '/images/heilongjiang.jpeg'
          },

        ]
      },
      {
        name: '南极洲',
        id: 'Antarctica',
        cities: [
          {
            city_name: '南极洲',
            img: '/images/hunan.jpeg'
          },
        ]
      },
      {
        name: '欧洲',
        id: 'Europe',
        cities: [
          {
            city_name: '意大利',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '法国',
            img: '/images/sichuan.jpg'
          },
          {
            city_name: '英国',
            img: '/images/liaoning.png'
          },
          {
            city_name: '俄罗斯',
            img: '/images/beijing.jpeg'
          },
          {
            city_name: '德国',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '西班牙',
            img: '/images/xizhang.png'
          },
          {
            city_name: '瑞士',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '希腊',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '荷兰',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '捷克',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '奥地利',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '冰岛',
            img: '/images/xizhang.png'
          },
          {
            city_name: '挪威',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '芬兰',
            img: '/images/guangxi.jpeg'
          },
          {
            city_name: '葡萄牙',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '比利时',
            img: '/images/aomen.jpeg'
          },
          {
            city_name: '塞尔维亚',
            img: '/images/qinghai.jpeg'
          },
          {
            city_name: '瑞典',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '丹麦',
            img: '/images/hebei.jpeg'
          },
        ]
      },
      {
        name: '非洲',
        id: 'Africa',
        cities: [
          {
            city_name: '云南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '四川',
            img: '/images/sichuan.jpg'
          },
          {
            city_name: '香港',
            img: '/images/liaoning.png'
          },
          {
            city_name: '北京',
            img: '/images/beijing.jpeg'
          },
          {
            city_name: '浙江',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '台湾',
            img: '/images/xizhang.png'
          },
          {
            city_name: '广东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '上海',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '江苏',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '福建',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '山东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '西藏',
            img: '/images/xizhang.png'
          },
          {
            city_name: '重庆',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '广西',
            img: '/images/guangxi.jpeg'
          },
          {
            city_name: '湖南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '澳门',
            img: '/images/aomen.jpeg'
          },
          {
            city_name: '青海',
            img: '/images/qinghai.jpeg'
          },
          {
            city_name: '内蒙古',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '河北',
            img: '/images/hebei.jpeg'
          },
        ]
      },
      {
        name: '大洋洲',
        id: 'Oceania',
        cities: [
          {
            city_name: '云南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '四川',
            img: '/images/sichuan.jpg'
          },
          {
            city_name: '香港',
            img: '/images/liaoning.png'
          },
          {
            city_name: '北京',
            img: '/images/beijing.jpeg'
          },
          {
            city_name: '浙江',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '台湾',
            img: '/images/xizhang.png'
          }
        ]
      },
      {
        name: '南美洲',
        id: 'South_America',
        cities: [
          {
            city_name: '云南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '四川',
            img: '/images/sichuan.jpg'
          },
          {
            city_name: '香港',
            img: '/images/liaoning.png'
          },
          {
            city_name: '北京',
            img: '/images/beijing.jpeg'
          },
          {
            city_name: '浙江',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '台湾',
            img: '/images/xizhang.png'
          },
          {
            city_name: '广东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '上海',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '江苏',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '福建',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '山东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '西藏',
            img: '/images/xizhang.png'
          },
          {
            city_name: '重庆',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '广西',
            img: '/images/guangxi.jpeg'
          },
          {
            city_name: '湖南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '澳门',
            img: '/images/aomen.jpeg'
          },
          {
            city_name: '青海',
            img: '/images/qinghai.jpeg'
          },
          {
            city_name: '内蒙古',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '河北',
            img: '/images/hebei.jpeg'
          },
        ]
      },
      {
        name: '北美洲',
        id: 'North_America',
        cities: [
          {
            city_name: '云南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '四川',
            img: '/images/sichuan.jpg'
          },
          {
            city_name: '香港',
            img: '/images/liaoning.png'
          },
          {
            city_name: '北京',
            img: '/images/beijing.jpeg'
          },
          {
            city_name: '浙江',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '台湾',
            img: '/images/xizhang.png'
          },
          {
            city_name: '广东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '上海',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '江苏',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '福建',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '山东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '西藏',
            img: '/images/xizhang.png'
          },
          {
            city_name: '重庆',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '广西',
            img: '/images/guangxi.jpeg'
          },
          {
            city_name: '湖南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '澳门',
            img: '/images/aomen.jpeg'
          },
          {
            city_name: '青海',
            img: '/images/qinghai.jpeg'
          },
          {
            city_name: '内蒙古',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '河北',
            img: '/images/hebei.jpeg'
          },
        ]
      },
      {
        name: '亚洲',
        id: 'Asia',
        cities: [
          {
            city_name: '云南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '四川',
            img: '/images/sichuan.jpg'
          },
          {
            city_name: '香港',
            img: '/images/liaoning.png'
          },
          {
            city_name: '北京',
            img: '/images/beijing.jpeg'
          },
          {
            city_name: '浙江',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '台湾',
            img: '/images/xizhang.png'
          },
          {
            city_name: '广东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '上海',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '江苏',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '福建',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '山东',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '西藏',
            img: '/images/xizhang.png'
          },
          {
            city_name: '重庆',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '广西',
            img: '/images/guangxi.jpeg'
          },
          {
            city_name: '湖南',
            img: '/images/hunan.jpeg'
          },
          {
            city_name: '澳门',
            img: '/images/aomen.jpeg'
          },
          {
            city_name: '青海',
            img: '/images/qinghai.jpeg'
          },
          {
            city_name: '内蒙古',
            img: '/images/heilongjiang.jpeg'
          },
          {
            city_name: '河北',
            img: '/images/hebei.jpeg'
          },
        ]
      }
    ],
    curIndex: 0
  },
  switch_des(e) {
    let curIndex = e.currentTarget.dataset.index;
    this.setData({
      curIndex,
    })
    console.log(e)
  },
  goMain(e){
    const city_name = e.currentTarget.dataset.city_name;
    wx.setStorageSync('city_name', city_name)
    wx.switchTab({
      url: '/pages/main/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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