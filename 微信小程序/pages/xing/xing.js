// pages/xing/xing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      { imgUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3617736393,2416115152&fm=27&gp=0.jpg", jumpUpUrl: "https://www.baidu.com" },
      { imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524733369982&di=fb32902f66ee33185f1b669c88d5e3e5&imgtype=0&src=http%3A%2F%2Fimgphoto.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20160318%2Feca86bd9dc471855d7c318.jpg", jumpUpUrl: "https://www.baidu.com" }, { imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524733369982&di=f24b47864bc78ac2b7f0684ddf6f7512&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2016%2F205%2F50%2FBPBF1DX6FF97.jpg", jumpUpUrl: "https://www.baidu.com" },
      { imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524733528613&di=b7605d74f5d52d75c78bd2e21c3cff5c&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3397431729%2C114951020%26fm%3D214%26gp%3D0.jpg", jumpUpUrl: "https://www.baidu.com" }

    ],
    catergorys: [
      { cat_name: "Food", cat_icon: "../imgs/xing/lazy_cateory_food.png", url: "../shop/shop?title=Food" },
      { cat_name: "Grocery", cat_icon: "../imgs/xing/lazy_cateory_grocery.png", url: "../shop/shop?title=Grocery" },
      { cat_name: "Drink", cat_icon: "../imgs/xing/lazy_cateory_drink.png", url: "../shop/shop?title=Drink" },
      { cat_name: "Other", cat_icon: "../imgs/xing/lazy_cateory_other.png", url: "../shop/shop?title=Other" }
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = [];
    for (var i = 0 ;i < 5;i++) {
      var obj = {};
      obj["userid"] = "" + i;
      obj["user_url"] = "../imgs/xing/lazy_cateory_food.png";
      obj["user_name"] = "Feilicia" + i;
      obj["content"] = "I'm in McDonald" + i + " near the school";
      obj["address"] = "McDonald" + i;
      obj["time"] = (i * 10) + 1 + "s ago";

      arr.push(obj);
    }
    this.setData({
      items:arr
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

  },
  loadMoreData:function() {
    wx.showToast({
      title: 'loadMoreData',
      icon: 'none',
      image: '',
      duration: 0,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})