// pages/component/navbar/navbar.js
var sliderWidth;
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth:0
  },
  attached() {
    this.dataInit();
    this.reloadOffset();
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    tabClick: function (e) {
      var myEventDetail = e // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption);
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    }, 
    dataInit: function () {
      let t = this.properties.tabs;
      sliderWidth = wx.getSystemInfoSync().windowWidth/t.length - 10; // 需要设置slider的宽度，用于计算中间位置
      this.setData({
        tabs: t
      });
    },
    reloadOffset:function() {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
            sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
            sliderWidth: sliderWidth
          });
        }
      });
    },
    
  }
})
