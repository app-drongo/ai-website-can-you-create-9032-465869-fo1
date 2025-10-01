'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Volume2, VolumeX, Check, Star, Zap, Shield, Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Scroll to pricing section
  };

  const handleSecondaryAction = () => {
    router.push('/'); // Show demo modal
  };

  const handleBadgeAction = () => {
    router.push('/'); // Navigate to announcement
  };
  // ACTION_PLACEHOLDER_END

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [isVideoLoaded]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex mb-6">
              <Badge
                variant="secondary"
                className="px-6 py-2 text-sm font-medium cursor-pointer hover:bg-secondary/80 transition-all duration-300 border border-primary/20"
                onClick={handleBadgeAction}
              >
                <Zap className="mr-2 size-4 text-primary" />
                AI-Powered SaaS Platform
                <ArrowRight className="ml-2 size-3" />
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
              Scale Your Business
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Intelligently
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Elegant SaaS delivers enterprise-grade automation with AI-driven insights. Transform
              your workflow and accelerate growth with our next-generation platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="group text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                onClick={scrollToPricing}
              >
                Start Free Trial
                <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-lg px-10 py-7 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 border-2"
                onClick={handleSecondaryAction}
              >
                <Play className="mr-3 size-6 transition-transform group-hover:scale-110" />
                Watch Platform Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="size-6 text-primary" />
                <span className="text-muted-foreground font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Rocket className="size-6 text-primary" />
                <span className="text-muted-foreground font-medium">99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="size-6 text-primary" />
                <span className="text-muted-foreground font-medium">5-Star Rated Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Star className="mr-2 size-4 text-primary" />
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Choose Your Growth Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scale seamlessly with our flexible pricing. Start free and upgrade as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for small teams getting started
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button
                  className="w-full py-6 text-lg"
                  variant="outline"
                  onClick={() => router.push('/')}
                >
                  Start Free Trial
                </Button>
              </div>
              <ul className="space-y-4">
                {[
                  'Up to 5 team members',
                  '10GB cloud storage',
                  'Basic analytics dashboard',
                  'Email support',
                  'Mobile app access',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="size-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Plan - Featured */}
            <div className="relative bg-gradient-to-b from-primary/5 to-accent/5 border-2 border-primary rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-6 py-2">Most Popular</Badge>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced features for growing businesses
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">$79</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button className="w-full py-6 text-lg shadow-lg" onClick={() => router.push('/')}>
                  Start Free Trial
                </Button>
              </div>
              <ul className="space-y-4">
                {[
                  'Up to 25 team members',
                  '100GB cloud storage',
                  'Advanced AI analytics',
                  'Priority support',
                  'API access & integrations',
                  'Custom workflows',
                  'Advanced security features',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="size-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">
                  Complete solution for large organizations
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">$199</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button
                  className="w-full py-6 text-lg"
                  variant="outline"
                  onClick={() => router.push('/')}
                >
                  Contact Sales
                </Button>
              </div>
              <ul className="space-y-4">
                {[
                  'Unlimited team members',
                  '1TB cloud storage',
                  'Enterprise AI suite',
                  '24/7 dedicated support',
                  'White-label solutions',
                  'Advanced compliance',
                  'Custom integrations',
                  'Dedicated account manager',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="size-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="size-4 mr-2 text-primary" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center">
                <Check className="size-4 mr-2 text-primary" />
                GDPR Ready
              </div>
              <div className="flex items-center">
                <Star className="size-4 mr-2 text-primary" />
                99.99% Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
