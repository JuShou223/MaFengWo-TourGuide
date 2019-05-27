//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menu: [{
      name: "必体验"
    },
    {
      name: "攻略"
    },
    {
      name: "游记"
    },
    {
      name: "问答"
    }
    ],
    highlight: [{
      name: "景点",
      id: "jingdian"
    },
    {
      name: "购物",
      id: "gouwu"
    },
    {
      name: "美食",
      id: "meishi"
    },
    ],
    city: [
      {
        name: "南昌",
        eName: "nanchang",
        view: [{
          name: "滕王阁",
          ename: "TenWangGe",
          imgURL: "/images/nanchang0008.jpg",
          tourists: 1823,
          label: ["5A景区", "江南三大名楼之一", "按时大苏打飒飒"],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "佑民寺",
          imgURL: "/images/nanchang0003.jpg",
          tourists: 583,
          label: ["人文景点"],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 220
        },
        {
          name: "梅岭国家森林公园",
          imgURL: "/images/nanchang0006.jpg",
          tourists: 221,
          label: ["4A景区", "亲子游"],
          list_id: ["jingdian", "meishi"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "八一大桥",
          imgURL: "/images/nanchang0001.jpg",
          tourists: 223,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "南昌大学",
          imgURL: "/images/nanchang0002.jpg",
          tourists: 153,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "中山路步行街",
          imgURL: "/images/nanchang0004.jpg",
          tourists: 825,
          label: [],
          list_id: ["jingdian", "gouwu"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "青山湖",
          imgURL: "/images/nanchang0005.jpg",
          tourists: 423,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "万达广场",
          imgURL: "/images/nanchang0007.jpg",
          tourists: 723,
          label: [],
          list_id: ["jingdian", "gouwu"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        ],
        travel_guide: [{
          title: '南昌黄马银杏林攻略',
          read: 3036,
          collects: 50,
          imgurl: '/images/yingxinlin.jpeg'
        },
        {
          title: '南昌美食有什么',
          read: 8036,
          collects: 908,
          imgurl: '/images/meishi.jpg'
        },
        {
          title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
          read: 13036,
          collects: 1502,
          imgurl: '/images/nancheng.jpg'
        },
        {
          title: '南昌凤凰沟攻略',
          read: 4036,
          collects: 39,
          imgurl: '/images/fenghuanggou.jpg'
        }
        ],
      },
      {
        name: "北京",
        eName: "nanchang",
        view: [{
          name: "滕王阁",
          imgURL: "/images/nanchang0008.jpg",
          tourists: 1823,
          label: ["5A景区", "江南三大名楼之一", "按时大苏打飒飒"],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "佑民寺",
          imgURL: "/images/nanchang0003.jpg",
          tourists: 583,
          label: ["人文景点"],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 220
        },
        {
          name: "梅岭国家森林公园",
          imgURL: "/images/nanchang0006.jpg",
          tourists: 221,
          label: ["4A景区", "亲子游"],
          list_id: ["jingdian", "meishi"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "八一大桥",
          imgURL: "/images/nanchang0001.jpg",
          tourists: 223,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "南昌大学",
          imgURL: "/images/nanchang0002.jpg",
          tourists: 153,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "中山路步行街",
          imgURL: "/images/nanchang0004.jpg",
          tourists: 825,
          label: [],
          list_id: ["jingdian", "gouwu"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "青山湖",
          imgURL: "/images/nanchang0005.jpg",
          tourists: 423,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "万达广场",
          imgURL: "/images/nanchang0007.jpg",
          tourists: 723,
          label: [],
          list_id: ["jingdian", "gouwu"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        ],
        travel_guide: [{
          title: '南昌黄马银杏林攻略',
          read: 3036,
          collects: 50,
          imgurl: '/images/yingxinlin.jpeg'
        },
        {
          title: '南昌美食有什么',
          read: 8036,
          collects: 908,
          imgurl: '/images/meishi.jpg'
        },
        {
          title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
          read: 13036,
          collects: 1502,
          imgurl: '/images/nancheng.jpg'
        },
        {
          title: '南昌凤凰沟攻略',
          read: 4036,
          collects: 39,
          imgurl: '/images/fenghuanggou.jpg'
        }
        ],
      },
      {
        name: "上海",
        eName: "nanchang",
        view: [{
          name: "滕王阁",
          imgURL: "/images/nanchang0008.jpg",
          tourists: 1823,
          label: ["5A景区", "江南三大名楼之一", "按时大苏打飒飒"],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "佑民寺",
          imgURL: "/images/nanchang0003.jpg",
          tourists: 583,
          label: ["人文景点"],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 220
        },
        {
          name: "梅岭国家森林公园",
          imgURL: "/images/nanchang0006.jpg",
          tourists: 221,
          label: ["4A景区", "亲子游"],
          list_id: ["jingdian", "meishi"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "八一大桥",
          imgURL: "/images/nanchang0001.jpg",
          tourists: 223,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "南昌大学",
          imgURL: "/images/nanchang0002.jpg",
          tourists: 153,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "中山路步行街",
          imgURL: "/images/nanchang0004.jpg",
          tourists: 825,
          label: [],
          list_id: ["jingdian", "gouwu"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "青山湖",
          imgURL: "/images/nanchang0005.jpg",
          tourists: 423,
          label: [],
          list_id: ["jingdian"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        {
          name: "万达广场",
          imgURL: "/images/nanchang0007.jpg",
          tourists: 723,
          label: [],
          list_id: ["jingdian", "gouwu"],
          list_name: "景点玩乐",
          isCollect: false,
          collectors: 250
        },
        ],
        travel_guide: [{
          title: '南昌黄马银杏林攻略',
          read: 3036,
          collects: 50,
          imgurl: '/images/yingxinlin.jpeg'
        },
        {
          title: '南昌美食有什么',
          read: 8036,
          collects: 908,
          imgurl: '/images/meishi.jpg'
        },
        {
          title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
          read: 13036,
          collects: 1502,
          imgurl: '/images/nancheng.jpg'
        },
        {
          title: '南昌凤凰沟攻略',
          read: 4036,
          collects: 39,
          imgurl: '/images/fenghuanggou.jpg'
        }
        ],
      }
    ],
    hlcurIndex: 0,
    mcurIndex: 0,
    curDes: {
      name: "南昌",
      eName: "nanchang",
      view: [{
        name: "滕王阁",
        ename: "TenWangGe",
        imgURL: "/images/nanchang0008.jpg",
        tourists: 1823,
        label: ["5A景区", "江南三大名楼之一", "按时大苏打飒飒"],
        list_id: ["jingdian"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 250
      },
      {
        name: "佑民寺",
        imgURL: "/images/nanchang0003.jpg",
        tourists: 583,
        label: ["人文景点"],
        list_id: ["jingdian"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 220
      },
      {
        name: "梅岭国家森林公园",
        imgURL: "/images/nanchang0006.jpg",
        tourists: 221,
        label: ["4A景区", "亲子游"],
        list_id: ["jingdian", "meishi"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 250
      },
      {
        name: "八一大桥",
        imgURL: "/images/nanchang0001.jpg",
        tourists: 223,
        label: [],
        list_id: ["jingdian"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 250
      },
      {
        name: "南昌大学",
        imgURL: "/images/nanchang0002.jpg",
        tourists: 153,
        label: [],
        list_id: ["jingdian"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 250
      },
      {
        name: "中山路步行街",
        imgURL: "/images/nanchang0004.jpg",
        tourists: 825,
        label: [],
        list_id: ["jingdian", "gouwu"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 250
      },
      {
        name: "青山湖",
        imgURL: "/images/nanchang0005.jpg",
        tourists: 423,
        label: [],
        list_id: ["jingdian"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 250
      },
      {
        name: "万达广场",
        imgURL: "/images/nanchang0007.jpg",
        tourists: 723,
        label: [],
        list_id: ["jingdian", "gouwu"],
        list_name: "景点玩乐",
        isCollect: false,
        collectors: 250
      },
      ],
      travel_guide: [{
        title: '南昌黄马银杏林攻略',
        read: 3036,
        collects: 50,
        imgurl: '/images/yingxinlin.jpeg'
      },
      {
        title: '南昌美食有什么',
        read: 8036,
        collects: 908,
        imgurl: '/images/meishi.jpg'
      },
      {
        title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
        read: 13036,
        collects: 1502,
        imgurl: '/images/nancheng.jpg'
      },
      {
        title: '南昌凤凰沟攻略',
        read: 4036,
        collects: 39,
        imgurl: '/images/fenghuanggou.jpg'
      }
      ],
    },
    curid: "jingdian",
    cur_view: [],
    navbarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '', //导航栏 中间的标题
      backgroundColor: '#354a98', //'#354a98'
      city: '',
      opacity: 0,
      showMain: 1
    },

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
  },
  goScenicSpotDetail(e) {
    for (let i = 0; i < this.data.curDes.view.length; i++) {
      if (this.data.curDes.view[i].name === e.currentTarget.dataset.name) {
        let index = i;
        const {
          name,
          collectors,
          isCollect,
          label,
          list_name,
          tourists
        } = this.data.curDes.view[index];
        let city = this.data.curDes.name;
        console.log(label)
        const detail = {
          name,
          collectors,
          isCollect
        };
        let details = [];
        details.push(detail);
        wx.setStorageSync("details", details)
        wx.navigateTo({
          url: `/pages/scenic_spot_detail/scenicSpotDetail?name=${name}&collectors=${collectors}&isCollect=${isCollect}&label=${label}&list_name=${list_name}&tourists=${tourists}&city=${city}`,
        })
      }
    }
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

  selected_hl(e) {
    let curid = e.target.dataset.curid;
    let newView = this.data.curDes.view.filter(e => {
      return e.list_id.filter(e1 => e1 === curid).length > 0
    });
    let cur_view = [];
    let size = Math.ceil(newView.length / 2);
    for (let i = 0; i < size; i++) {
      let temp = [];
      for (let j = 0; j < 2; j++) {
        if (newView.length != 0) {
          temp.push(newView.shift());
        }
      }
      cur_view.push(temp);
    }
    this.setData({
      hlcurIndex: e.target.dataset.hlindex,
      curid: curid,
      cur_view: cur_view
    })
  },
  selected_menu(e) {
    this.setData({
      mcurIndex: e.target.dataset.mindex
    })
  },
  onLoad: function () {
    let newView = this.data.curDes.view.filter(e => {
      return e.list_id.filter(e1 => e1 === this.data.curid).length > 0
    });
    let cur_view = [];
    let size = Math.ceil(newView.length / 2);
    for (let i = 0; i < size; i++) {
      let temp = [];
      for (let j = 0; j < 2; j++) {
        if (newView.length != 0) {
          temp.push(newView.shift());
        }
      }
      cur_view.push(temp);
    }

    this.setData({
      cur_view,
    })
  },
  onShow() {
    const city = this.data.city;
    const details = wx.getStorageSync('details');
    const city_name = wx.getStorageSync('city_name');
    this.data.navbarData.city = city_name;
    const navbarData = this.data.navbarData;
    let collects = [];
    if (city_name) {
      for (let j = 0; j < city.length; j++) {
        if (city[j].name == city_name) {
          console.log(city[j])
          let curDes = city[j];
          this.setData({
            curDes,
            navbarData
          })
        }
      }
    }
    if (details) {
      for (let i = 0; i < this.data.curDes.view.length; i++) {
        for (let k = 0; k < details.length; k++) {
          if (this.data.curDes.view[i].name == details[k].name) {
            this.data.curDes.view[i].collectors = details[k].collectors;
            this.data.curDes.view[i].isCollect = details[k].isCollect;
            const curDes = this.data.curDes;
            this.setData({
              curDes
            })
          }
        }
        wx.removeStorageSync('details')
        if (this.data.curDes.view[i].isCollect) {
          let curDes_view = this.data.curDes.view[i];
          curDes_view.city_name = this.data.curDes.name;
          curDes_view.type = 'view';
          collects.push(curDes_view);
        }
      }
      if (collects.length != 0) {
        wx.setStorageSync('collects', collects)
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