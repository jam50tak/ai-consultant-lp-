'use client';

import { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface BookingFormProps {
  selectedDate: Date;
  selectedTime: string;
}

export default function BookingForm({ selectedDate, selectedTime }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // ここで実際の予約処理を実行（API呼び出しなど）
    console.log('予約情報:', {
      ...formData,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
    });

    // 送信完了
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <Card className="border-primary">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary"
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
              <h3 className="text-2xl font-bold">申し込みが完了しました！</h3>
              <Badge variant="outline" className="text-base">
                {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月
                {selectedDate.getDate()}日 {selectedTime}
              </Badge>
            </div>
            <div className="bg-muted p-6 rounded-lg space-y-2 text-left">
              <p className="text-muted-foreground">
                ZoomのURLを記載したメールを<br />
                <strong className="text-foreground">{formData.email}</strong><br />
                宛にお送りしました。
              </p>
              <p className="text-sm text-muted-foreground">
                ※メールが届かない場合は、迷惑メールフォルダをご確認ください
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary">
      <CardHeader>
        <CardTitle className="text-center">申し込み情報入力</CardTitle>
        <div className="flex justify-center mt-4">
          <Badge className="text-base">
            {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月
            {selectedDate.getDate()}日 {selectedTime}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              お名前 <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="山田 太郎"
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              メールアドレス <span className="text-destructive">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              className="h-12"
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-16 text-xl bg-red-600 hover:bg-red-700 text-white shadow-2xl transform hover:scale-105 transition-all font-black border-4 border-red-700 animate-pulse">
            🚀 この日時で申し込む
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
