"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Zap, CheckCircle, X, Lightbulb, Star, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LessonPage({ params }: { params: { id: string } }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [hearts, setHearts] = useState(5)
  const [xp, setXp] = useState(0)
  const [streak, setStreak] = useState(7)
  const [isCorrect, setIsCorrect] = useState(false)

  const lesson = {
    id: params.id,
    title: "What is Stellar?",
    description: "Learn the basics of the Stellar blockchain network",
    totalQuestions: 5,
    xpReward: 50,
  }

  const questions = [
    {
      id: 1,
      question: "What is Stellar primarily designed for?",
      options: [
        "Gaming and NFTs",
        "Cross-border payments and remittances",
        "Smart contracts only",
        "Mining cryptocurrency",
      ],
      correct: 1,
      explanation:
        "Stellar is specifically designed to facilitate fast, low-cost cross-border payments and remittances, making it easier to send money globally.",
    },
    {
      id: 2,
      question: "What is the native cryptocurrency of Stellar?",
      options: ["Bitcoin (BTC)", "Ethereum (ETH)", "Lumens (XLM)", "Stellar Coin (STC)"],
      correct: 2,
      explanation:
        "Lumens (XLM) is the native cryptocurrency of the Stellar network, used to pay transaction fees and prevent spam.",
    },
    {
      id: 3,
      question: "How long do Stellar transactions typically take?",
      options: ["10-60 minutes", "2-5 seconds", "1-2 hours", "24 hours"],
      correct: 1,
      explanation:
        "Stellar transactions are incredibly fast, typically confirming in just 2-5 seconds, making it ideal for real-time payments.",
    },
    {
      id: 4,
      question: "What makes Stellar environmentally friendly?",
      options: [
        "It uses proof-of-work mining",
        "It uses a consensus protocol that doesn't require mining",
        "It only processes transactions at night",
        "It plants trees for every transaction",
      ],
      correct: 1,
      explanation:
        "Stellar uses the Stellar Consensus Protocol (SCP) which doesn't require energy-intensive mining, making it much more environmentally friendly than proof-of-work blockchains.",
    },
    {
      id: 5,
      question: "What can you build on Stellar?",
      options: [
        "Only payment applications",
        "Payment apps, remittance services, and asset tokenization",
        "Only games",
        "Only social media platforms",
      ],
      correct: 1,
      explanation:
        "Stellar supports a wide range of applications including payment systems, remittance services, asset tokenization, and decentralized exchanges.",
    },
  ]

  const currentQ = questions[currentQuestion]

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const correct = selectedAnswer === currentQ.correct
    setIsCorrect(correct)
    setShowResult(true)

    if (correct) {
      setXp((prev) => prev + 10)
    } else {
      setHearts((prev) => Math.max(0, prev - 1))
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Lesson complete
      window.location.href = "/dashboard"
    }
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9F9] to-[#EECB01]/10">
      {/* Header */}
      <header className="bg-white border-b border-[#EECB01]/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-[#8E7CE5]">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-gray-300" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#333333] font-sans">{lesson.title}</h1>
                <p className="text-sm text-gray-600">{lesson.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Hearts */}
              <div className="flex items-center space-x-1 bg-red-50 px-3 py-1 rounded-full">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span className="text-sm font-semibold text-red-600">{hearts}</span>
              </div>

              {/* XP */}
              <div className="flex items-center space-x-1 bg-[#EECB01]/20 px-3 py-1 rounded-full">
                <Zap className="w-4 h-4 text-[#EECB01]" />
                <span className="text-sm font-semibold text-[#333333]">+{xp}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-semibold text-[#8E7CE5]">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Question Card */}
          <Card className="border-2 border-[#EECB01]/20 shadow-xl mb-6">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-[#EECB01] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-[#333333]" />
              </div>
              <CardTitle className="text-xl text-[#333333] font-sans">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                    selectedAnswer === index
                      ? showResult
                        ? index === currentQ.correct
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-red-500 bg-red-50 text-red-700"
                        : "border-[#EECB01] bg-[#EECB01]/10"
                      : showResult && index === currentQ.correct
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 hover:border-[#8E7CE5] hover:bg-[#8E7CE5]/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showResult && (
                      <div>
                        {index === currentQ.correct ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : selectedAnswer === index ? (
                          <X className="w-5 h-5 text-red-500" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Result Card */}
          {showResult && (
            <Card
              className={`border-2 mb-6 ${isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold text-green-700">Correct! 🎉</h3>
                        <p className="text-sm text-green-600">+10 XP earned</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <X className="w-8 h-8 text-red-500" />
                      <div>
                        <h3 className="text-lg font-bold text-red-700">Not quite right</h3>
                        <p className="text-sm text-red-600">-1 heart lost</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#333333] mb-2">Explanation:</h4>
                  <p className="text-gray-700">{currentQ.explanation}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            {!showResult ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="bg-[#EECB01] hover:bg-[#EECB01]/90 text-[#333333] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="bg-[#8E7CE5] hover:bg-[#8E7CE5]/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Complete Lesson
                    <Trophy className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>

          {/* Lesson Complete Preview */}
          {showResult && currentQuestion === questions.length - 1 && (
            <Card className="border-2 border-[#EECB01] bg-gradient-to-r from-[#EECB01]/10 to-[#8E7CE5]/10 mt-6">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-[#EECB01] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#333333] mb-2 font-sans">Lesson Complete! 🎉</h3>
                <p className="text-gray-600 mb-4">
                  Great job! You've earned {lesson.xpReward} XP and unlocked the next lesson.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <Badge className="bg-[#EECB01] text-[#333333]">
                    <Star className="w-3 h-3 mr-1" />+{lesson.xpReward} XP
                  </Badge>
                  <Badge className="bg-[#8E7CE5] text-white">
                    <Trophy className="w-3 h-3 mr-1" />
                    Lesson Badge
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
