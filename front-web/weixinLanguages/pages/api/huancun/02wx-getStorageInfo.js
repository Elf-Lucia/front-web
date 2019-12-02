// pages/api/huancun/02wx-getStorageInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  myget1:function(){
    wx.getStorageInfo({
      success: function (res) {
        console.log("当前 storage 中所有的 key:"+res.keys)
        console.log("当前占用的空间大小, 单位 KB:"+res.currentSize)
        console.log("限制的空间大小，单位 KB:"+res.limitSize)
      }
    })
  },
  myclear:function(){
    wx.clearStorage()
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