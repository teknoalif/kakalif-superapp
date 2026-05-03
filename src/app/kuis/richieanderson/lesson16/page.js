'use client'
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy, Calculator, ArrowLeft, Brain
} from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "Sebuah segitiga siku-siku memiliki sisi tegak 6 cm dan 8 cm. Berapakah panjang sisi miringnya?",
    options: ["10 cm", "12 cm", "14 cm", "15 cm"],
    correctAnswer: "10 cm",
    explanation: "Gunakan rumus Pythagoras: c² = a² + b². Jadi, c² = 6² + 8² = 36 + 64 = 100. Akar dari 100 adalah 10."
  },
  {
    id: 2,
    question: "Hasil dari 3(x + 2) - 2x adalah...",
    options: ["x + 6", "x + 2", "5x + 6", "x - 6"],
    correctAnswer: "x + 6",
    explanation: "Distribusikan dulu: 3x + 6 - 2x. Kemudian kumpulkan suku sejenis: (3x - 2x) + 6 = x + 6."
  },
  {
    id: 3,
    question: "Jika 2x + 5 = 13, maka nilai x adalah...",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
    explanation: "Pindahkan angka 5: 2x = 13 - 5 = 8. Maka x = 8 / 2 = 4."
  },
  {
    id: 4,
    question: "Manakah yang merupakan Triple Pythagoras?",
    options: ["3, 4, 5", "5, 10, 12", "7, 24, 26", "8, 15, 18"],
    correctAnswer: "3, 4, 5",
    explanation: "Triple Pythagoras memenuhi a² + b² = c². Untuk 3, 4, 5: 3² + 4² = 9 + 16 = 25 (yaitu 5²)."
  },
  {
    id: 5,
    question: "Luas lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)",
    options: ["154 cm²", "44 cm²", "144 cm²", "77 cm²"],
    correctAnswer: "154 cm²",
    explanation: "Rumus Luas = π × r². Jadi, 22/7 × 7 × 7 = 22 × 7 = 154."
  }
];

export default function KuisRichieAndersonL16() {
  const [gameState, setGameState] = useState('start'); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleStart = () => {
    setGameState('quiz');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsLocked(false);
  };

  const handleAnswer = (option) => {
    if (isLocked) return;
    setSelectedAnswer(option);
    setIsLocked(true);
    if (option === questions[currentIndex].correctAnswer) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsLocked(false);
    } else {
      setGameState('result');
    }
  };

  // UI STYLES
  const cardStyle = { backgroundColor: 'white', borderRadius: '35px', padding: '35px 25px', boxShadow: '0 15px 35px rgba(14, 165, 233, 0.1)', border: '1px solid #f1f5f9', textAlign: 'center' };
  const btnPrimary = { width: '100%', padding: '16px', borderRadius: '20px', border: 'none', backgroundColor: '#1e293b', color: 'white', fontWeight: 900, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' };

  if (gameState === 'start') {
    return (
      <div style={{ backgroundColor: '#F0F9FF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ ...cardStyle, maxWidth: '450px' }}>
          <div style={{ backgroundColor: '#1e293b', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
            <Calculator color="white" size={35} />
          </div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 950, color: '#1e293b', marginBottom: '8px', textTransform: 'uppercase', fontStyle: 'italic' }}>Richie & Anderson</h1>
          <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', marginBottom: '30px' }}>Lesson 16: Materi 8 SMP</p>
          <div style={{ backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '22px', textAlign: 'left', marginBottom: '30px', border: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0ea5e9', marginBottom: '8px' }}>Pesan Kak Alif:</p>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', lineHeight: 1.5 }}>Teliti dalam menghitung aljabar dan ingat rumus Pythagoras ya! Jangan buru-buru klik jawaban.</p>
          </div>
          <button onClick={handleStart} style={btnPrimary}>MULAI LATIHAN <ChevronRight size={18} /></button>
          <Link href="/kuis" style={{ display: 'block', marginTop: '20px', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800, textDecoration: 'none' }}>Kembali ke Bank Soal</Link>
        </div>
      </div>
    );
  }

  if (gameState === 'result') {
    const finalPercent = (score / questions.length) * 100;
    return (
      <div style={{ backgroundColor: '#F0F9FF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ ...cardStyle, maxWidth: '450px' }}>
          <Trophy size={60} color="#F59E0B" style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px', color: '#1e293b' }}>PROGRESS RICHIE & ANDERSON</h2>
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '30px', color: 'white', marginBottom: '30px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 950 }}>{finalPercent}%</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1px' }}>TOTAL SKOR</div>
          </div>
          <button onClick={handleStart} style={btnPrimary}><RotateCcw size={18} /> COBA LAGI</button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div style={{ backgroundColor: '#F0F9FF', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 900, color: '#1e293b', fontSize: '0.75rem' }}>SOAL {currentIndex + 1} / {questions.length}</span>
          <div style={{ width: '100px', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#1e293b', transition: '0.3s' }}></div>
          </div>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e293b', marginBottom: '35px', lineHeight: 1.5, textAlign: 'left' }}>
            {currentQ.question}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '35px' }}>
            {currentQ.options.map((opt, i) => {
              const isCorrect = opt === currentQ.correctAnswer;
              const isSelected = selectedAnswer === opt;
              let bgColor = '#F8FAFC';
              let borderColor = '#E2E8F0';
              if (isLocked) {
                if (isCorrect) { bgColor = '#DCFCE7'; borderColor = '#22C55E'; }
                else if (isSelected) { bgColor = '#FEE2E2'; borderColor = '#EF4444'; }
              }
              return (
                <button 
                  key={i} 
                  onClick={() => handleAnswer(opt)} 
                  disabled={isLocked}
                  style={{ padding: '18px', borderRadius: '20px', border: `2px solid ${borderColor}`, backgroundColor: bgColor, fontWeight: 800, color: '#475569', textAlign: 'left', cursor: isLocked ? 'default' : 'pointer', display: 'flex', justifyContent: 'space-between' }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {isLocked && (
            <div style={{ backgroundColor: '#F0F9FF', padding: '20px', borderRadius: '22px', border: '1px solid #bae6fd', marginBottom: '30px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0c4a6e', lineHeight: 1.5 }}>
                <span style={{ fontWeight: 900, color: '#0369a1' }}>Penjelasan: </span> 
                {currentQ.explanation}
              </p>
            </div>
          )}

          <button onClick={handleNext} disabled={!isLocked} style={{ ...btnPrimary, backgroundColor: isLocked ? '#1e293b' : '#cbd5e1' }}>
            {currentIndex === questions.length - 1 ? 'HASIL AKHIR' : 'SOAL BERIKUTNYA'} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
} 
