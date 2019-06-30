// pages/scenic_spot_detail/scenicSpotDetail.js
import QQMapWx from '../../utils/map'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomData: {
      showCollect: 1, //是否显示收藏图标
      showCamera: 1, //是否显示照相图标
      showLike: 0, //是否展示顶图标
    },
    ffs: {
      numbers: 18374,
      ffsInfo: [{
        nickName: '奥特曼的小怪兽',
        avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3914950518,3569645197&fm=27&gp=0.jpg',
        article: [{
          pictures: [
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
          ],
          picture: "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: '狮子座',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=4042762212,1023525635&fm=11&gp=0.jpg',
        article: [{
          pictures: [
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
            "http://b2-q.mafengwo.net/s7/M00/0C/1F/wKgB6lQuPwGAH1ymAApW0-HjUnw93.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
          ],
          picture: "http://n3-q.mafengwo.net/s11/M00/DA/E6/wKgBEFq5DJOAWtv6ACBmBZouDgI66.jpeg?imageMogr2%2Fthumbnail%2F%21310x175r%2Fgravity%2FCenter%2Fcrop%2F%21310x175%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: 'Anna',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=274485421,2339171068&fm=26&gp=0.jpg',
        article: [{
          picture: "http://n1-q.mafengwo.net/s12/M00/EA/AB/wKgED1vx-2qAc53NABXtpXKU2Rg04.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: 'Izzet Lee',
        avatar: 'http://img3.imgtn.bdimg.com/it/u=1264890844,123596423&fm=11&gp=0.jpg',
        article: [{
          picture: "http://p1-q.mafengwo.net/s12/M00/EA/AB/wKgED1vx-2qAVBTWABIEhcXLIrU09.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: 'Luna 浩子',
        avatar: 'http://img0.imgtn.bdimg.com/it/u=3880050542,3264223508&fm=11&gp=0.jpg',
        article: [{
          picture: "http://n4-q.mafengwo.net/s10/M00/EA/FE/wKgBZ1h1nKuAPe1-AA17frmBebI11.jpeg?imageMogr2%2Fthumbnail%2F%21310x233r%2Fgravity%2FCenter%2Fcrop%2F%21310x233%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: '看着影子散步',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=4031695670,834339399&fm=11&gp=0.jpg',
        article: [{
          picture: "http://b1-q.mafengwo.net/s10/M00/A3/2E/wKgBZ1hyJtiAfMulAAOUotvC9Ko91.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: '扎堆在香港',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=474777395,1855194996&fm=11&gp=0.jpg',
        article: [{
          picture: "http://n4-q.mafengwo.net/s11/M00/83/99/wKgBEFqpKnyARZbaACDYiknenGw83.jpeg?imageMogr2%2Fthumbnail%2F%21310x175r%2Fgravity%2FCenter%2Fcrop%2F%21310x175%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: '摄影师 Shinee',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=4134727716,3620945345&fm=11&gp=0.jpg',
        article: [{
          picture: "http://b3-q.mafengwo.net/s10/M00/ED/FA/wKgBZ1lMFR-AboA6ABpEuB5Tpzo50.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: '读行',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=166049493,1921548523&fm=11&gp=0.jpg',
        article: [{
          picture: "http://n4-q.mafengwo.net/s10/M00/67/3F/wKgBZ1lhqzOAc9OpAAc-_fY7qME99.jpeg?imageMogr2%2Fthumbnail%2F%21310x207r%2Fgravity%2FCenter%2Fcrop%2F%21310x207%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      {
        nickName: '路人甲',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=1925690571,2025595273&fm=11&gp=0.jpg',
        article: [{
          picture: "http://p4-q.mafengwo.net/s10/M00/6C/B3/wKgBZ1lhuAmAVSH5AAc4KzKzqDQ56.jpeg?imageMogr2%2Fthumbnail%2F%21310x175r%2Fgravity%2FCenter%2Fcrop%2F%21310x175%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11",
          content: "在 江西 的最后一天，今天的目标，是赫赫有名的滕王阁，朝圣八一 南昌 起义纪念馆。“落霞与孤鹜齐飞，秋水共长天一色”只要上过学的 中国 人，都听过这两句诗词。它出自名篇《滕王阁序》据说王勃创作这一千古名篇的时候，并没有见过滕王阁。24岁的王勃，在去看望父亲的路上，被邀请参加洪州都督阎伯屿的宴会。这个宴会本事阎都督借机向众人吹捧自己女婿而办，谁知却成了王勃一生最闪耀的舞台。阎都督在宴会上邀请王勃作序文，可没料王勃没有推辞，立马下笔成章写出了千古雄文《滕王阁序》。牛不牛？凭空想象成就千古名篇tip：素有“ 西江 第一楼”之誉的滕王阁，位于 南昌 市 西北 部沿江路赣江东岸。 江南 三 大名 楼之首，始建于唐朝永徽四年。滕王阁因唐太宗李世民之弟——李元婴始建而得名。始建于唐朝，唐，宋，元，明，清，都曾有建筑，但每朝每代修建的滕王阁，都有烧毁屡毁屡建。这个景点是要门票的，不过你如果能整篇把滕王阁记背下来可以免票。现在的楼是重建的，而且是仿宋建筑。阁前广场的地面嵌着一幅巨大的八卦图形。这个建筑体系堪称宏伟大气。滕王阁的文物藏品不错，还是值得推荐的，不过毕竟是80年代设计复原的，所以建筑还是有缺陷的。不过来此地仍是人们来 南昌 的必打卡之地，来看滕王阁，感受一下“落霞与孤鹜齐飞，秋水共长天一色”的壮美，也是一件非常有仪式感的事情。主阁从外面看是三层带回廊的建筑，其实它里面还有三个暗层和一个设备层，加上两层底座，一共有九层。"
        }]
      },
      ]
    },
    content: [{
      title: '南昌黄马银杏林攻略',
      read: 3036,
      collects: 50,
      author: {
        nickName: 'Izzet Lee',
        avatar: 'http://img3.imgtn.bdimg.com/it/u=1264890844,123596423&fm=11&gp=0.jpg'
      },
      date: '2019-02-15',
      imgurl: 'https://b4-q.mafengwo.net/s12/M00/9B/1E/wKgED1wTsnmAT7XPABCfD7xehMY73.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '南昌美食有什么',
      read: 8036,
      collects: 908,
      author: {
        nickName: '看着影子散步',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=4031695670,834339399&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s12/M00/61/D4/wKgED1wmV7GAKEahAAwtBM6i4GY09.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
      read: 13036,
      collects: 1502,
      author: {
        nickName: '扎堆在香港',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=474777395,1855194996&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b4-q.mafengwo.net/s7/M00/B0/A0/wKgB6lP1PZKAMVy5AAQnXdTFXTU06.jpeg?imageMogr2%2Fthumbnail%2F%21185x130r%2Fgravity%2FCenter%2Fcrop%2F%21185x130%2Fquality%2F100'
    },
    {
      title: '南昌凤凰沟攻略',
      read: 4036,
      collects: 39,
      author: {
        nickName: '路人甲',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=1925690571,2025595273&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s13/M00/96/15/wKgEaVzFFuuAXo75AAyTnEi-QzQ24.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '南昌黄马银杏林攻略',
      read: 3036,
      collects: 50,
      author: {
        nickName: 'Izzet Lee',
        avatar: 'http://img3.imgtn.bdimg.com/it/u=1264890844,123596423&fm=11&gp=0.jpg'
      },
      date: '2019-02-15',
      imgurl: 'https://b4-q.mafengwo.net/s12/M00/9B/1E/wKgED1wTsnmAT7XPABCfD7xehMY73.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '南昌美食有什么',
      read: 8036,
      collects: 908,
      author: {
        nickName: '看着影子散步',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=4031695670,834339399&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s12/M00/61/D4/wKgED1wmV7GAKEahAAwtBM6i4GY09.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
      read: 13036,
      collects: 1502,
      author: {
        nickName: '扎堆在香港',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=474777395,1855194996&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b4-q.mafengwo.net/s7/M00/B0/A0/wKgB6lP1PZKAMVy5AAQnXdTFXTU06.jpeg?imageMogr2%2Fthumbnail%2F%21185x130r%2Fgravity%2FCenter%2Fcrop%2F%21185x130%2Fquality%2F100'
    },
    {
      title: '南昌凤凰沟攻略',
      read: 4036,
      collects: 39,
      author: {
        nickName: '路人甲',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=1925690571,2025595273&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s13/M00/96/15/wKgEaVzFFuuAXo75AAyTnEi-QzQ24.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '南昌黄马银杏林攻略',
      read: 3036,
      collects: 50,
      author: {
        nickName: 'Izzet Lee',
        avatar: 'http://img3.imgtn.bdimg.com/it/u=1264890844,123596423&fm=11&gp=0.jpg'
      },
      date: '2019-02-15',
      imgurl: 'https://b4-q.mafengwo.net/s12/M00/9B/1E/wKgED1wTsnmAT7XPABCfD7xehMY73.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '南昌美食有什么',
      read: 8036,
      collects: 908,
      author: {
        nickName: '看着影子散步',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=4031695670,834339399&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s12/M00/61/D4/wKgED1wmV7GAKEahAAwtBM6i4GY09.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
      read: 13036,
      collects: 1502,
      author: {
        nickName: '扎堆在香港',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=474777395,1855194996&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b4-q.mafengwo.net/s7/M00/B0/A0/wKgB6lP1PZKAMVy5AAQnXdTFXTU06.jpeg?imageMogr2%2Fthumbnail%2F%21185x130r%2Fgravity%2FCenter%2Fcrop%2F%21185x130%2Fquality%2F100'
    },
    {
      title: '南昌凤凰沟攻略',
      read: 4036,
      collects: 39,
      author: {
        nickName: '路人甲',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=1925690571,2025595273&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s13/M00/96/15/wKgEaVzFFuuAXo75AAyTnEi-QzQ24.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '南昌黄马银杏林攻略',
      read: 3036,
      collects: 50,
      author: {
        nickName: 'Izzet Lee',
        avatar: 'http://img3.imgtn.bdimg.com/it/u=1264890844,123596423&fm=11&gp=0.jpg'
      },
      date: '2019-02-15',
      imgurl: 'https://b4-q.mafengwo.net/s12/M00/9B/1E/wKgED1wTsnmAT7XPABCfD7xehMY73.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '南昌美食有什么',
      read: 8036,
      collects: 908,
      author: {
        nickName: '看着影子散步',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=4031695670,834339399&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s12/M00/61/D4/wKgED1wmV7GAKEahAAwtBM6i4GY09.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    },
    {
      title: '我眼中的南昌：有情、有义、有玩、有展、有味道',
      read: 13036,
      collects: 1502,
      author: {
        nickName: '扎堆在香港',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=474777395,1855194996&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b4-q.mafengwo.net/s7/M00/B0/A0/wKgB6lP1PZKAMVy5AAQnXdTFXTU06.jpeg?imageMogr2%2Fthumbnail%2F%21185x130r%2Fgravity%2FCenter%2Fcrop%2F%21185x130%2Fquality%2F100'
    },
    {
      title: '南昌凤凰沟攻略',
      read: 4036,
      collects: 39,
      author: {
        nickName: '路人甲',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=1925690571,2025595273&fm=11&gp=0.jpg'
      },
      imgurl: 'https://b2-q.mafengwo.net/s13/M00/96/15/wKgEaVzFFuuAXo75AAyTnEi-QzQ24.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100'
    }
    ],
    hotGuide: [{
      type: '攻略',
      title: '不可错过的十种体验',
      read: 19815,
      collects: 12000,
      imgurl: '/images/yingxinlin.jpeg'
    },
    {
      type: '游记',
      title: '本地人带你吃美食',
      read: 188152,
      collects: 9000,
      imgurl: '/images/yingxinlin.jpeg'
    },
    {
      type: '攻略',
      title: '远离人群的慢香港',
      read: 49815,
      collects: 1000,
      imgurl: '/images/yingxinlin.jpeg'
    },
    {
      type: '攻略',
      title: '迪士尼哪些项目最值得玩',
      read: 188815,
      collects: 1000,
      imgurl: '/images/yingxinlin.jpeg'
    },
    {
      type: '收藏',
      title: '香港签注攻略',
      read: 19815,
      collects: 608,
      imgurl: '/images/yingxinlin.jpeg'
    }
    ],
    navbarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '马蜂窝旅游', //导航栏 中间的标题
      backgroundColor: "#fff",
      showMian: 0,
    },
    placeData: {},
    vIndex: 0,
    mcurIndex: 0,
    hlcurIndex: 0,
    height: app.globalData.height * 2 + 20,
  },
  openMap() {
    let that = this;
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        const qqMapSdk = new QQMapWx({
          key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
        })
        qqMapSdk.geocoder({
          address : "江西省南昌市东湖区仿古街58号",
          success: (res) => {
            wx.openLocation({
              latitude: res.result.location.lat,
              longitude: res.result.location.lng
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getinfo(name){
    let collectData = wx.getStorageSync('collectData') || [];
    if (collectData.filter(e => e.name === name).length > 0) {
      this.setData({
        placeData: collectData.filter(e => e.name === name)[0]
      })
    } else {
      let placeData = wx.getStorageSync('placeData')
      let view = placeData.allGuide[0].content.map(e => e.content)
      let newView = []
      for (let i = 0; i < view.length; i++) {
        newView.push(...view[i])
      }
      this.setData({
        placeData: newView.find(e => e.name === name)
      })
    }
    this.setBottom();
  },
  setBottom(){
    this.data.bottomData.placeData = this.data.placeData;
    let bottomData = this.data.bottomData;
    this.setData({
      bottomData
    })
  },
  onLoad: function(options) {
    let name = options.name;
    this.getinfo(name)
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
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    // let detail = wx.getStorageSync('detail');

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
  // 功能待完善
  toulan() {
    app.toulan()
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