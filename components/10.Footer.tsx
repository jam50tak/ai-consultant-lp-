export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://takayuki.shinmoto.info/about-%E7%9C%9F%E6%9C%AC%E5%B4%87%E4%B9%8B/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              運営者情報
            </a>
            <a
              href="https://takayuki.shinmoto.info/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              お問い合わせ
            </a>
            <a
              href="https://takayuki.shinmoto.info/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              プライバシーポリシー
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; 2025 AIコンサルタント養成講座. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
