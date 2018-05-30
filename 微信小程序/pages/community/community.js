// pages/community/community.js

const typeIdAll = "1";
const typeIdVideo = "41";
const typeIdImage = "10";
const typeIdText = "29";
const typeIdAudio = "31";
const episodesUrl = "http://api.budejie.com/api/api_open.php?a=list&c=data&type=";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部", "视频", "图片", "段子", "声音"],
    allValues: [],
    videoValues: [],
    picValues: [],
    textValues: [],
    audioValues: [],
    pages: {
      [typeIdAll]: 1,
      [typeIdVideo]: 1,
      [typeIdImage]: 1,
      [typeIdText]: 1,
      [typeIdAudio]: 1
    },
    maxTime: {
      [typeIdAll]: "",
      [typeIdVideo]: "",
      [typeIdImage]: "",
      [typeIdText]: "",
      [typeIdAudio]: ""
    },
    curindex: 0,
    scrollHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取屏高(系统会自动去掉导航栏和tabbar)
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.fetchDatasByType(typeIdAll);
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
  myEventListener: function (e) {
    let index = e.detail.currentTarget.id;
    this.fetchDatas(index);

    this.setData({
      curindex: e.detail.currentTarget.id
    });
  },
  fetchDatas: function (index) {
    this.fetchDatasByType(this.convertType(index));
  },
  fetchDatasByType: function (stype) {
    wx.showLoading({
      title: '请稍后',
    })
    var ws = this;
    let url = episodesUrl + stype;
    wx.request({
      url: url,
      success: function (res) {
        // hidden框
        setTimeout(function () {
          wx.hideLoading();
        }, 1000);
        //设值
        ws.data.maxTime[stype] = res.data.info.maxtime;
        ws.setvaluess(res.data.list, stype,false);
        ws.data.pages[stype] = 2;

      },
      fail: function (res) {
        //hidden框
        setTimeout(function () {
          wx.hideLoading();
        }, 1000);
      }
    })

  },
  fetchMoreData: function (index) {
    wx.showLoading({
      title: '请稍后',
    })
    let stype = this.convertType(index);


    var ws = this;
    let url = episodesUrl + stype + "&page=" + this.data.pages[stype] + "&maxtime=" + this.data.maxTime[stype];
    wx.request({
      url: url,
      success: function (res) {
        // hidden框
        setTimeout(function () {
          wx.hideLoading();
        }, 1000);
        //设值
        ws.data.maxTime[stype] = res.data.info.maxtime;
        ws.setvaluess(res.data.list, stype,true);
        ws.data.pages[stype]++;

      },
      fail: function (res) {
        //hidden框
        setTimeout(function () {
          wx.hideLoading();
        }, 1000);
      }
    })

  },
  loadMoreData: function () {
    this.fetchMoreData(this.data.curindex);
  },
  setvaluess(list, stype,isMore) {
     var clist = list;
    if (stype == typeIdAll) {
      if(isMore) {
         clist = this.data.allValues.concat(list);
      }
      this.setData({
        allValues: clist
      })
    } else if (stype == typeIdVideo) {
      if (isMore) {
        clist = this.data.videoValues.concat(list);
      }

      this.setData({
        videoValues: clist
      })
    } else if (stype == typeIdImage) {
      if (isMore) {
        clist = this.data.picValues.concat(list);
      }
      this.setData({
        picValues: clist
      })
    } else if (stype == typeIdText) {
      if (isMore) {
         clist = this.data.textValues.concat(list);
      }
      this.setData({
        textValues: clist
      })
    } else if (stype == typeIdAudio) {
      if (isMore) {
        clist = this.data.audioValues.concat(list);
      }
      this.setData({
        audioValues: clist
      })
    }
  }
  ,
  convertType: function (index) {
    let str = "";
    if (index == 0) {
      str = typeIdAll;
    } else if (index == 1) {
      str = typeIdVideo;
    } else if (index == 2) {
      str = typeIdImage;
    } else if (index == 3) {
      str = typeIdText;
    } else if (index == 4) {
      str = typeIdAudio;
    }
    return str;
  },
  videoPlay: function (even) {
    this.stopVideoAndAudio();
    this.videoContext = wx.createVideoContext(even.target.id, this);
  }
  ,
  audioPlay: function (even) {
    this.stopVideoAndAudio()
    this.audioContext = wx.createAudioContext(even.target.id, this);
  }
  ,
  stopVideoAndAudio: function () {
    // 停止上一个音频的播放
    if (this.audioContext) {
      this.audioContext.pause();

    }

    //停止上一个视频的播放
    if (this.videoContext) {
      this.videoContext.pause();
      this.videoContext.seek(0);
    }

  },
  praise: function () {
    wx.showToast({
      icon: 'none',
      title: '点赞',
    })
  },
  unPraise: function () {
    wx.showToast({
      icon: 'none',
      title: '倒',
    })

  },
  share: function () {
    wx.showToast({
      icon: 'none',
      title: '转发',
    })
  },

  comment: function () {
    wx.showToast({
      icon: 'none',
      title: '评论',
    })

  },

})