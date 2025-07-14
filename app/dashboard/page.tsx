"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Trophy,
  Flame,
  Heart,
  Zap,
  BookOpen,
  Shield,
  Coins,
  Users,
  Play,
  Lock,
  CheckCircle,
  Target,
  TrendingUp,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
  const [hearts, setHearts] = useState(5)
  const [streak, setStreak] = useState(7)
  const [xp, setXp] = useState(1250)
  const [level, setLevel] = useState(3)

  const learningPaths = [
    {
      id: 1,
      title: "Stellar Basics",
      description: "Learn the fundamentals of Stellar blockchain",
      progress: 75,
      lessons: 12,
      completed: 9,
      difficulty: "Beginner",
      color: "bg-green-500",
      icon: BookOpen,
      unlocked: true,
    },
    {
      id: 2,
      title: "Wallet Security",
      description: "Master secure wallet management practices",
      progress: 45,
      lessons: 8,
      completed: 4,
      difficulty: "Intermediate",
      color: "bg-[#8E7CE5]",
      icon: Shield,
      unlocked: true,
    },
    {
      id: 3,
      title: "DeFi Fundamentals",
      description: "Explore decentralized finance concepts",
      progress: 20,
      lessons: 15,
      completed: 3,
      difficulty: "Intermediate",
      color: "bg-blue-500",
      icon: Coins,
      unlocked: true,
    },
    {
      id: 4,
      title: "Advanced Trading",
      description: "Professional trading strategies and tools",
      progress: 0,
      lessons: 20,
      completed: 0,
      difficulty: "Advanced",
      color: "bg-red-500",
      icon: TrendingUp,
      unlocked: false,
    },
  ]

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", earned: true, icon: "🎯" },
    { name: "Week Warrior", description: "Maintain a 7-day streak", earned: true, icon: "🔥" },
    { name: "Security Expert", description: "Master wallet security", earned: true, icon: "🛡️" },
    { name: "DeFi Explorer", description: "Complete DeFi basics", earned: false, icon: "💰" },
    { name: "Community Helper", description: "Help 10 other learners", earned: false, icon: "🤝" },
    { name: "Stellar Master", description: "Complete all paths", earned: false, icon: "⭐" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9F9] to-[#EECB01]/10">
      {/* Header */}
      <header className="bg-white border-b border-[#EECB01]/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Logo */}
              <div className="block sm:hidden">
                <Image src="/stellar-symbol.png" alt="Stellar" width={24} height={24} className="h-6 w-6" />
              </div>
              {/* Desktop Logo */}
              <div className="hidden sm:flex items-center space-x-4">
                <Image src="/stellar-logo.svg" alt="Stellar" width={100} height={25} className="h-6 w-auto" />
                <div className="w-px h-6 bg-gray-300" />
                <h1 className="text-lg font-bold text-[#333333] font-sans">Learning Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Hearts */}
              <div className="flex items-center space-x-1 bg-red-50 px-3 py-1 rounded-full">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span className="text-sm font-semibold text-red-600">{hearts}</span>
              </div>

              {/* Streak */}
              <div className="flex items-center space-x-1 bg-orange-50 px-3 py-1 rounded-full">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">{streak}</span>
              </div>

              {/* XP */}
              <div className="flex items-center space-x-1 bg-[#EECB01]/20 px-3 py-1 rounded-full">
                <Zap className="w-4 h-4 text-[#EECB01]" />
                <span className="text-sm font-semibold text-[#333333]">{xp} XP</span>
              </div>

              {/* Profile Link */}
              <Link href="/profile">
                {/* Mobile: Show only icon */}
                <Button variant="ghost" size="sm" className="text-[#8E7CE5] sm:hidden">
                  <User className="w-4 h-4" />
                </Button>
                {/* Desktop: Show text */}
                <Button variant="ghost" size="sm" className="text-[#8E7CE5] hidden sm:inline-flex">
                  Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-[#EECB01] to-[#8E7CE5] rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 font-sans">Welcome back, Stellar Explorer! 🚀</h2>
              <p className="text-white/90 mb-4">
                You're on a {streak}-day streak! Keep it up to unlock special rewards.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm text-white/80">Level</div>
                  <div className="text-xl font-bold">{level}</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm text-white/80">Total XP</div>
                  <div className="text-xl font-bold">{xp.toLocaleString()}</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm text-white/80">Rank</div>
                  <div className="text-xl font-bold">#42</div>
                </div>
              </div>
            </div>

            {/* Learning Paths */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#333333] font-sans">Learning Paths</h3>
                <Button variant="outline" className="border-[#8E7CE5] text-[#8E7CE5] bg-transparent">
                  View All
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {learningPaths.map((path) => (
                  <Card
                    key={path.id}
                    className={`border-2 ${path.unlocked ? "border-gray-200 hover:border-[#EECB01]" : "border-gray-100 opacity-60"} transition-all duration-300 hover:shadow-lg`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${path.color} rounded-full flex items-center justify-center`}>
                            <path.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-[#333333]">{path.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {path.difficulty}
                            </Badge>
                          </div>
                        </div>
                        {!path.unlocked && <Lock className="w-5 h-5 text-gray-400" />}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{path.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-[#333333]">
                            {path.completed}/{path.lessons} lessons
                          </span>
                        </div>
                        <Progress value={path.progress} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[#8E7CE5] font-medium">{path.progress}% complete</span>
                          {path.unlocked ? (
                            <Link href={`/learn/${path.id}`}>
                              <Button size="sm" className="bg-[#EECB01] hover:bg-[#EECB01]/90 text-[#333333]">
                                <Play className="w-4 h-4 mr-1" />
                                Continue
                              </Button>
                            </Link>
                          ) : (
                            <Button size="sm" disabled>
                              <Lock className="w-4 h-4 mr-1" />
                              Locked
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-2xl font-bold text-[#333333] mb-6 font-sans">Quick Actions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/simulator">
                  <Card className="border-2 border-[#8E7CE5]/20 hover:border-[#8E7CE5] transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Target className="w-8 h-8 text-[#8E7CE5] mx-auto mb-3" />
                      <h4 className="font-semibold text-[#333333] mb-2">Transaction Simulator</h4>
                      <p className="text-sm text-gray-600">Practice safe transactions</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/community">
                  <Card className="border-2 border-green-400/20 hover:border-green-400 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-[#333333] mb-2">Community</h4>
                      <p className="text-sm text-gray-600">Connect with learners</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/challenges">
                  <Card className="border-2 border-orange-400/20 hover:border-orange-400 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Trophy className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-[#333333] mb-2">Daily Challenge</h4>
                      <p className="text-sm text-gray-600">Earn bonus XP</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Level Progress */}
            <Card className="border-2 border-[#EECB01]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#333333] flex items-center">
                  <Star className="w-5 h-5 text-[#EECB01] mr-2" />
                  Level Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[#333333] mb-1">Level {level}</div>
                  <div className="text-sm text-gray-600">Stellar Novice</div>
                </div>
                <Progress value={65} className="h-3 mb-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{xp} XP</span>
                  <span>1,500 XP</span>
                </div>
                <p className="text-xs text-center text-gray-500 mt-2">250 XP to next level</p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-2 border-[#8E7CE5]/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#333333] flex items-center">
                  <Trophy className="w-5 h-5 text-[#8E7CE5] mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${achievement.earned ? "bg-green-50" : "bg-gray-50"}`}
                    >
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div
                          className={`font-medium text-sm ${achievement.earned ? "text-green-700" : "text-gray-600"}`}
                        >
                          {achievement.name}
                        </div>
                        <div className="text-xs text-gray-500">{achievement.description}</div>
                      </div>
                      {achievement.earned && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 text-[#8E7CE5] border-[#8E7CE5] bg-transparent">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="border-2 border-orange-400/20">
              <CardHeader>
                <CardTitle className="text-lg text-[#333333] flex items-center">
                  <Trophy className="w-5 h-5 text-orange-500 mr-2" />
                  Weekly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Alex Chen", xp: 2450, avatar: "🚀" },
                    { rank: 2, name: "Sarah Kim", xp: 2380, avatar: "⭐" },
                    { rank: 3, name: "Mike Johnson", xp: 2250, avatar: "🔥" },
                    { rank: 4, name: "You", xp: 1250, avatar: "🎯", isUser: true },
                  ].map((user, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${user.isUser ? "bg-[#EECB01]/20 border border-[#EECB01]" : "bg-gray-50"}`}
                    >
                      <div className="w-6 text-center font-bold text-sm text-gray-600">#{user.rank}</div>
                      <div className="text-xl">{user.avatar}</div>
                      <div className="flex-1">
                        <div className={`font-medium text-sm ${user.isUser ? "text-[#333333]" : "text-gray-700"}`}>
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-500">{user.xp} XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
