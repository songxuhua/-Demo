// pages/shop/shop.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:["All", "Sandwich", "FastFood", "Chinese"],
    curindex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置navigationTitle
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.initData();
  },
  initData:function() {
    let coupon = "COUPON";
    let nosc = "NO SC";
    let dct = "DCT";
    var styles = {
      "COUPON":"tagText third_tag",
      "NO SC":"two_tag tagText",
      "DCT":"one_tag tagText",
    }

    var arr = [];
    for (var i = 0; i < 15; i++) {
      var index  =  Math.random() * ((250) + 1);
      var inds = parseInt(index);
      var obj = {};
      var tags = [];
      obj["id"] = "" + i;
      obj["icon"] = "../imgs/xingdetail/malllogo_default.png";
      obj["name"] = "McDonald" + i;
      obj["sales"] = "Sales " + inds+"/Month";
      obj["time"] = (i * 10) + 1 + "min";
      obj["distance"] = inds +"m";
      if ( i %5 == 0) {
        obj["stars"] = [0];
      } else if (i%5 == 1) {
        obj["stars"] = [0,1];
      } else if (i%5 == 2) {
        obj["stars"] = [0, 1,2];
      } else if (i%5 == 3) {
        obj["stars"] = [0, 1,2,3];
      } else if (i%5 == 4) {
        obj["stars"] = [0, 1, 2, 3,4];
      }
      obj["starC"] = i % 5;

      if (i % 3 == 0) {
        tags.push(dct);
        tags.push(nosc);
        tags.push(coupon);
      } else if (i % 3 == 1) {
        tags.push(nosc);
      } else if (i % 3 == 2) {
        tags.push(coupon);
      }
      obj["tags"] = tags;
      obj["styles"] = styles;
   
      arr.push(obj);
    }


    this.setData({
      shops: arr
    });
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
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
    console.log(e.detail.currentTarget.id);

    this.setData({
      curindex: e.detail.currentTarget.id
    });
  }
})