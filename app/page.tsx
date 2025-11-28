'use client';
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [activeVirtualExhibition, setActiveVirtualExhibition] = useState<string | null>(null);
  const [showCeramicHistory, setShowCeramicHistory] = useState(false);
  
  const openVirtualExhibition = (id: string) => {
    setActiveVirtualExhibition(id);
  };
  
  const closeVirtualExhibition = () => {
    setActiveVirtualExhibition(null);
  };
  
  const toggleCeramicHistory = () => {
    setShowCeramicHistory(!showCeramicHistory);
  };
  
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      {/* 导航栏 */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/next.svg"
                alt="景德镇中国陶瓷博物馆"
                width={120}
                height={30}
                className="dark:invert"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium">关于博物馆</a>
              <a href="#visit" className="text-gray-700 hover:text-amber-600 font-medium">参观信息</a>
              <a href="#exhibitions" className="text-gray-700 hover:text-amber-600 font-medium">展览介绍</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium">联系方式</a>
            </nav>
            <div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full font-medium transition-colors">
                立即预约
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 英雄区域 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              景德镇中国陶瓷博物馆
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              探索千年陶瓷文化，感受艺术与历史的交融
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors">
                了解更多
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-full font-medium text-lg border border-white/30 transition-colors">
                虚拟参观
              </button>
            </div>
          </div>
        </div>
        {/* 背景图片 */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/景德镇中国陶瓷博物馆.png)' }}></div>
      </section>

      {/* 关于博物馆 */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                关于景德镇中国陶瓷博物馆
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                景德镇中国陶瓷博物馆是中国唯一的陶瓷专题博物馆，位于江西省景德镇市，是展示中国陶瓷历史文化的重要窗口。
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                博物馆收藏了从新石器时代到现代的陶瓷珍品，包括景德镇窑、汝窑、官窑、哥窑、定窑、钧窑等各大名窑的精品，展示了中国陶瓷发展的辉煌历程。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-2">5000+</h3>
                  <p className="text-gray-600">珍贵陶瓷藏品</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-2">10+</h3>
                  <p className="text-gray-600">主题展览厅</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div 
                className="aspect-square bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-transform hover:scale-105"
                onClick={toggleCeramicHistory}
                style={{ backgroundImage: 'url(/陶瓷展品展示区.png)' }}
              >
                {/* 陶瓷展品图片 */}
                <div className="w-full h-full flex items-center justify-center bg-black/30">
                  <span className="text-white font-medium text-lg">点击查看中国陶瓷历史</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-amber-600 font-semibold text-center">千年陶瓷文化</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 参观信息 */}
      <section id="visit" className="py-20 bg-amber-50" style={{ backgroundImage: 'url(/参观信息.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            参观信息
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 开放时间 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-amber-600 text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">开放时间</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>周二至周日</span>
                  <span className="font-medium">9:00-17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>周一</span>
                  <span className="font-medium">闭馆（节假日除外）</span>
                </li>
                <li className="flex justify-between">
                  <span>停止入场</span>
                  <span className="font-medium">16:30</span>
                </li>
                <li className="flex justify-between">
                  <span>博物馆之夜</span>
                  <span className="font-medium">20:30停止预约</span>
                </li>
              </ul>
            </div>

            {/* 预约方式 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-amber-600 text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">预约方式</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>景德镇中国陶瓷博物馆微信公众号</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>“畅游景德镇”微信小程序</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>现场预约机（未约满情况下）</span>
                </li>
              </ul>
            </div>

            {/* 参观须知 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-amber-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">参观须知</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>实行限流参观，分时段预约</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>携带有效身份证件入场</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>保持馆内安静，文明参观</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 陶瓷展区 */}
      <section id="exhibitions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            陶瓷展区
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 古代陶瓷展区 */}
            <div className="group">
              <div className="aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden shadow-lg mb-4 transition-all group-hover:scale-105 group-hover:shadow-xl cursor-pointer" style={{ backgroundImage: 'url(/古代陶瓷展区.png)' }}>
                <div onClick={() => openVirtualExhibition('virtual-ancient')} className="w-full h-full flex items-center justify-center cursor-pointer bg-black/30">
                  <span className="text-white font-medium">古代陶瓷展区</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                古代陶瓷展区
              </h3>
              <p className="text-gray-600 mb-4">
                展示从新石器时代到明清时期的陶瓷珍品，包括仰韶文化彩陶、唐三彩、宋五大名窑等代表性作品。
              </p>
              <button onClick={() => openVirtualExhibition('virtual-ancient')} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:shadow-md">
                <span>进入虚拟展区</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* 景德镇窑展区 */}
            <div className="group">
              <div className="aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden shadow-lg mb-4 transition-all group-hover:scale-105 group-hover:shadow-xl cursor-pointer" style={{ backgroundImage: 'url(/景德镇窑展区.png)' }}>
                <div onClick={() => openVirtualExhibition('virtual-jingdezhen')} className="w-full h-full flex items-center justify-center cursor-pointer bg-black/30">
                  <span className="text-white font-medium">景德镇窑展区</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                景德镇窑展区
              </h3>
              <p className="text-gray-600 mb-4">
                展示景德镇窑从元代到现代的发展历程，包括元青花、明五彩、清粉彩等经典瓷器。
              </p>
              <button onClick={() => openVirtualExhibition('virtual-jingdezhen')} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:shadow-md">
                <span>进入虚拟展区</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* 五大名窑展区 */}
            <div className="group">
              <div className="aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden shadow-lg mb-4 transition-all group-hover:scale-105 group-hover:shadow-xl cursor-pointer" style={{ backgroundImage: 'url(/五大名窑展区.png)' }}>
                <div onClick={() => openVirtualExhibition('virtual-famous-kilns')} className="w-full h-full flex items-center justify-center cursor-pointer bg-black/30">
                  <span className="text-white font-medium">五大名窑展区</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                五大名窑展区
              </h3>
              <p className="text-gray-600 mb-4">
                集中展示宋代汝窑、官窑、哥窑、定窑、钧窑五大名窑的精品瓷器，展现宋代陶瓷艺术的巅峰成就。
              </p>
              <button onClick={() => openVirtualExhibition('virtual-famous-kilns')} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:shadow-md">
                <span>进入虚拟展区</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* 现代陶瓷艺术展区 */}
            <div className="group">
              <div className="aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden shadow-lg mb-4 transition-all group-hover:scale-105 group-hover:shadow-xl cursor-pointer" style={{ backgroundImage: 'url(/现代陶瓷艺术展区.png)' }}>
                <div onClick={() => openVirtualExhibition('virtual-modern')} className="w-full h-full flex items-center justify-center cursor-pointer bg-black/30">
                  <span className="text-white font-medium">现代陶瓷艺术展区</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                现代陶瓷艺术展区
              </h3>
              <p className="text-gray-600 mb-4">
                展示当代陶瓷艺术家的创新作品，融合传统工艺与现代设计理念，呈现陶瓷艺术的新风貌。
              </p>
              <button onClick={() => openVirtualExhibition('virtual-modern')} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:shadow-md">
                <span>进入虚拟展区</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* 外销瓷展区 */}
            <div className="group">
              <div className="aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden shadow-lg mb-4 transition-all group-hover:scale-105 group-hover:shadow-xl cursor-pointer" style={{ backgroundImage: 'url(/外销瓷展区.png)' }}>
                <div onClick={() => openVirtualExhibition('virtual-export')} className="w-full h-full flex items-center justify-center cursor-pointer bg-black/30">
                  <span className="text-white font-medium">外销瓷展区</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                外销瓷展区
              </h3>
              <p className="text-gray-600 mb-4">
                展示明清时期外销到欧洲、东南亚等地的陶瓷珍品，反映中国陶瓷对世界文化的影响。
              </p>
              <button onClick={() => openVirtualExhibition('virtual-export')} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:shadow-md">
                <span>进入虚拟展区</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* 陶瓷工艺展示区 */}
            <div className="group">
              <div className="aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden shadow-lg mb-4 transition-all group-hover:scale-105 group-hover:shadow-xl cursor-pointer" style={{ backgroundImage: 'url(/陶瓷工艺展示区.png)' }}>
                <div onClick={() => openVirtualExhibition('virtual-craft')} className="w-full h-full flex items-center justify-center cursor-pointer bg-black/30">
                  <span className="text-white font-medium">陶瓷工艺展示区</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                陶瓷工艺展示区
              </h3>
              <p className="text-gray-600 mb-4">
                展示陶瓷制作的完整工艺流程，从原料制备、成型、装饰到烧制，让观众了解陶瓷的制作奥秘。
              </p>
              <button onClick={() => openVirtualExhibition('virtual-craft')} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:shadow-md">
                <span>进入虚拟展区</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 虚拟展区弹窗 */}
      {activeVirtualExhibition && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 关闭按钮 */}
            <button 
              onClick={closeVirtualExhibition} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            
            {/* 古代陶瓷虚拟展区 */}
            {activeVirtualExhibition === 'virtual-ancient' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">古代陶瓷虚拟展区</h2>
                <div className="aspect-video bg-cover bg-center rounded-xl mb-6 flex items-center justify-center" style={{ backgroundImage: 'url(/古代陶瓷展区.png)' }}>
                  <span className="text-white font-medium text-xl bg-black/30 px-4 py-2 rounded-lg">古代陶瓷虚拟展区全景展示</span>
                </div>
                <p className="text-gray-600 mb-4">
                  欢迎来到古代陶瓷虚拟展区！在这里，您可以360度全方位欣赏从新石器时代到明清时期的陶瓷珍品，包括仰韶文化彩陶、唐三彩、宋五大名窑等代表性作品。
                </p>
                <p className="text-gray-600">
                  使用鼠标拖拽可以旋转视角，滚轮可以缩放画面，点击展品可以查看详细信息。
                </p>
              </div>
            )}
            
            {/* 景德镇窑虚拟展区 */}
            {activeVirtualExhibition === 'virtual-jingdezhen' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">景德镇窑虚拟展区</h2>
                <div className="aspect-video bg-cover bg-center rounded-xl mb-6 flex items-center justify-center" style={{ backgroundImage: 'url(/景德镇窑展区.png)' }}>
                  <span className="text-white font-medium text-xl bg-black/30 px-4 py-2 rounded-lg">景德镇窑虚拟展区全景展示</span>
                </div>
                <p className="text-gray-600 mb-4">
                  欢迎来到景德镇窑虚拟展区！在这里，您可以了解景德镇窑从元代到现代的发展历程，欣赏元青花、明五彩、清粉彩等经典瓷器。
                </p>
                <p className="text-gray-600">
                  使用鼠标拖拽可以旋转视角，滚轮可以缩放画面，点击展品可以查看详细信息。
                </p>
              </div>
            )}
            
            {/* 五大名窑虚拟展区 */}
            {activeVirtualExhibition === 'virtual-famous-kilns' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">五大名窑虚拟展区</h2>
                <div className="aspect-video bg-cover bg-center rounded-xl mb-6 flex items-center justify-center" style={{ backgroundImage: 'url(/五大名窑展区.png)' }}>
                  <span className="text-white font-medium text-xl bg-black/30 px-4 py-2 rounded-lg">五大名窑虚拟展区全景展示</span>
                </div>
                <p className="text-gray-600 mb-4">
                  欢迎来到五大名窑虚拟展区！在这里，您可以集中欣赏宋代汝窑、官窑、哥窑、定窑、钧窑五大名窑的精品瓷器，感受宋代陶瓷艺术的巅峰成就。
                </p>
                <p className="text-gray-600">
                  使用鼠标拖拽可以旋转视角，滚轮可以缩放画面，点击展品可以查看详细信息。
                </p>
              </div>
            )}
            
            {/* 现代陶瓷艺术虚拟展区 */}
            {activeVirtualExhibition === 'virtual-modern' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">现代陶瓷艺术虚拟展区</h2>
                <div className="aspect-video bg-cover bg-center rounded-xl mb-6 flex items-center justify-center" style={{ backgroundImage: 'url(/现代陶瓷艺术展区.png)' }}>
                  <span className="text-white font-medium text-xl bg-black/30 px-4 py-2 rounded-lg">现代陶瓷艺术虚拟展区全景展示</span>
                </div>
                <p className="text-gray-600 mb-4">
                  欢迎来到现代陶瓷艺术虚拟展区！在这里，您可以欣赏当代陶瓷艺术家的创新作品，感受传统工艺与现代设计理念的完美融合。
                </p>
                <p className="text-gray-600">
                  使用鼠标拖拽可以旋转视角，滚轮可以缩放画面，点击展品可以查看详细信息。
                </p>
              </div>
            )}
            
            {/* 外销瓷虚拟展区 */}
            {activeVirtualExhibition === 'virtual-export' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">外销瓷虚拟展区</h2>
                <div className="aspect-video bg-cover bg-center rounded-xl mb-6 flex items-center justify-center" style={{ backgroundImage: 'url(/外销瓷展区.png)' }}>
                  <span className="text-white font-medium text-xl bg-black/30 px-4 py-2 rounded-lg">外销瓷虚拟展区全景展示</span>
                </div>
                <p className="text-gray-600 mb-4">
                  欢迎来到外销瓷虚拟展区！在这里，您可以了解明清时期中国陶瓷外销到欧洲、东南亚等地的历史，欣赏具有异域风格的外销瓷珍品。
                </p>
                <p className="text-gray-600">
                  使用鼠标拖拽可以旋转视角，滚轮可以缩放画面，点击展品可以查看详细信息。
                </p>
              </div>
            )}
            
            {/* 陶瓷工艺虚拟展示区 */}
            {activeVirtualExhibition === 'virtual-craft' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">陶瓷工艺虚拟展示区</h2>
                <div className="aspect-video bg-cover bg-center rounded-xl mb-6 flex items-center justify-center" style={{ backgroundImage: 'url(/陶瓷工艺展示区.png)' }}>
                  <span className="text-white font-medium text-xl bg-black/30 px-4 py-2 rounded-lg">陶瓷工艺虚拟展示区</span>
                </div>
                <p className="text-gray-600 mb-4">
                  欢迎来到陶瓷工艺虚拟展示区！在这里，您可以全程观看陶瓷制作的完整工艺流程，从原料制备、成型、装饰到烧制，深入了解陶瓷的制作奥秘。
                </p>
                <p className="text-gray-600">
                  使用鼠标拖拽可以旋转视角，滚轮可以缩放画面，点击工艺步骤可以查看详细说明。
                </p>
              </div>
            )}
            
            {/* 返回按钮 */}
            <div className="mt-8 flex justify-center">
              <button 
                onClick={closeVirtualExhibition} 
                className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-lg font-medium transition-all"
              >
                关闭虚拟展区
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 中国陶瓷历史窗口 */}
      {showCeramicHistory && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 关闭按钮 */}
            <button 
              onClick={toggleCeramicHistory} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">中国陶瓷历史</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">新石器时代（约公元前10000-2000年）</h3>
                <p className="text-gray-600">
                  中国陶瓷的起源可以追溯到新石器时代，当时的人们开始使用黏土制作简单的陶器。最早的陶器是手工捏制的，后来发展出了轮制技术。仰韶文化的彩陶和龙山文化的黑陶是这一时期的代表作品，展现了原始先民的艺术创造力。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">商周时期（约公元前1600-256年）</h3>
                <p className="text-gray-600">
                  商周时期，陶瓷制作技术得到了进一步发展，出现了原始青瓷。这一时期的陶器主要用于祭祀和日常生活，装饰纹样以饕餮纹、云雷纹等为主，具有浓厚的宗教色彩。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">秦汉时期（公元前221-220年）</h3>
                <p className="text-gray-600">
                  秦汉时期是中国陶瓷发展的重要阶段，出现了兵马俑、铅釉陶等著名作品。秦始皇兵马俑以其宏大的规模和精湛的工艺被誉为“世界第八大奇迹”。汉代的青瓷制作技术已经相当成熟，为后来的瓷器发展奠定了基础。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">魏晋南北朝时期（220-589年）</h3>
                <p className="text-gray-600">
                  魏晋南北朝时期，陶瓷制作技术继续发展，出现了白瓷。这一时期的瓷器造型简洁，装饰纹样以莲花纹、忍冬纹等为主，受到佛教文化的影响。青瓷的生产中心主要在浙江地区，以越窑最为著名。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">隋唐时期（581-907年）</h3>
                <p className="text-gray-600">
                  隋唐时期是中国陶瓷发展的鼎盛时期，出现了唐三彩、白瓷、青瓷等多种瓷器品种。唐三彩以其绚丽的色彩和生动的造型闻名于世，是唐代陶瓷艺术的代表。邢窑的白瓷和越窑的青瓷被誉为“南青北白”，代表了当时瓷器制作的最高水平。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">宋元时期（960-1368年）</h3>
                <p className="text-gray-600">
                  宋元时期是中国陶瓷发展的黄金时期，出现了汝窑、官窑、哥窑、定窑、钧窑五大名窑。宋代瓷器以其简约的造型、精湛的工艺和优雅的釉色著称，代表了中国陶瓷艺术的巅峰。元代则出现了青花瓷，以其清新淡雅的风格深受人们喜爱，成为中国陶瓷的重要品种。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">明清时期（1368-1912年）</h3>
                <p className="text-gray-600">
                  明清时期，中国陶瓷制作技术达到了登峰造极的地步，出现了景德镇窑、宜兴窑等著名窑口。明代的青花瓷、五彩瓷，清代的粉彩瓷、珐琅彩瓷等品种，以其丰富的色彩和精美的装饰闻名于世。景德镇成为中国的“瓷都”，其产品远销海内外，成为中国文化的重要象征。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">现代陶瓷（1912年至今）</h3>
                <p className="text-gray-600">
                  现代陶瓷在继承传统工艺的基础上，融合了现代设计理念和科技手段，出现了许多创新品种。当代陶瓷艺术家们不断探索新的材料和技法，创作出了大量具有时代特色的陶瓷作品。中国陶瓷继续在世界陶瓷领域占据重要地位，成为中外文化交流的重要纽带。
                </p>
              </div>
            </div>
            
            {/* 关闭按钮 */}
            <div className="mt-8 flex justify-center">
              <button 
                onClick={toggleCeramicHistory} 
                className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-lg font-medium transition-all"
              >
                关闭历史窗口
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 联系方式 */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                联系我们
              </h2>
              <p className="text-gray-600 mb-8">
                如有任何疑问，请通过以下方式联系我们，我们将竭诚为您服务。
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-amber-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">咨询电话</h3>
                    <p className="text-gray-600">0798-8253701 / 0798-8253708</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-amber-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">博物馆地址</h3>
                    <p className="text-gray-600">江西省景德镇市昌江区紫晶路1号</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-amber-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">电子邮箱</h3>
                    <p className="text-gray-600">info@jdzmuseum.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">在线咨询</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      电话
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="请输入您的电话"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的邮箱"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    留言内容
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的留言"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/next.svg"
                alt="景德镇中国陶瓷博物馆"
                width={120}
                height={30}
                className="dark:invert mb-4"
              />
              <p className="text-gray-400">
                探索千年陶瓷文化，感受艺术与历史的交融。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">关于博物馆</a></li>
                <li><a href="#visit" className="text-gray-400 hover:text-white transition-colors">参观信息</a></li>
                <li><a href="#exhibitions" className="text-gray-400 hover:text-white transition-colors">展览介绍</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系方式</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">开放时间</h3>
              <ul className="space-y-2 text-gray-400">
                <li>周二至周日: 9:00-17:00</li>
                <li>周一: 闭馆（节假日除外）</li>
                <li>停止入场: 16:30</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2 text-gray-400">
                <li>电话: 0798-8253701 / 0798-8253708</li>
                <li>地址: 江西省景德镇市昌江区紫晶路1号</li>
                <li>邮箱: info@jdzmuseum.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2025 景德镇中国陶瓷博物馆. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
