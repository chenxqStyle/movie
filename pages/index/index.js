//index.js
//获取应用实例
var app = getApp()

var API_URL="https://api.douban.com/v2/movie/top250";
Page({
  data:{
  	title:"加载中",
  	movies:[]
  },
  onLoad:function(){
  	var that=this;

  	wx.showToast({
  		title:"正在加载中...",
  		icon:"loading",
  		duration:10000
  	});

  	wx.request({
  		url:API_URL,
  		data:{},
  		header:{
  			"Content-Type":"json"
  		},
  		success:function(res){
  			wx.hideToast();
  			that.setData({
  				title:res.data.title,
  				movies:res.data.subjects
  			})
  		}
  	})

  }
})
