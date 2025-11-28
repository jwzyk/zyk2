import Image from "next/image";
import Link from "next/link";

export default function Exhibitions() {
  return (
    <div className="font-sans">
      {/* 页面标题 */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              展览介绍
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              探索景德镇中国陶瓷博物馆的精彩展览，感受千年陶瓷文化的魅力
            </p>
          </div>
        </div>
      </section>
      
      {/* 展览列表 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 古代陶瓷展 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
                    alt="古代陶瓷展" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  古代陶瓷展
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  本展览展示了从新石器时代到明清时期的陶瓷珍品，见证了中国陶瓷的发展历程。展览分为多个部分，包括早期陶器、青瓷、白瓷、青花瓷等，全面展示了中国古代陶瓷的艺术成就和技术发展。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  展品中包括许多国家级文物，如宋代的汝窑青瓷、元代的青花瓷、明代的永乐甜白瓷等，这些珍品不仅具有极高的艺术价值，也是研究中国古代历史和文化的重要实物资料。
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展厅：1号馆
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展期：常年
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    开放时间：9:00-17:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 景德镇陶瓷艺术展 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  景德镇陶瓷艺术展
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  本展览专门展示景德镇独特的陶瓷艺术风格和制作工艺，包括青花、玲珑、粉彩、颜色釉等四大传统名瓷，以及现代景德镇陶瓷艺术家的创新作品。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  展览通过实物展示、多媒体演示和互动体验等方式，让观众了解景德镇陶瓷的制作过程和艺术特点，感受千年瓷都的魅力。
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展厅：2号馆
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展期：常年
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    开放时间：9:00-17:00
                  </span>
                </div>
              </div>
              
              <div className="relative order-1 md:order-2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="景德镇陶瓷艺术展" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-amber-500 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
          
          {/* 现代陶瓷设计展 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1549924121-7d1786801114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="现代陶瓷设计展" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  现代陶瓷设计展
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  本展览展示当代陶瓷艺术家的创新作品，探索陶瓷艺术的未来发展方向。展览包括陶艺、陶瓷雕塑、陶瓷装置等多种形式，展现了现代陶瓷艺术的多样性和创新性。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  展览定期更新，邀请国内外知名陶瓷艺术家参展，为观众带来最新的陶瓷艺术作品和创作理念。
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展厅：3号馆
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展期：2025年1月-12月
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    开放时间：9:00-17:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 临时展览 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  临时展览：陶瓷与生活
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  本展览探讨陶瓷与日常生活的关系，展示陶瓷在饮食、装饰、艺术等方面的应用。展览包括传统陶瓷生活用品和现代陶瓷设计作品，让观众了解陶瓷如何融入我们的生活。
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  展览期间还将举办陶瓷制作体验活动，邀请观众参与陶瓷制作，感受陶瓷艺术的魅力。
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展厅：4号馆
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    展期：2025年3月-6月
                  </span>
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    开放时间：9:00-17:00
                  </span>
                </div>
              </div>
              
              <div className="relative order-1 md:order-2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                    alt="临时展览：陶瓷与生活" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 预约参观 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">
                  预约参观
                </h2>
                <p className="text-lg mb-6">
                  景德镇中国陶瓷博物馆实行限流参观，分时段预约。请提前预约以确保您的参观体验。
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