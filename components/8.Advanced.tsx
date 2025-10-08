import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Advanced() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              さらに学びたい方へ<br />実践重視の中級編・上級編
            </h2>
            <p className="text-xl text-muted-foreground">
              ※詳細は初級編の受講後にご案内します。<br />まずは初級編を受講ください。
            </p>
          </div>

          <div className="space-y-8">
            {/* 中級編 */}
            <Card className="border-4 border-blue-500 hover:shadow-2xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="text-xl px-6 py-2 bg-blue-600 text-white font-black">中級編</Badge>
                  <span className="text-sm text-muted-foreground font-semibold">Coming Soon</span>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-black mt-4">
                  コンテキストエンジニアリング<br />バイブコーディング入門
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
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
                    <span>chatGPTの回答じゃ満足できない！？コンテキスト（あなたの考えや背景知識を含む文脈）を理解させる</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>非エンジニアでも簡単にできる！バイブコーディング入門</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>AIとの連携による効率的な仕事環境の構築</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 上級編 */}
            <Card className="border-4 border-green-500 hover:shadow-2xl transition-shadow bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="text-xl px-6 py-2 bg-green-600 text-white font-black">上級編</Badge>
                  <span className="text-sm text-muted-foreground font-semibold">Coming Soon</span>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-black mt-4">
                  非エンジニアでもできるAIアプリ開発<br />業務プロセス最適化
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
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
                    <span>API/MCPを活用したツール連携と自動化</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>AIエージェントと自動化ワークフロー構築</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>業務プロセスのAI最適化と企業全体への導入戦略</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
