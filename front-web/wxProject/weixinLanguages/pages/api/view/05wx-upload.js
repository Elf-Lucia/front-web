// pages/api/jichu/05wx-uploadFile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jieguo: "",
    jieguo2: "",
    jieguo3: ""
  },
  myimg: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        // 返回选定照片的本地文件路径列表,tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          jieguo: tempFilePaths, //不是用res.data
          jieguo2: tempFilePaths[0]
        })

        wx.uploadFile({
          url: 'https://www.yaoyiwangluo.com/up/ajax_upload.asp', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file1',
          success: function (res) {
            //const data = res.data
            //do something
            that.setData({ jieguo3: res.data })
          },
          fail: function (res) {
            console.log(res)
          }
        })

      }
    })
  }
  ,

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