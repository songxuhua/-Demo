// pages/attendtion/attendtion.js
const carUrl = "http://api.budejie.com/api/api_open.php?a=category&c=subscribe"
const attendUrl = "http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id="

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categroys: [],
    attendLists: [],
    curCategoryid:"",
    isNoMore:true,
    curSelectIndex:0,
    page:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchCats();
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
  fetchCats: function () {
    wx.showLoading({
      title: '请稍后',
    })
    let ws = this;
    wx.request({
      url: carUrl,
      success: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: '加载成功',
        })
        let list = res.data.list;
        ws.setData({
          categroys:list
        });
        ws.fetchAttends();
      },
      fail: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: '加载失败',
        })
      },
      complete: function (res) {
      },
    })
  },
  fetchAttends:function() {
    this.data.curCategoryid = this.data.categroys[this.data.curSelectIndex].id;
    this.requestAttends(false,1);
  },
  fetchMoreAttends:function() {
    this.data.page++;
    this.requestAttends(true,this.data.page);
  },
  requestAttends:function(isMore,page) {
    wx.showLoading({
      title: '请稍后',
    })
    let ws = this;
    let urs = attendUrl + this.data.curCategoryid + "&page=" + page;
    wx.request({
      url: urs,
      success: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: '加载成功',
        })
        if (!isMore) {
          let list = ws.data.attendLists;
          list.splice(0,list.length);
        }
        let list = ws.data.attendLists.concat(res.data.list);
        ws.setData({
          attendLists: list
        });

      },
      fail: function (res) {
        wx.hideLoading();
        wx.showToast({
          title: '加载失败',
        })
      },
      complete: function (res) {
      },
    })
  },
  catSelected:function(e) {
    this.setData({
      curSelectIndex: e.currentTarget.dataset.index
    });
    this.fetchAttends();
  },
})