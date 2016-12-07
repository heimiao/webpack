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
		new webpack.BannerPlugin("This file is create by zhaoda")	//添加注释，内置插件，第三方需要自己npm install
		]
}