import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-2xl">
            AI時代を生き抜く力を、<br />
            <span className="text-yellow-300">今すぐ</span>手に入れる
          </h2>

          {/* Final CTA Image */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/finalcta-image.png"
              alt="AI時代を生き抜く"
              width={1200}
              height={675}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>

          <p className="text-xl md:text-2xl text-white/90 font-bold">
            このページを閉じる前に、一歩踏み出しませんか？
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 space-y-2">
            <div className="grid grid-cols-3 gap-4 text-white font-bold">
              <div>
                <p className="text-3xl">✓</p>
                <p className="text-sm">約2時間</p>
              </div>
              <div>
                <p className="text-3xl">✓</p>
                <p className="text-sm">オンライン</p>
              </div>
              <div>
                <p className="text-3xl">✓</p>
                <p className="text-sm">実践重視</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
