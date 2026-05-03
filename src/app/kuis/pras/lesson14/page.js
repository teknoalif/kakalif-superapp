 
'use client'
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy, Brain, ArrowLeft, Star
} from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "1/2 + 0,5 × 2 = ...",
    options: ["1,5", "2,0", "1,0", "2,5"],
    correctAnswer: "1,5",
    explanation: "Kerjakan perkalian dulu: 0,5 × 2 = 1. Kemudian 0,5 + 1 = 1,5."
  },
  {
    id: 2,
    question: "(3/4 - 0,25) + 1 1/2 = ...",
    options: ["1,0", "1,5", "2,0", "2,5"],
    correctAnswer: "2,0",
    explanation: "Di dalam kurung: (0,75 - 0,25) = 0,5. Lalu 0,5 + 1,5 = 2,0."
  },
  {
    id: 3,
    question: "0,8 ÷ 2 + 1/5 = ...",
    options: ["0,4", "0,6", "0,5", "0,8"],
    correctAnswer: "0,6",
    explanation: "Pembagian dulu: 0,8 ÷ 2 = 0,4. Lalu 0,4 + 0,2 (dari 1/5) = 0,6."
  },
  {
    id: 4,
    question: "2 1/4 × (0,5 + 0,5) = ...",
    options: ["2,0", "2,5", "2,25", "4,5"],
    correctAnswer: "2,25",
    explanation: "Kurung dulu: (0,5 + 0,5) = 1. Lalu 2,25 × 1 = 2,25."
  },
  {
    id: 5,
    question: "0,75 - 1/4 ÷ 0,5 = ...",
    options: ["1,0", "0,25", "0,5", "0,75"],
    correctAnswer: "0,25",
    explanation: "Pembagian dulu: (0,25 ÷ 0,5) = 0,5. Lalu 0,75 - 0,5 = 0,25."
  },
  {
    id: 6,
    question: "1,2 + 3/5 × 10 = ...",
    options: ["7,2", "6,2", "12,0", "4,2"],
    correctAnswer: "7,2",
    explanation: "Perkalian dulu: (0,6 × 10) = 6. Lalu 1,2 + 6 = 7,2."
  },
  {
    id: 7,
    question: "(1 1/2 + 0,5) ÷ 2 = ...",
    options: ["0,5", "1,5", "1,0", "2,0"],
    correctAnswer: "1,0",
    explanation: "Kurung dulu: (1,5 + 0,5) = 2. Lalu 2 ÷ 2 = 1."
  },
  {
    id: 8,
    question: "5 × 0,2 - 1/2 = ...",
    options: ["0,5", "1,0", "0,2", "0,8"],
    correctAnswer: "0,5",
    explanation: "Perkalian dulu: 5 × 0,2 = 1. Lalu 1 - 0,5 = 0,5."
  },
  {
    id: 9,
    question: "0,6 ÷ (1/5 + 0,1) = ...",
    options: ["1,0", "2,0", "3,0", "1,5"],
    correctAnswer: "2,0",
    explanation: "Kurung dulu: (0,2 + 0,1) = 0,3. Lalu 0,6 ÷ 0,3 = 2."
  },
  {
    id: 10,
    question: "2,5 + 3/4 × 4 - 1 1/2 = ...",
    options: ["3,0", "4,0", "5,0", "2,5"],
    correctAnswer: "4,0",
    explanation: "Perkalian dulu: 0,75 × 4 = 3. Hasil: 2,5 + 3 - 1,5 = 4."
  }
];

export default function KuisPrasL14() {
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
  const btnPrimary = { width: '100%', padding: '16px', borderRadius: '20px', border: 'none', backgroundColor: '#0ea5e9', color: 'white', fontWeight: 900, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' };

  if (gameState === 'start') {
    return (
      <div style={{ backgroundColor: '#F0F9FF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ ...cardStyle, maxWidth: '450px' }}>
          <div style={{ backgroundColor: '#E0F2FE', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
            <Brain color="#0ea5e9" size={35} />
          </div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 950, color: '#1e293b', marginBottom: '8px', textTransform: 'uppercase', fontStyle: 'italic' }}>PRAS (4 SD)</h1>
          <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', marginBottom: '30px' }}>Lesson 14: Pecahan & Desimal</p>
          <div style={{ backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '22px', textAlign: 'left', marginBottom: '30px', border: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0ea5e9', marginBottom: '8px' }}>CATATAN KAK ALIF:</p>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', lineHeight: 1.5 }}>Ingat urutan PEMDAS! Kerjakan yang di dalam kurung, lalu kali/bagi, baru tambah/kurang.</p>
          </div>
          <button onClick={handleStart} style={btnPrimary}>MULAI KUIS <ChevronRight size={18} /></button>
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
          <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px', color: '#1e293b' }}>HASIL BELAJAR PRAS</h2>
          <div style={{ backgroundColor: '#0ea5e9', padding: '30px', borderRadius: '30px', color: 'white', marginBottom: '30px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 950 }}>{finalPercent}%</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1px' }}>SKOR AKHIR</div>
          </div>
          <p style={{ fontWeight: 800, color: '#64748b', marginBottom: '30px' }}>Benar {score} dari {questions.length} Soal</p>
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
          <span style={{ fontWeight: 900, color: '#0ea5e9', fontSize: '0.75rem' }}>SOAL {currentIndex + 1} / {questions.length}</span>
          <div style={{ width: '100px', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#0ea5e9', transition: '0.3s' }}></div>
          </div>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e293b', marginBottom: '35px', lineHeight: 1.5 }}>
            Berapakah hasil dari: <br/>
            <span style={{ fontSize: '2rem', color: '#0ea5e9', display: 'block', marginTop: '15px' }}>{currentQ.question}</span>
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
                  {isLocked && isCorrect && <CheckCircle2 size={18} color="#10b981" />}
                  {isLocked && isSelected && !isCorrect && <XCircle size={18} color="#ef4444" />}
                </button>
              );
            })}
          </div>

          {isLocked && (
            <div style={{ backgroundColor: '#F0F9FF', padding: '20px', borderRadius: '22px', border: '1px solid #bae6fd', marginBottom: '30px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0369a1', marginBottom: '5px' }}>PENJELASAN:</p>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0c4a6e', lineHeight: 1.5 }}>{currentQ.explanation}</p>
            </div>
          )}

          <button onClick={handleNext} disabled={!isLocked} style={{ ...btnPrimary, backgroundColor: isLocked ? '#0ea5e9' : '#cbd5e1' }}>
            {currentIndex === questions.length - 1 ? 'LIHAT HASIL' : 'BERIKUTNYA'} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
