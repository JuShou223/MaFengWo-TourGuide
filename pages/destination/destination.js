// pages/destination/destination.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData:{
      showCapsule:1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '目的地切换', //导航栏 中间的标题
      backgroundColor: '#fff',
      showMain:0
    },
    height: app.globalData.height * 2 + 20,
    continents:[
      {
        name:'热门',
        id:'Hot',
        domestic_cities:[
          {city_name:"香港"},
          {city_name:"北京"},
          {city_name:"厦门"},
          {city_name:"上海"},
          {city_name:"三亚"},
          {city_name:"成都"},
          {city_name:"丽江"},
          {city_name:"西安"},
          {city_name:"重庆"},
          {city_name:"杭州"}
        ],
        foreign_cities:[
          {city_name:"曼谷"},
          {city_name:"普吉岛"},
          {city_name:"清迈"},
          {city_name:"新加坡"},
          {city_name:"首尔"},
          {city_name:"巴厘岛"},
          {city_name:"京都"},
          {city_name:"大阪"},
          {city_name:"吉隆坡"},
          {city_name:"芽庄"}
        ]
      },
      {
        name:'中国',
        id:'China',
        cities:[
          {city_name:'云南'},
          {city_name:'四川'},
          {city_name:'香港'},
          {city_name:'北京'},
          {city_name:'浙江'},
          {city_name:'台湾'},
          {city_name:'广东'},
          {city_name:'上海'},
          {city_name:'江苏'},
          {city_name:'福建'},
          {city_name:'山东'},
          {city_name:'西藏'},
          {city_name:'重庆'},
          {city_name:'广西'},
          {city_name:'湖南'},
          {city_name:'澳门'},
          {city_name:'青海'},
          {city_name:'内蒙古'},
          {city_name:'河北'},
          {city_name:'安徽'},
          {city_name:'贵州'},
          {city_name:'江西'},
          {city_name:'新疆'},
          {city_name:'湖北'},
          {city_name:'黑龙江'},
          {city_name:'甘肃'},
          {city_name:'辽宁'},
          {city_name:'山西'},
          {city_name:'河南'},
          {city_name:'天津'},
          {city_name:'吉林'},
          {city_name:'宁夏'},

        ]
      },
      {
        name:'南极洲',
        id:'Antarctica',
        cities:[]
      },
      {
        name:'欧洲',
        id:'Europe',
        cities:[]
      },
      {
        name:'非洲',
        id:'Africa',
        cities:[]
      },
      {
        name:'大洋洲',
        id:'Oceania',
        cities:[]
      },
      {
        name:'南美洲',
        id:'South_America',
        cities:[]
      },
      {
        name:'北美洲',
        id:'North_America',
        cities:[]
      },
      {
        name:'亚洲',
        id:'Asia',
        cities:[]
      }
    ]
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