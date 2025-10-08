import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function Overview() {
  const items = [
    { label: '受講形式', value: 'オンライン（Zoom）', icon: '🎥' },
    { label: '所要時間', value: '約2時間', icon: '⏱️' },
    { label: '料金', value: '20名限定 無料', originalPrice: '通常¥4,980', icon: '💰' },
    { label: '対象者', value: 'AIをもっと活用したいコンサルタント', icon: '👔' },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">講座概要</h2>
          </div>

          {/* Overview Image */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/overview-image.png"
              alt="オンライン講座"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                    <span className="text-2xl">{item.icon}</span>
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {item.originalPrice ? (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground line-through">
                        {item.originalPrice}
                      </p>
                      <p className="text-2xl font-bold text-primary">{item.value}</p>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
