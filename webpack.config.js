var webpack=require("webpack") 
module.exports={
	entry: ['webpack/hot/dev-server',"./entry.js"],
	output:{
		path:__dirname+"/build",
		filename:'index.js'
	},
	module:{
		loaders:[
		{test:/\.css$/,loader:'style!css'}	
		]
	},
	plugins:[
		new webpack.BannerPlugin("This file is create by zhaoda")	//���ע�ͣ����ò������������Ҫ�Լ�npm install
		]
}