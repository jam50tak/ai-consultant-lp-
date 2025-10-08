import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Curriculum() {
  const curriculumItems = [
    {
      title: '第1部：AIの基本理解',
      items: [
        '生成AIとは何か',
        'AI時代の働き方の変化',
        '業務別AIの活用事例',
      ],
    },
    {
      title: '第2部：AI活用術とワークショップ',
      items: [
        '最新おすすめのAIツールの紹介',
        'プロンプトの基本とテンプレート活用',
        '実践ワークショップ',
      ],
    },
    {
      title: '第3部：AIコンサルタントの基本',
      items: [
        'コンサルタントの生き残り戦術',
        'AIコンサルタントとしてのアプローチ',
        'AIコンサルタントのスタートライン',
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">カリキュラム</h2>
            <p className="text-lg text-muted-foreground">充実の3部構成で、実践的なスキルを習得（内容は変更する場合があります）</p>
          </div>

          {/* AIを使いこなすための方程式 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200">
            <h3 className="text-2xl md:text-3xl font-black text-center mb-6 text-gray-900">
              「AIを使いこなす方程式」の理解と実践
            </h3>
            <div className="text-center text-lg md:text-xl font-bold text-gray-800 leading-relaxed">
              <span className="text-blue-600">AIの基本性能</span>
              {' × '}
              <span className="text-purple-600">指示力</span>
              {' × '}
              <span className="text-blue-600">データソースおよびコンテキスト</span>
              {' × '}
              <span className="text-purple-600">索引力</span>
            </div>
          </div>

          <div className="space-y-4">
            {curriculumItems.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge className="text-lg px-3 py-1 flex-shrink-0">{index + 1}</Badge>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mt-0.5 text-primary flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
