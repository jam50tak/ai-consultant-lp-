import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Purpose() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* セクションタイトル */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
              AIを味方にする次世代コンサルタントへ
            </h2>
          </div>

          {/* 本文 */}
          <div className="prose prose-lg max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              ChatGPTの登場から3年。もうAIは「様子見」のフェーズではありません。<br />
            今、この瞬間も、他のコンサルタントはAIを使いこなし、あなたの2倍の速度で提案書を作り、3倍の質のコンサルティングを提供しています。
            このままでは、クライアントから「あの先生よりAIの方がいいよね」と思われる日が来るかもしれません。
            あなたのコンサルティング手法をAIと組み合わせて、より良いコンサルティングを提供できるようになれば、あなたのコンサルティング価値がさらに高まります。
            </p>
          </div>

          {/* 2つの目標 */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-black text-center text-gray-900">
            あなたの目指す「AIコンサルタント」とは？
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 目標1 */}
              <Card className="border-t-8 border-t-blue-500 hover:shadow-2xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-black text-gray-900">AIを使いこなすコンサルタント</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🚀</span>
                      <span className="font-semibold">業務効率を劇的に改善（従来2時間の作業が30分に）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">💡</span>
                      <span className="font-semibold">AIを使った戦略立案・資料作成・分析が自在に</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 目標2 */}
              <Card className="border-t-8 border-t-green-500 hover:shadow-2xl transition-shadow bg-gradient-to-br from-green-50 to-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-black text-gray-900">AI活用を支援できるコンサルタント</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🎯</span>
                      <span className="font-semibold">クライアントのAI導入を支援できる知見を獲得</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">⚡</span>
                      <span className="font-semibold">「AI活用コンサル」という新たな武器を手に入れる</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              本講座では、そのどちらもレベルアップすることができます
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
