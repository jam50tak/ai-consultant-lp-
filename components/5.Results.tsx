import { Card, CardContent } from '@/components/ui/card';

export default function Results() {
  const results = [
    {
      title: '脱・AI音痴',
      description: 'ご自身の業務・用途に合わせてAIツールを使い分けられるようになり、AIを効果的に使いこなせるようになります。',
    },
   {
      title: 'AI活用提案の土台作り',
      description: 'AI活用支援の第一歩を踏み出せるようになります。AIを使ったことがない企業に対して、自信を持って提案できるようになります',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">初級編で得られる成果</h2>
            <p className="text-lg text-muted-foreground">
              本講座を受講することで、以下の成果を実感できます
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <Card
                key={index}
                className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-primary"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl md:text-2xl leading-tight">{result.title}</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">{result.description}</p>
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
