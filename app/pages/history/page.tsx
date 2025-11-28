import Image from "next/image";
import Link from "next/link";

export default function History() {
  return (
    <div className="font-sans">
      {/* 页面标题 */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              陶瓷历史
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              探索景德镇陶瓷的千年发展历程，感受中国陶瓷文化的深厚底蕴
            </p>
          </div>
        </div>
      </section>
      
      {/* 起源与早期发展 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
                  alt="早期陶瓷" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                起源与早期发展
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                景德镇陶瓷的历史可以追溯到新石器时代，当时的先民已经开始制作简单的陶器。到了汉代，景德镇地区开始生产瓷器，成为中国早期的瓷器产地之一。
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                唐代是景德镇陶瓷发展的重要时期，当时的景德镇被称为"昌南镇"，生产的白瓷被誉为"假玉器"，受到了广泛的赞誉。唐代诗人白居易曾在诗中赞美景德镇的瓷器："大邑烧瓷轻且坚，扣如哀玉锦城传。君家白碗胜霜雪，急送茅斋也可怜。"
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                宋代是景德镇陶瓷的黄金时期，当时的景德镇成为全国的制瓷中心之一，生产的青白瓷（影青瓷）以其独特的艺术风格和精湛的制作工艺闻名于世。青白瓷的特点是胎质洁白细腻，釉色青白淡雅，被誉为"青如天，明如镜，薄如纸，声如磬"。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 元明清时期的繁荣 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                元明清时期的繁荣
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                元代是景德镇陶瓷发展的重要转折点，当时的景德镇设立了"浮梁瓷局"，专门负责管理瓷器的生产和外销。元代景德镇成功烧制出了青花瓷和釉里红，这两种瓷器的出现标志着中国陶瓷艺术进入了一个新的阶段。
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                明代是景德镇陶瓷的鼎盛时期，当时的景德镇被称为"瓷都"，成为全国的制瓷中心。明代景德镇烧制出了许多著名的瓷器品种，如永乐甜白瓷、宣德青花瓷、成化斗彩瓷等，这些瓷器以其精湛的工艺和独特的艺术风格享誉世界。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                清代是景德镇陶瓷的继续发展时期，当时的景德镇烧制出了粉彩、珐琅彩、颜色釉等多种瓷器品种。清代景德镇的瓷器制作工艺达到了登峰造极的地步，许多瓷器作品成为了稀世珍品。
              </p>
            </div>
            
            <div className="relative order-1 md:order-2">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="元明清陶瓷" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-amber-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 近现代发展 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1549924121-7d1786801114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="近现代陶瓷" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                近现代发展
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                近现代以来，景德镇陶瓷经历了一系列的变革和发展。特别是新中国成立后，景德镇陶瓷工业得到了快速发展，建立了现代化的陶瓷生产体系，同时也注重传统陶瓷工艺的保护和传承。
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                改革开放以来，景德镇陶瓷产业不断创新和发展，涌现出了许多优秀的陶瓷艺术家和企业。现代景德镇陶瓷不仅继承了传统的工艺和风格，还融合了现代设计理念和技术，形成了独特的现代陶瓷艺术风格。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                今天，景德镇陶瓷已经成为中国文化的重要符号之一，远销世界各地，受到了广泛的赞誉和喜爱。景德镇陶瓷博物馆作为展示景德镇陶瓷文化的重要窗口，为观众提供了一个了解景德镇陶瓷历史和文化的平台。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 陶瓷文化的影响 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              陶瓷文化的影响
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              景德镇陶瓷文化对中国和世界文化产生了深远的影响
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 文化影响卡片 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg p-8 transform hover:scale-[1.03] transition-transform duration-300">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                中国文化的重要组成部分
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                景德镇陶瓷文化是中国传统文化的重要组成部分，体现了中国人民的智慧和创造力，是中华民族的宝贵财富。
              </p>
            </div>
            
            {/* 文化影响卡片 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg p-8 transform hover:scale-[1.03] transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                世界陶瓷文化的重要贡献
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                景德镇陶瓷通过丝绸之路等贸易路线远销世界各地，对世界陶瓷文化的发展产生了深远的影响，成为中国文化走向世界的重要载体。
              </p>
            </div>
            
            {/* 文化影响卡片 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg p-8 transform hover:scale-[1.03] transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                经济和社会发展的推动力量
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                景德镇陶瓷产业是当地经济的重要支柱，为当地居民提供了大量的就业机会，同时也带动了相关产业的发展，如旅游、文化创意等。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 预约参观 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">
                  预约参观
                </h2>
                <p className="text-lg mb-6">
                  亲自来到景德镇中国陶瓷博物馆，感受千年陶瓷文化的魅力
                </p>
                <Link 
                  href="/reservation" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  立即预约
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="博物馆展览" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}