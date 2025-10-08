import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8 px-2">
          <Card className="border-4 border-yellow-300 shadow-2xl bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500">
            <CardContent className="pt-4 md:pt-6 space-y-4 md:space-y-6 p-4 md:p-6">
              <div className="text-center space-y-3 md:space-y-4">
                <Badge className="text-sm md:text-base px-4 md:px-6 py-2 bg-white/20 backdrop-blur-sm text-white animate-pulse">
                  🔥 今だけ限定オファー 🔥
                </Badge>
                <h2 className="text-2xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                  通常<span className="line-through text-white/70">¥4,980</span> →{' '}
                  <span className="text-yellow-300 block mt-2 text-4xl md:text-6xl">限定20名 無料</span>
                </h2>
              </div>

              <div className="text-center space-y-3 md:space-y-4 pt-3 md:pt-4 border-t-2 border-white/30">
              <h3 className="text-base md:text-xl font-black text-white">（講座立ち上げ準備につき、20名限定無料としました）</h3>
              </div>

              <div className="text-center pt-3 md:pt-4">
                <Button
                  size="lg"
                  asChild
                  className="text-lg md:text-2xl px-8 md:px-16 h-16 md:h-20 bg-white hover:bg-gray-100 text-red-600 shadow-2xl transform hover:scale-110 transition-all font-black border-4 border-yellow-300"
                >
                  <a href="#calendar">
                    🚀 今すぐ無料で申し込む
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
