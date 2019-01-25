// pages/home/home.js
var wxbarcode=require("../../utils/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    list:[
      {id:1,store:"INXX杭州嘉里中心店",img_url:"../img/icon.png",add:"杭州市下城区延安路385号3幢L105号单元",road:"4.3"},
      {id:2,store:"INXX杭州嘉里中心店",img_url:"../img/icon.png",add:"杭州市下城区延安路385号3幢L105号单元",road:"4.3"},
      {id:3,store:"INXX杭州嘉里中心店",img_url:"../img/icon.png",add:"杭州市下城区延安路385号3幢L105号单元",road:"4.3"}
    ],
    swiper_arr:[1,2,3,4,5,6],
    currentSwiper:0,
    istrue:false
  },
  
  swiperChange:function(e){
    this.setData({
      currentSwiper:e.detail.current,
    })
    if(e.detail.current==0){
      this.setData({
        istrue:false
      })
    }else{
      this.setData({
        istrue:true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxbarcode.barcode('barcode', '13322223333', 450, 100);
    wxbarcode.barcode('barcode1', '123456799', 450, 100);
    wxbarcode.barcode('barcode2', '123456799', 450, 100);
    wxbarcode.barcode('barcode3', '123456799', 450, 100);
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