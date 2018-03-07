// page/view/membership/membership.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    packages: [
      {
        id: 1,
        price: 1,
        unit: '元/天',
        tip: '尝鲜价',
        desc: '手动变自动传播，开启您的移动互联智能销售时代'
      },
      {
        id: 2,
        price: 99,
        unit: '元/3月',
        tip: '试用',
        desc: '用户自动分层，足不出户，生意自动上门'
      },
      {
        id: 3,
        price: 365,
        unit: '元/年',
        tip: '营家',
        desc: '生意遍布全网，让4亿微信网民看见你的生意'
      },
      {
        id: 4,
        price: 365,
        unit: '元/年',
        tip: '营+续费95折',
        desc: '驾驭移动互联网络，真赢家，无惧未来！'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData();
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