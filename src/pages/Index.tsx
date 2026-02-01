import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Zap, Shield, BarChart3, Menu } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/50 backdrop-blur-xl bg-background/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-xl">Ember</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
            <Button className="glow-effect hidden sm:inline-flex">Get Started</Button>
            
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl border-border">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <Button variant="ghost" className="justify-start">Sign In</Button>
                    <Button className="glow-effect">Get Started</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Now in Public Beta</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Build faster with
            <span className="text-gradient block">intelligent tools</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            Ember accelerates your workflow with powerful automation, smart analytics, 
            and seamless integrations. Focus on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="glow-effect text-base px-8 py-6">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero visual */}
        <div className="mt-20 relative animate-scale-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-[16/9] rounded-2xl bg-gradient-surface border border-border overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-accent-foreground/60" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-24 rounded-lg bg-secondary/50 border border-border/50 animate-float" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Powerful features designed to supercharge your productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Lightning Fast"
            description="Optimized performance that keeps up with your pace. No lag, no waiting."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Enterprise Security"
            description="Bank-grade encryption and compliance built in from day one."
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Smart Analytics"
            description="Actionable insights that help you make better decisions faster."
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-50 pointer-events-none" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 relative">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 relative">
            Join thousands of teams already using Ember to build better, faster.
          </p>
          <Button size="lg" className="glow-effect text-base px-8 py-6 relative">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-medium">Ember</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Ember. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="glass-card rounded-2xl p-8 hover-lift group">
    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default Index;
