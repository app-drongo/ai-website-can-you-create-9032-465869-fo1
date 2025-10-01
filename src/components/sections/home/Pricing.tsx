'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState('monthly');

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };

  const handleProfessionalPlan = () => {
    router.push('/');
  };

  const handleEnterprisePlan = () => {
    router.push('/');
  };

  const handleScheduleDemo = () => {
    router.push('/');
  };

  const handleBillingToggle = (cycle: string) => {
    setBillingCycle(cycle);
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for startups and small teams getting started',
      price: billingCycle === 'monthly' ? '$19' : '$15',
      originalPrice: billingCycle === 'monthly' ? null : '$19',
      period: '/month',
      badge: null,
      features: [
        'Up to 5 team members',
        'Advanced analytics dashboard',
        '24/7 email support',
        '50GB cloud storage',
        'API integrations',
        'Mobile app access',
        'Basic automation tools',
      ],
      cta: 'Start Building Today',
      popular: false,
      handler: handleStarterPlan,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and enterprise teams',
      price: billingCycle === 'monthly' ? '$49' : '$39',
      originalPrice: billingCycle === 'monthly' ? null : '$49',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited team members',
        'Advanced AI-powered insights',
        'Priority phone & chat support',
        '500GB cloud storage',
        'Custom integrations',
        'White-label solutions',
        'Advanced workflow automation',
        'Real-time collaboration tools',
        'Custom reporting & exports',
      ],
      cta: 'Accelerate Your Growth',
      popular: true,
      handler: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'Tailored solutions for large-scale operations',
      price: 'Custom',
      originalPrice: null,
      period: '',
      badge: 'Contact Sales',
      features: [
        'Everything in Professional',
        'Unlimited cloud storage',
        'Dedicated success manager',
        'Custom security protocols',
        'Advanced compliance tools',
        'SLA guarantees (99.99% uptime)',
        'On-premise deployment options',
        'Custom training & onboarding',
        '24/7 premium support hotline',
      ],
      cta: 'Discuss Your Needs',
      popular: false,
      handler: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium border-primary/20">
            <Zap className="size-4 mr-2 text-primary" />
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Scale Your Business with
            <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Intelligent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Choose the perfect plan to transform your workflow. Enterprise-grade security,
            AI-powered automation, and unlimited scalability included.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-card border border-border rounded-xl shadow-sm">
            <button
              onClick={() => handleBillingToggle('monthly')}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => handleBillingToggle('annual')}
              className={cn(
                'px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual Billing
              <Badge
                variant="secondary"
                className="text-xs bg-primary/10 text-primary border-primary/20"
              >
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-xl group',
                plan.popular
                  ? 'border-primary/30 shadow-xl shadow-primary/5 scale-105 bg-gradient-to-br from-card to-primary/5'
                  : 'border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-2 shadow-lg">
                    <Star className="size-4 mr-2 fill-current" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Glow Effect */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />
              )}

              <CardHeader className="relative text-center pb-8 pt-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit border-primary/30 text-primary"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl font-bold mb-3">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-8 leading-relaxed">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-2 text-lg">{plan.period}</span>
                  )}
                </div>

                {plan.originalPrice && billingCycle === 'annual' && (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                      {plan.originalPrice}/month
                    </span>
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                      25% off
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="relative space-y-8">
                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="size-4 text-primary font-bold" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.handler}
                  className={cn(
                    'w-full text-base py-6 font-semibold transition-all duration-200 group-hover:shadow-lg',
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20'
                      : 'hover:bg-primary hover:text-primary-foreground'
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-5 mr-2" />}
                  {plan.cta}
                  <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our enterprise team specializes in creating tailored SaaS solutions for complex
                organizational needs. Get dedicated support, custom integrations, and scalable
                architecture designed for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleScheduleDemo}
                  size="lg"
                  className="px-8 py-6 text-base font-semibold"
                >
                  Schedule Strategy Call
                  <ArrowRight className="size-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-semibold border-primary/30 hover:bg-primary/5"
                >
                  View Enterprise Features
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
