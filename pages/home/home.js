// pages/home/home.js
var wxbarcode=require("../../utils/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData:0,
    isShow:"",
    markers: [{
      
      id: 0,
      latitude: 30.297825,
      longitude: 120.132139,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 120.132139,
        latitude: 30.297825
      }, {
        longitude: 120.132139,
        latitude: 30.297825
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  bindShow:function(){
    var isShow=this.data.isShow
    if(isShow==""){
      this.setData({
        isShow:"bounced"
      })
    }else{
      this.setData({
        isShow:""
      })
    }
  },
  bindChange:function(e){
    this.setData({
      currentData:e.detail.current
    })
  },
  checkCurrent:function(e){
    if(this.data.currentData===e.target.dataset.current){
      return false
    }else{
      this.setData({
        currentData:e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxbarcode.barcode('barcode', '242121', 700, 200);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.canvasToTempFilePath({
      
      canvasId: "barcode",
      success: function(res) {
        console.log(res.tempFilePath)
      } 
    })
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