"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Zap,
  Shield,
  Trophy,
  Users,
  Play,
  Sparkles,
  Target,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuresIndex, setFeaturesIndex] = useState(0);

  const features = [
    {
      icon: Zap,
      title: "Gamified Learning",
      description:
        "Earn XP, maintain streaks, and unlock achievements as you progress through interactive lessons.",
      color: "border-[#EECB01]/20 hover:border-[#EECB01]",
      bgColor: "bg-[#EECB01]/20",
      iconColor: "text-[#EECB01]",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description:
        "Practice with risk-free simulators and learn security best practices through hands-on experience.",
      color: "border-[#8E7CE5]/20 hover:border-[#8E7CE5]",
      bgColor: "bg-[#8E7CE5]/20",
      iconColor: "text-[#8E7CE5]",
    },
    {
      icon: Target,
      title: "Practical Skills",
      description:
        "Learn through real-world scenarios and transaction simulations that prepare you for actual use.",
      color: "border-green-400/20 hover:border-green-400",
      bgColor: "bg-green-400/20",
      iconColor: "text-green-600",
    },
    {
      icon: BookOpen,
      title: "Structured Paths",
      description:
        "Follow carefully designed learning paths from beginner to advanced levels with clear progression.",
      color: "border-blue-400/20 hover:border-blue-400",
      bgColor: "bg-blue-400/20",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Join a vibrant community of learners, compete on leaderboards, and get help when you need it.",
      color: "border-purple-400/20 hover:border-purple-400",
      bgColor: "bg-purple-400/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Trophy,
      title: "Achievements",
      description:
        "Unlock badges, certificates, and special rewards as you master different aspects of Web3 and Stellar.",
      color: "border-orange-400/20 hover:border-orange-400",
      bgColor: "bg-orange-400/20",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EECB01]/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Mobile Logo */}
              <div className="block sm:hidden">
                <Image
                  src="/stellar-symbol.png"
                  alt="Stellar"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              {/* Desktop Logo */}
              <div className="hidden sm:flex items-center space-x-3">
                <Image
                  src="/stellar-logo.svg"
                  alt="Stellar"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
                <div className="w-px h-6 bg-gray-300" />
                <h1 className="text-xl font-bold text-[#333333] font-sans">
                  Onboarding Hub
                </h1>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#features"
                className="text-[#333333] hover:text-[#8E7CE5] transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-[#333333] hover:text-[#8E7CE5] transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="#pricing"
                className="text-[#333333] hover:text-[#8E7CE5] transition-colors"
              >
                Pricing
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-[#333333] hover:text-[#8E7CE5]"
              >
                Sign In
              </Button>
              <Link href="/auth">
                <Button className="bg-[#EECB01] hover:bg-[#EECB01]/90 text-[#333333] font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="relative w-full">
                  <h1 className="text-5xl md:text-7xl font-bold text-[#333333] leading-tight font-sans text-center">
                    Master Web3 & Stellar fast with us
                    <br />
                    <img src="/money-fast.avif" alt="Stellar Symbol" className="inline-block h-[500px] mx-auto mt-4" />
                  </h1> 
                </div>
                <p className="text-xl text-gray-600 leading-relaxed text-center">
                  Learn blockchain, DeFi, and Stellar through interactive
                  lessons, practical simulations, and engaging challenges. No
                  intimidation, just fun learning that sticks.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth">
                  <Button
                    size="lg"
                    className="bg-[#EECB01] hover:bg-[#EECB01]/90 text-[#333333] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Your Journey
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#8E7CE5] text-[#8E7CE5] hover:bg-[#8E7CE5]/10 px-8 py-4 rounded-full w-full sm:w-auto bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#333333]">10K+</div>
                  <div className="text-sm text-gray-600">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#333333]">95%</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#333333]">4.9★</div>
                  <div className="text-sm text-gray-600">User Rating</div>
                </div>
              </div>
            </div>

           {/*  <div className="relative">
              <div className="relative rounded-3xl p-8 backdrop-blur-md">
                <div className="space-y-4">
                  <Card className="border-2 border-[#EECB01] shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#EECB01] rounded-full flex items-center justify-center">
                            <Star className="w-5 h-5 text-[#333333]" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#333333]">
                              Daily Streak
                            </div>
                            <div className="text-sm text-gray-600">
                              7 days strong!
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-[#EECB01]">
                          🔥
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#8E7CE5] shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#8E7CE5] rounded-full flex items-center justify-center">
                            <Trophy className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#333333]">
                              Level Progress
                            </div>
                            <div className="text-sm text-gray-600">
                              Stellar Novice
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#8E7CE5]">
                            1,250 XP
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-400 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#333333]">
                              Security Master
                            </div>
                            <div className="text-sm text-gray-600">
                              Badge Earned!
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl">🛡️</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 font-sans">
              Why Choose Stellar Hub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the most engaging way to learn Web3 and Stellar through
              gamification, practical simulations, and community support.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-2 ${feature.color} transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${featuresIndex * 100}%)` }}
                >
                  {features.map((feature, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card
                        className={`border-2 ${feature.color} transition-all duration-300 hover:shadow-lg`}
                      >
                        <CardContent className="p-8 text-center">
                          <div
                            className={`w-24 h-24 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                          >
                            <feature.icon
                              className={`w-12 h-12 ${feature.iconColor}`}
                            />
                          </div>
                          <h3 className="text-2xl font-bold text-[#333333] mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex items-center justify-between mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setFeaturesIndex(Math.max(0, featuresIndex - 1))
                  }
                  disabled={featuresIndex === 0}
                  className="w-12 h-12 p-0 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setFeaturesIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === featuresIndex ? "bg-[#EECB01]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setFeaturesIndex(
                      Math.min(features.length - 1, featuresIndex + 1)
                    )
                  }
                  disabled={featuresIndex === features.length - 1}
                  className="w-12 h-12 p-0 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 bg-gradient-to-br from-[#F9F9F9] to-[#8E7CE5]/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 font-sans">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and begin your Web3 learning journey with
              our proven step-by-step approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EECB01] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#333333]">
                1
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Sign Up Securely
              </h3>
              <p className="text-gray-600">
                Create your account with passkey authentication - no complex
                passwords or seed phrases to remember.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8E7CE5] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Choose Your Path
              </h3>
              <p className="text-gray-600">
                Select from beginner, intermediate, or advanced learning paths
                tailored to your experience level.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Learn & Earn
              </h3>
              <p className="text-gray-600">
                Complete lessons, earn XP, maintain streaks, and unlock
                achievements as you master Web3 concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Background Illustration */}
            <div className="relative lg:order-1">
              <Image
                src="/hero-brush.avif"
                alt=""
                width={600}
                height={400}
                className="w-full h-auto pointer-events-none"
              />
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sans">
                Ready to Master Web3?
              </h2>
              <p className="text-lg text-white/90 mb-4 max-w-2xl lg:max-w-none">
                Skip the complexity. Skip the confusion. Skip the overwhelm.
              </p>
              <p className="text-xl text-[#EECB01] font-semibold mb-8 max-w-2xl lg:max-w-none">
                Learn Web3 the easy way - through games, simulations, and
                step-by-step guidance that actually makes sense.
              </p>
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-[#EECB01] text-[#333333] hover:bg-[#EECB01]/90 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Now - It's Free!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/stellar-logo.svg"
                  alt="Stellar"
                  width={120}
                  height={30}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                The gamified way to learn Web3 and Stellar blockchain
                technology.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Beginner Path
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Advanced Topics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Simulations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Stellar Onboarding Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
