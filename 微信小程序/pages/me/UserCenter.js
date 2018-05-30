// pages/me/UserCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{ "image": "http://pic.qqtn.com/file/2013/2015-5/2015051514475586835.png", "name": "审帖" },
    { "image": "http://up.qqya.com/allimg/201710-t/17-101804_132321.jpg", "name": "排行榜" },
    { "image": "http://img.jiqie.com/z/0/5/1046nd.jpg", "name": "我的收藏" },
    { "image": "http://imgsrc.baidu.com/forum/w=580/sign=1588b7c5d739b6004dce0fbfd9503526/7bec54e736d12f2eb97e1a464dc2d56285356898.jpg", "name": "内容贡献榜" },
    { "image": "http://www.qqzhi.com/uploadpic/2015-01-15/055123530.jpg", "name": "动态视频桌面" },
    { "image": "http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg", "name": "每日排行" },
    { "image": "http://img1.2345.com/duoteimg/qqTxImg/2013/12/ns/29-020632_476.jpg", "name": "随机穿越" },
    { "image": "http://www.qqzhi.com/uploadpic/2014-10-11/004043976.jpg", "name": "搜索" },
    { "image": "http://img2.touxiang.cn/file/20160905/2e12816e61e23d2a0467d61956e73e14.jpg", "name": "游戏大厅" },
    { "image": "http://www.ld12.com/upimg358/allimg/c160118/14530350502R40-493496.jpg", "name": "我的帖子" },
    { "image": "http://file.popoho.com/2016-05-19/e6119b9cc577b8ffefa124c7445aa357.jpg", "name": "看小说" },
    { "image": "http://pic.guijj.com/c/217_6.jpg", "name": "热门小说" },
    { "image": "http://p4.gexing.com/G1/M00/6F/D1/rBACE1OIP8XTNNz7AAASji9YW6w872_200x200_3.jpg?recache=20131108", "name": "彩铃" },
    { "image": "http://img1.2345.com/duoteimg/qqTxImg/2013/12/ns_2/17-061107_358.jpg", "name": "意见反馈" },
    { "image": "http://up.enterdesk.com/edpic/77/4b/31/774b31d8abc650ae3cc6fbd8e4d92462.jpg", "name": "美女直播" },
    { "image": "http://img1.touxiang.cn/uploads/20121212/12-055808_368.jpg", "name": "下载视频" },
    { "image": "http://www.pig66.com/uploadfile/2017/0509/20170509094020407.jpg", "name": "百思交友" },
    { "image": "http://www.feizl.com/upload2007/2015_01/1501031935730412.jpg", "name": "百思会员" },
    { "image": "http://up.qqya.com/allimg/201710-t/17-101801_39316.jpg", "name": "游戏会员" },
    { "image": "http://p4.gexing.com/G1/M00/04/36/rBACE1O3hOWAVi8HAAAT6UdEquE359_200x200_3.jpg?recache=20131108", "name": "头条新闻" },
    { "image": "http://www.qqzhi.com/uploadpic/2014-05-07/074700432.jpg", "name": "联通免流量" },
    { "image": "http://www.qqzhi.com/uploadpic/2014-09-25/142357966.jpg", "name": "大天使" },
    { "image": "http://www.52zero.net/image/attachment/portal/201605/02/145017jz1injnxx4lgn4is.jpg", "name": "呆呆忍者村" },
    { "image": "http://tx.haiqq.com/uploads/allimg/170429/0316112b6-6.jpg", "name": "产品体验官" },
    { "image": "http://img2.imgtn.bdimg.com/it/u=856271957,1144175040&fm=214&gp=0.jpg", "name": "大主宰" },
    { "image": "http://www.qqzhi.com/uploadpic/2014-10-12/172909910.jpg", "name": "黑暗之王" },
    { "image": "http://img1.touxiang.cn/uploads/20120825/25-020525_165.jpg", "name": "百思帮派" }],
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
  
  },
  clickItem:function(e) {
    console.log(e);
    let s = "点击了第"+ e.currentTarget.dataset.index +"个"
   wx.showToast({
     title: s,
     icon:'none'
   })
  }
})