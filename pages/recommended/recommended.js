// pages/recommended/recommended.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeH:"",
    isShow:"",
    countHour:0,
    countMinute:0,
    countSecond:0,
    aa:"",
    bb:"",
    
    list:[
      //  {id:1,img_url:"../../utils/img/11.jpg",graphicsP:1,like:false,num:93,collection:false},
      //  {id:2,img_url:"../../utils/img/11.jpg",graphicsP:2,like:false,num:20,collection:false},
      //  {id:3,img_url:"../../utils/img/11.jpg",graphicsP:3,like:false,num:28,collection:false},
      //  {id:4,img_url:"../../utils/img/11.jpg",graphicsP:4,like:false,num:4,collection:false},
      //  {id:5,img_url:"../../utils/img/11.jpg",graphicsP:5,like:false,num:56,collection:false},
      //  {id:6,img_url:"../../utils/img/11.jpg",graphicsP:9,like:false,num:27,collection:false},
    ],
  },
  onPageScroll:function(e){
    var that=this;
    //console.log(e.scrollTop)
    if(e.scrollTop>100){
      that.setData({
        aa:"sweep1",
        bb:"camera2"
      })
    }else{
      that.setData({
        aa:"",
        bb:""
      })
    }
  },
  /*滚动穿透 */
  preventD:function(){},
  /*评论弹框 */
  setBounced:function(){
    var that=this;
    that.setData({
      changeH:"changeHeight"
    })
  },
  /*handShow:function(){
    var aa=this.data.aa;
    var bb=this.data.bb;
    if(aa==""||bb==""){
      this.setData({
        aa:"sweep1",
        bb:"camera2"
      })
    }else if(aa=="sweep1"||bb=="camera2"){
      this.setData({
        aa:"",
        bb:""
      })
    }
  },*/
  handShow:function(){
    var aa=this.data.aa;
    var bb=this.data.bb;
    ((aa||bb)&&(this.setData({aa:"",bb:""})))||((!aa||!bb)&&(this.setData({aa:"sweep1",bb:"camera2"})));
  },
  // zan:function(event){
  //    var like=event.currentTarget.dataset.like;
  //    //console.log(like)
  //    var index=event.currentTarget.dataset.index;
  //    var list = this.data.list;
  //    //console.log(event) 
  //    if(like) {
  //      list[index].like = false;
  //      list[index].num --
  //      this.setData({
  //        list:list
  //      })
  //    } else {
  //      list[index].like = true;
  //      list[index].num++
  //      this.setData({
  //        list:list
  //      })
  //    }
  //  }, 
  /* zan:function(event){
    var index=event.currentTarget.dataset.index;
    var list = this.data.list;
    list[index].like = !list[index].like;
    this.setData({
    list,
    })
  }, */
  //  collected:function(event){
  //    var index=event.currentTarget.dataset.index;
  //    var list=this.data.list;
  //    list[index].collection=!list[index].collection
  //    this.setData({
  //      list,
  //    })
  //  },
  bindChange:function () {
    var isShow=this.data.isShow
    if(isShow==""){
      this.setData({
        isShow:"slideUp",
      })
    }else if(isShow=="slideUp"){
      this.setData({
        isShow:""
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
   getdata:function(){
     var that=this;
     wx.request({
       url: 'https://tcrm.inxx.top/api/recommend/act/recList',
       data: {
         type:1,
         list_rows:5,
         page:1,
         user_id:10382,
       },
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       // header: {}, // 设置请求的 header
       success: function(res){
         var list=res.data.data.data
         for(var i=0;i<list.length;i++){
           var img=list[i].img
           var imgArr=img.split(",")
           console.log(imgArr.length)
           list[i].img=imgArr
         }
         console.log(list)
         // success
         that.setData({
           list
         })
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
   },
  onLoad: function (options) {
    this.getdata()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log(Date.parse(new Date())/1000)
    var totalSecond=1548098414 - Date.parse(new Date())/1000;
    var interval=setInterval(function(){
      var second=totalSecond;
      var day=Math.floor(second / 3600 / 24)

      //小时
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;
 
      // 分钟位
      var min = Math.floor((second - day * 3600 *24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;
 
      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min*60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        countHour: hrStr,
        countMinute: minStr,
        countSecond: secStr,
      });
      totalSecond--;
      if (totalSecond < 0) {
        clearInterval(interval);
        this.setData({
          countHour: '00',
          countMinute: '00',
          countSecond: '00',
        });
      }

    }.bind(this),1000)
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