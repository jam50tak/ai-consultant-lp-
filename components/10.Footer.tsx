export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              運営者情報
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              お問い合わせ
            </a>
            <a
              href="#privacy"
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
