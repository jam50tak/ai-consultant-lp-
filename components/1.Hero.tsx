import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* バッジ */}
          <div className="flex justify-center animate-bounce">
            <Badge className="text-sm px-6 py-2 bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg">
              🔥 期間限定キャンペーン実施中 🔥
            </Badge>
          </div>

          {/* メインタイトル */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            <span className="block text-red-600 drop-shadow-lg">AIを味方にする</span>
            <span className="block text-gray-900">次世代コンサルタントへ</span>
          </h1>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="border-4 border-yellow-300 shadow-2xl bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 rounded-lg p-6 space-y-6">
              <div className="text-center space-y-4">
                <Badge className="text-base px-6 py-2 bg-white/20 backdrop-blur-sm text-white animate-pulse">
                  🔥 今だけ限定オファー 🔥
                </Badge>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white drop-shadow-lg">
                  通常<span className="line-through text-white/70">¥4,980</span> →{' '}
                  <span className="text-yellow-300 block mt-2 text-5xl">限定20名 無料</span>
                </h2>
              </div>

              <div className="text-center space-y-4 pt-4 border-t-2 border-white/30">
                <h3 className="text-xl font-black text-white">（講座立ち上げ準備につき、20名限定無料としました）</h3>
              </div>

              <div className="text-center pt-4">
                <Button
                  size="lg"
                  asChild
                  className="text-2xl px-16 h-20 bg-white hover:bg-gray-100 text-red-600 shadow-2xl transform hover:scale-110 transition-all font-black border-4 border-yellow-300"
                >
                  <a href="#calendar">
                    🚀 今すぐ無料で申し込む
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* スクロール誘導 */}
          <div className="pt-8 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
