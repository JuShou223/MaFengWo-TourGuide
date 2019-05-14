//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menu:[
      {name:"必体验"},
      {name:"攻略"},
      {name:"游记"},
      {name:"问答"}
      ],
    highlight:[
      {name:"景点",id:"jingdian"},
      { name: "购物",id:"gouwu" },
      { name: "美食",id:"meishi"},
    ],
    view:[
      {
        name: "滕王阁",
        imgURL: "/images/nanchang0008.jpg",
        tourists: 1823,
        label: ["5A景区", "江南三大名楼之一","按时大苏打飒飒"],
        list_id: ["jingdian"]
      },
      {
        name: "佑民寺",
        imgURL: "/images/nanchang0003.jpg",
        tourists: 583,
        label: ["人文景点"],
        list_id: ["jingdian"]
      },
      {
        name: "梅岭国家森林公园",
        imgURL: "/images/nanchang0006.jpg",
        tourists: 221,
        label: ["4A景区", "亲子游"],
        list_id: ["jingdian"]
      },
      {
        name:"八一大桥",
        imgURL:"/images/nanchang0001.jpg",
        tourists:223,
        label:[],
        list_id:["jingdian"]
      },
      {
        name: "南昌大学",
        imgURL: "/images/nanchang0002.jpg",
        tourists: 153,
        label: [],
        list_id: ["jingdian"]
      },
      {
        name: "中山路步行街",
        imgURL: "/images/nanchang0004.jpg",
        tourists: 825,
        label: [],
        list_id: ["jingdian","gouwu"]
      },
      {
        name: "青山湖",
        imgURL: "/images/nanchang0005.jpg",
        tourists: 423,
        label: [],
        list_id: ["jingdian"]
      },
      {
        name: "万达广场",
        imgURL: "/images/nanchang0007.jpg",
        tourists:723,
        label: [],
        list_id: ["jingdian","gouwu"]
      },
    ],
    city:'南昌',
    hlcurIndex:0,
    mcurIndex:0,
    curid:"jingdian",
    cur_view: [],
    navbarData: {
      showCapsule:0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '', //导航栏 中间的标题
      backgroundColor: '#354a98',//'#354a98'
      city:'南昌',
      opacity:0,
      showMain:1
    },

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20 ,   
  },
  scroll(e){
    let opacity=0;
    if (e.detail.scrollTop < 80 && e.detail.scrollTop>10){
      opacity = (e.detail.scrollTop/160).toFixed(1);
    } else if (e.detail.scrollTop>80){
      opacity=1;
    }
    this.data.navbarData.opacity=opacity;
    this.setData({
      navbarData:this.data.navbarData
    })
  },
  selected_hl(e){
    let curid = e.target.dataset.curid;
    let newView=this.data.view.filter(e=>{return e.list_id.filter(e1=>e1===curid).length>0});
    let cur_view=[];
    let size = Math.ceil(newView.length / 2);
    for(let i=0;i<size;i++){
      let temp = [];
      for(let j=0;j<2;j++){
        if(newView.length!=0){
          temp.push(newView.shift());
        }
      }
      cur_view.push(temp);
    }
    console.log(cur_view);
    this.setData({
      hlcurIndex:e.target.dataset.hlindex,
      curid:curid,
      cur_view:cur_view
    })
  },
  selected_menu(e){
    this.setData({
      mcurIndex: e.target.dataset.mindex
    })
  },
  onLoad: function () {
    let newView = this.data.view.filter(e => { return e.list_id.filter(e1 => e1 === this.data.curid).length > 0 });
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
      cur_view:cur_view
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
