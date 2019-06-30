//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 顶部导航栏数据
    navbarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '', //导航栏 中间的标题
      backgroundColor: '', //'#354a98'
      opacity: 0,
      showMain: 1,
      cityName: ''
    },
    windowHeight: '',
    windowWidth: '',
    cur_view: [],
    showend: false,
    size: 0,
    mcurIndex: 0,
    hlcurIndex: 0,
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    placeData: {}, // 城市数据
    weather: '', //天气信息
    curtem: '', // 当前温度
    weatherPic: '', //天气图标
    on: false, //video 的显示状态
    src: '', // 视频资源
    show: false, //显示
    ishot: true,
    showDefault: false,
    anicontrol: 0,
    defaultData: {
      isHot: false,
      bgc: '#354a98',
      allGuide: [{
          name: '必体验'
        },
        {
          name: '攻略'
        },
        {
          name: '游记'
        },
        {
          name: '问答'
        }
      ],
      ffs: {
        numbers: 0,
        ffsInfo: []
      }
    }
  },
  goScenicSpotDetail(e) {
    let name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/scenic_spot_detail/scenicSpotDetail?name=${name}`,
    })
  },
  // 当页面滚动时，改变顶部导航栏的可见度
  scroll(e) {
    let opacity = 0;
    if (e.detail.scrollTop < 60) {
      opacity = (e.detail.scrollTop / 160).toFixed(1);
    } else {
      opacity = 1;
    }
    this.data.navbarData.opacity = opacity;
    this.setData({
      navbarData: this.data.navbarData
    })
  },
  // 下拉加载
  bindDownLoad() {
    let part = 0;
    let all = 0;
    if (this.data.ishot) {
      // 待完善
    } else {
      if (this.data.mcurIndex === 0) {
        part = this.data.cur_view.length * 2;
        all = this.data.placeData.allGuide[this.data.mcurIndex].content[this.data.hlcurIndex].content.length;
      } else {
        part = this.data.cur_view.length;
        all = this.data.placeData.allGuide[this.data.mcurIndex].content.length;
      }

      if (part < all) {
        wx.showLoading({
          title: '正在加载'
        })
        setTimeout(() => {
          this.bitiyan(this.data.placeData)
          wx.hideLoading()
        }, 1000)
      } else {
        this.setData({
          showend: true
        })
      }
    }
  },
  selected_hl(e) {
    this.setData({
      hlcurIndex: e.target.dataset.hlindex,
      size: 0,
      showend: false
    })
    this.bitiyan(this.data.placeData)
  },
  selected_menu(e) {
    this.setData({
      mcurIndex: e.target.dataset.mindex,
      size: 0,
      showend: false
    })
    this.bitiyan(this.data.placeData)
  },
  // 热门城市的动画效果
  translate: function(i) {
    // 获取屏幕宽度来实现自适应
    let windowwidth = this.data.windowWidth;
    //动画的运行状态status[x轴偏移量,y轴偏移量,scale缩放倍数,opacity透明度]
    let status = [
      [170, -110, 0.8, 0.7],
      [210, -250, 0.7, 0.6],
      [10, -350, 0.6, 0.5],
      [-250, -300, 0.8, 0.7],
      [-300, -130, 0.9, 0.8],
      [0, 0, 1, 0.9]
    ];
    let x = 0,
      y = 0,
      scale = 0,
      opacity = 0;
    for (let j = 0; j < 6; j++) {
      let animationName = 'animation' + (j + 1);
      x = status[(i + j) % 6][0] / 750 * windowwidth;
      y = status[(i + j) % 6][1] / 750 * windowwidth;
      scale = status[(i + j) % 6][2];
      opacity = status[(i + j) % 6][3];
      this.animation.translate(x, y).scale(scale).opacity(opacity).step()
      this.setData({
        [animationName]: this.animation.export()
      })
    }
  },
  hotCityAnimation() {
    let i = 0;
    this.animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    })
    let that = this
    let anicontrol = this.data.anicontrol
    anicontrol = setInterval(function() {
      that.translate(i)
      if (i == 5) {
        i = -1;
      }
      i++;
    }, 3000)
    this.setData({
      anicontrol
    })
  },
  // 点击播放
  _play: function(e) {
    this.videoContext = wx.createVideoContext('myVideo', this)
    this.videoContext.play()
    let src = this.data.placeData.vlog[e.currentTarget.dataset.index].vedio;
    this.setData({
      src,
      on: true
    })
  },
  // 点击关闭
  _close() {
    this.videoContext.pause()
    this.setData({
      on: false
    })
  },
  // 获取天气
  getWeather: function(location) {
    console.log(location)
    let that = this;
    var e = {
      coord_type: "gcj02",
      output: "json",
      ak: 'syWOaGZoD9P7v7YgVF7xT08grOyMjI62',
      sn: "",
      timestamp: ""
    };
    e.location = location;
    wx.request({
      url: "https://api.map.baidu.com/telematics/v3/weather",
      data: e,
      header: {
        "content-type": "application/json"
      },
      method: "GET",
      success: function(t) {
        console.log(t)
        var a = t.data;
        var e = a.results,
          n = {};
        n.originalData = a;
        n.currentWeather = [];
        n.currentWeather[0] = {
          currentCity: e[0].currentCity,
          pm25: e[0].pm25,
          date: e[0].weather_data[0].date,
          temperature: e[0].weather_data[0].temperature,
          weatherDesc: e[0].weather_data[0].weather,
          wind: e[0].weather_data[0].wind
        }
        let curtem = n.currentWeather[0].date.slice(14, 17)
        let weatherPic = '/images/' + n.originalData.results[0].weather_data[0].dayPictureUrl.slice(44);
        that.setData({
          weather: n,
          curtem,
          weatherPic
        })
      }
    })
  },
  // 是否为热门城市
  isHotCity(placeData) {
    let ishot = placeData.isHot
    if (ishot) { //如果是 热门城市 获取天气信息
      this.getWeather(placeData.chName)
      this.hotCityAnimation()
    } else {
      let showDefault = this.data.showDefault;
      if (!showDefault)
        this.bitiyan(placeData)
    }
    this.data.navbarData.cityName = placeData.chName
    this.data.navbarData.backgroundColor = placeData.bgc
    let navbarData = this.data.navbarData
    this.setData({
      navbarData,
      show: true,
      ishot
    })
  },
  // 通过城市名字 获取城市数据
  getCityDataByName(cityname) {
    return new Promise((resolve, reject) => {
      let that = this
      wx.request({
        url: 'https://www.easy-mock.com/mock/5ca457f04767c3737055c868/example/mafengwo/china',
        success: (res) => {
          console.log(res)
          let placeData = [];
          placeData = res.data.data.china.filter(e => e.chName === cityname)[0] || [];
          if (placeData.length === 0) {
            placeData = that.data.defaultData;
            placeData.chName = cityname;
            console.log(placeData)
            that.setData({
              showDefault: true
            })
          } else {
            that.setData({
              showDefault: false
            })
          }
          wx.setStorageSync('placeData', placeData)
          that.setData({
            placeData
          })
          resolve(placeData)
        }
      })
    })
  },
  // 必体验
  bitiyan(data) {
    let newView = []
    let cur_view = [];
    let size = this.data.size;
    if (this.data.mcurIndex === 0) {
      newView.push(...data.allGuide[this.data.mcurIndex].content[this.data.hlcurIndex].content);
      size += 4;
      for (let i = 0; i < size; i++) {
        let temp = [];
        for (let j = 0; j < 2; j++) {
          if (newView.length != 0) {
            temp.push(newView.shift());
          }
        }
        cur_view.push(temp);
      }
    } else {
      newView.push(...data.allGuide[this.data.mcurIndex].content);
      size += 8;
      for (let i = 0; i < size; i++) {
        let temp = [];
        if (newView.length != 0) {
          temp.push(newView.shift());
        }
        cur_view.push(...temp);
      }
    }
    this.setData({
      size,
      cur_view,
    })
  },
  onLoad: function() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        let {
          windowWidth,
          windowHeight
        } = res;
        that.setData({
          windowWidth,
          windowHeight
        })
      }
    })
  },
  onShow() {
    wx.showLoading({
      title: '加载中',
      duration: 1000
    })
    let city = wx.getStorageSync('currentCity')
    this.getCityDataByName(city).then((val) => {
      this.isHotCity(val)
    })
  },
  onHide: function() {
    let anicontrol = this.data.anicontrol;
    clearInterval(anicontrol)
    this.setData({
      animation1: '',
      animation2: '',
      animation3: '',
      animation4: '',
      animation5: '',
      animation6: '',
      show: false,
      showend: false,
      mcurIndex: 0,
      hlcurIndex: 0,
      size: 0
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})