'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="flex items-center justify-center">
          <span className="font-bold text-xl">SimplePage</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      
      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to SimplePage
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A clean and simple starting point for your next project. Customize this template to build something amazing.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#features">Get Started</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex justify-center">
                    <img 
                      src="/images/simple-design-icon.png" 
                      alt="Simple Design" 
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                  <CardTitle>Simple Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Clean and minimal interface that focuses on what matters most.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center">
                    <img 
                      src="/videos/customization-icon-animated.gif" 
                      alt="Easy to Customize" 
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                  <CardTitle>Easy to Customize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Built with flexibility in mind. Make it your own with minimal effort.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center">
                    <img 
                      src="/images/responsive-icon.png" 
                      alt="Responsive Design" 
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                  <CardTitle>Responsive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Looks great on any device, from mobile phones to desktop computers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About SimplePage
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  SimplePage is designed to be a minimal starting point for your web projects. 
                  We believe in simplicity and clean design that allows your content to shine.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Built with modern web technologies, SimplePage provides a solid foundation 
                  that you can build upon to create amazing digital experiences.
                </p>
                <Button asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="/images/about-section-image.jpg" 
                  alt="About SimplePage" 
                  className="rounded-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get In Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Have questions or want to learn more? Reach out to us.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <a href="mailto:hello@example.com">Email Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} SimplePage. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}





