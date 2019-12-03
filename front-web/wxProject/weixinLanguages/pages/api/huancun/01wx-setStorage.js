// pages/api/huancun/01wx-setStorage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju01:"",
    shuju02:""
  },
  /** 设置数据缓存 */
  myset1:function(){
    wx.setStorage({
      key: 'key01',
      data: '测试数据01',
      success:function(res)
      {
        console.log("保存成功")
      }
    })
  },
  /** 设置数据缓存 */
  myset2: function () {
    wx.setStorage({
      key: 'key02',
      data: '测试数据02',
      success: function (res) {
        console.log("保存成功")
      }
    })
  },  

  /** 获取数据缓存 */
  myget1:function(){ 
    var that=this;
    wx.getStorage({
      key: 'key01',
      success: function(res) {
        console.log(res.data)
        that.setData({
          shuju02: res.data
        })
      },
    })
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

  }
})