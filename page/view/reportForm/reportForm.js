Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTotal: true,
    isYesterday: false,
    isSeven: false,
    isThiry: false
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
  // 切换tab
  switch: function(e) {
    console.log(e);
    var flag = e.target.dataset.flag;
    if(flag == "total") {
      this.setData({
        isTotal: true,
        isYesterday: false,
        isSeven: false,
        isThiry: false
      })
      return;
    } else if (flag == "yesterday") {
      this.setData({
        isTotal: false,
        isYesterday: true,
        isSeven: false,
        isThiry: false
      })
      return;
    } else if(flag == "seven") {
      this.setData({
        isTotal: false,
        isYesterday: false,
        isSeven: true,
        isThiry: false
      })
      return;
    } else if(flag == "thiry") {
      this.setData({
        isTotal: false,
        isYesterday: false,
        isSeven: false,
        isThiry: true
      })
      return;
    }
  }
})