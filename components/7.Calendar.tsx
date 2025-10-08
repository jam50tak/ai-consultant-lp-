export default function Calendar() {
  return (
    <section id="calendar" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Google Form */}
          <div className="w-full flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd0oLz8AJEou439aWLzjmmbLmfFTiTJKJyQ_oDNhAa6eh2xAA/viewform?embedded=true"
              width="640"
              height="880"
              style={{ border: 0 }}
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
