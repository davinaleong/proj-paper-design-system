import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  CheckCircle, 
  Settings, 
  Truck,
  Package,
  Home,
  FileText,
  Download,
  Upload,
  Save
} from 'lucide-react';
import { Stepper } from '../../components/navigation/Stepper';
import { Button } from '../../components/forms/Button';
import { Paper } from '../../components/core/Paper';
import { Typography } from '../../components/core/Typography';
import { Section } from '../../components/layout/Section';
import type { StepData } from '../../components/navigation/Stepper/types';

export const StepperShowcase: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [orderCurrentStep, setOrderCurrentStep] = useState(1);
  const [checkoutCurrentStep, setCheckoutCurrentStep] = useState(2);

  // Basic numeric stepper
  const basicSteps: StepData[] = [
    {
      id: 1,
      title: "Account Setup",
      description: "Create your account and verify email",
      status: "completed"
    },
    {
      id: 2,
      title: "Personal Information",
      description: "Enter your personal details",
      status: "completed"
    },
    {
      id: 3,
      title: "Payment Method",
      description: "Add a payment method",
      status: "current"
    },
    {
      id: 4,
      title: "Confirmation",
      description: "Review and confirm your setup",
      status: "pending"
    }
  ];

  // Alpha format stepper
  const alphaSteps: StepData[] = [
    {
      id: 'a',
      title: "Requirements",
      description: "Define project requirements",
      status: "completed"
    },
    {
      id: 'b',
      title: "Design",
      description: "Create design mockups",
      status: "completed"
    },
    {
      id: 'c',
      title: "Development",
      description: "Build the application",
      status: "current"
    },
    {
      id: 'd',
      title: "Testing",
      description: "Quality assurance testing",
      status: "pending"
    },
    {
      id: 'e',
      title: "Deployment",
      description: "Deploy to production",
      status: "pending"
    }
  ];

  // Roman numeral stepper
  const romanSteps: StepData[] = [
    {
      id: 'i',
      title: "Planning",
      description: "Strategic planning phase",
      status: "completed"
    },
    {
      id: 'ii',
      title: "Research",
      description: "Market research and analysis",
      status: "completed"
    },
    {
      id: 'iii',
      title: "Execution",
      description: "Execute the project plan",
      status: "current"
    },
    {
      id: 'iv',
      title: "Review",
      description: "Review and evaluate results",
      status: "pending"
    }
  ];

  // Custom icon stepper
  const customSteps: StepData[] = [
    {
      id: 'user',
      title: "User Details",
      description: "Enter your information",
      status: "completed",
      icon: User
    },
    {
      id: 'payment',
      title: "Payment",
      description: "Payment information",
      status: "completed",
      icon: CreditCard
    },
    {
      id: 'settings',
      title: "Settings",
      description: "Configure preferences",
      status: "current",
      icon: Settings
    },
    {
      id: 'complete',
      title: "Complete",
      description: "Finish setup",
      status: "pending",
      icon: CheckCircle
    }
  ];

  // Order tracking stepper
  const orderSteps: StepData[] = [
    {
      id: 'ordered',
      title: "Order Placed",
      description: "Your order has been received",
      status: orderCurrentStep >= 0 ? "completed" : "pending",
      icon: FileText
    },
    {
      id: 'processing',
      title: "Processing",
      description: "Order is being prepared",
      status: orderCurrentStep >= 1 ? "completed" : orderCurrentStep === 0 ? "current" : "pending",
      icon: Package
    },
    {
      id: 'shipped',
      title: "Shipped",
      description: "Package is on its way",
      status: orderCurrentStep >= 2 ? "completed" : orderCurrentStep === 1 ? "current" : "pending",
      icon: Truck
    },
    {
      id: 'delivered',
      title: "Delivered",
      description: "Package has been delivered",
      status: orderCurrentStep >= 3 ? "completed" : orderCurrentStep === 2 ? "current" : "pending",
      icon: Home
    }
  ];

  // Checkout process with content
  const checkoutSteps: StepData[] = [
    {
      id: 'cart',
      title: "Cart Review",
      description: "Review your items",
      status: checkoutCurrentStep >= 0 ? "completed" : "pending",
      content: (
        <div className="space-y-4">
          <Typography variant="h6">Review Your Cart</Typography>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Product 1</span>
              <span>$29.99</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2</span>
              <span>$49.99</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$79.98</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'shipping',
      title: "Shipping",
      description: "Enter shipping details",
      status: checkoutCurrentStep >= 1 ? "completed" : checkoutCurrentStep === 0 ? "current" : "pending",
      content: (
        <div className="space-y-4">
          <Typography variant="h6">Shipping Information</Typography>
          <div className="grid grid-cols-2 gap-4">
            <input className="p-2 border rounded" placeholder="First Name" />
            <input className="p-2 border rounded" placeholder="Last Name" />
            <input className="p-2 border rounded col-span-2" placeholder="Address" />
            <input className="p-2 border rounded" placeholder="City" />
            <input className="p-2 border rounded" placeholder="ZIP Code" />
          </div>
        </div>
      )
    },
    {
      id: 'payment',
      title: "Payment",
      description: "Payment details",
      status: checkoutCurrentStep >= 2 ? "completed" : checkoutCurrentStep === 1 ? "current" : "pending",
      content: (
        <div className="space-y-4">
          <Typography variant="h6">Payment Information</Typography>
          <div className="space-y-3">
            <input className="p-2 border rounded w-full" placeholder="Card Number" />
            <div className="grid grid-cols-2 gap-4">
              <input className="p-2 border rounded" placeholder="MM/YY" />
              <input className="p-2 border rounded" placeholder="CVV" />
            </div>
            <input className="p-2 border rounded w-full" placeholder="Cardholder Name" />
          </div>
        </div>
      )
    },
    {
      id: 'confirm',
      title: "Confirmation",
      description: "Review and confirm",
      status: checkoutCurrentStep >= 3 ? "completed" : checkoutCurrentStep === 2 ? "current" : "pending",
      content: (
        <div className="space-y-4">
          <Typography variant="h6">Order Confirmation</Typography>
          <div className="bg-green-50 p-4 rounded-lg">
            <Typography variant="body" className="text-green-800">
              ✓ Your order has been successfully placed!
            </Typography>
            <Typography variant="caption" className="text-green-600 block mt-2">
              Order #12345 - You will receive a confirmation email shortly.
            </Typography>
          </div>
        </div>
      )
    }
  ];

  // File upload process stepper
  const uploadSteps: StepData[] = [
    {
      id: 'select',
      title: "Select Files",
      status: "completed",
      icon: FileText
    },
    {
      id: 'upload',
      title: "Upload",
      status: "current",
      icon: Upload
    },
    {
      id: 'process',
      title: "Process",
      status: "pending",
      icon: Settings
    },
    {
      id: 'download',
      title: "Download",
      status: "pending",
      icon: Download
    },
    {
      id: 'save',
      title: "Save",
      status: "pending",
      icon: Save
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleOrderStepClick = (stepIndex: number) => {
    setOrderCurrentStep(stepIndex);
  };

  const handleCheckoutStepClick = (stepIndex: number) => {
    setCheckoutCurrentStep(stepIndex);
  };

  return (
    <Section className="py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Typography variant="h2" className="text-stone-900">
            Stepper Component
          </Typography>
          <Typography variant="body" className="text-stone-600 max-w-2xl mx-auto">
            A flexible stepper component for multi-step processes with support for different formats,
            variants, and interactive features.
          </Typography>
        </div>

        {/* Basic Formats */}
        <div className="space-y-8">
          <Typography variant="h3" className="text-stone-800">
            Step Formats
          </Typography>
          
          <div className="grid gap-8">
            {/* Numeric Format */}
            <Paper className="p-6">
              <Typography variant="h5" className="mb-4 text-stone-800">
                Numeric Format
              </Typography>
              <Stepper
                steps={basicSteps}
                currentStep={currentStep}
                format="numeric"
                variant="solid"
                color="primary"
                onStepClick={handleStepClick}
                clickableSteps
              />
              <div className="mt-4 flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <Button 
                  size="sm" 
                  variant="solid"
                  onClick={() => setCurrentStep(Math.min(basicSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === basicSteps.length - 1}
                >
                  Next
                </Button>
              </div>
            </Paper>

            {/* Alpha Format */}
            <Paper className="p-6">
              <Typography variant="h5" className="mb-4 text-stone-800">
                Alpha Format
              </Typography>
              <Stepper
                steps={alphaSteps}
                currentStep={2}
                format="alpha"
                variant="outline"
                color="teal"
                size="lg"
              />
            </Paper>

            {/* Roman Format */}
            <Paper className="p-6">
              <Typography variant="h5" className="mb-4 text-stone-800">
                Roman Numeral Format
              </Typography>
              <Stepper
                steps={romanSteps}
                currentStep={2}
                format="roman"
                variant="ghost"
                color="purple"
                size="md"
              />
            </Paper>

            {/* Custom Icons */}
            <Paper className="p-6">
              <Typography variant="h5" className="mb-4 text-stone-800">
                Custom Icons Format
              </Typography>
              <Stepper
                steps={customSteps}
                currentStep={2}
                format="custom"
                variant="solid"
                color="emerald"
                size="lg"
              />
            </Paper>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-8">
          <Typography variant="h3" className="text-stone-800">
            Variants
          </Typography>
          
          <div className="grid gap-6">
            {/* Solid Variant */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Solid Variant
              </Typography>
              <Stepper
                steps={uploadSteps}
                currentStep={1}
                format="custom"
                variant="solid"
                color="blue"
                size="md"
              />
            </Paper>

            {/* Outline Variant */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Outline Variant
              </Typography>
              <Stepper
                steps={uploadSteps}
                currentStep={1}
                format="custom"
                variant="outline"
                color="orange"
                size="md"
              />
            </Paper>

            {/* Ghost Variant */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Ghost Variant
              </Typography>
              <Stepper
                steps={uploadSteps}
                currentStep={1}
                format="custom"
                variant="ghost"
                color="rose"
                size="md"
              />
            </Paper>
          </div>
        </div>

        {/* Orientations */}
        <div className="space-y-8">
          <Typography variant="h3" className="text-stone-800">
            Orientations
          </Typography>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Horizontal */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Horizontal (Default)
              </Typography>
              <Stepper
                steps={basicSteps.slice(0, 3)}
                currentStep={1}
                format="numeric"
                variant="solid"
                color="indigo"
                orientation="horizontal"
                showDescriptions={false}
                size="sm"
              />
            </Paper>

            {/* Vertical */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Vertical
              </Typography>
              <Stepper
                steps={basicSteps.slice(0, 3)}
                currentStep={1}
                format="numeric"
                variant="solid"
                color="violet"
                orientation="vertical"
                size="sm"
              />
            </Paper>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-8">
          <Typography variant="h3" className="text-stone-800">
            Interactive Examples
          </Typography>
          
          {/* Order Tracking */}
          <Paper className="p-6">
            <Typography variant="h5" className="mb-4 text-stone-800">
              Order Tracking
            </Typography>
            <Stepper
              steps={orderSteps}
              currentStep={orderCurrentStep}
              format="custom"
              variant="solid"
              color="green"
              clickableSteps
              onStepClick={handleOrderStepClick}
              size="lg"
            />
            <div className="mt-6 flex gap-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setOrderCurrentStep(Math.max(0, orderCurrentStep - 1))}
                disabled={orderCurrentStep === 0}
              >
                Previous Status
              </Button>
              <Button 
                size="sm" 
                variant="solid" 
                color="green"
                onClick={() => setOrderCurrentStep(Math.min(orderSteps.length - 1, orderCurrentStep + 1))}
                disabled={orderCurrentStep === orderSteps.length - 1}
              >
                Next Status
              </Button>
            </div>
          </Paper>

          {/* Checkout Process with Content */}
          <Paper className="p-6">
            <Typography variant="h5" className="mb-4 text-stone-800">
              Checkout Process
            </Typography>
            <Stepper
              steps={checkoutSteps}
              currentStep={checkoutCurrentStep}
              format="numeric"
              variant="solid"
              color="primary"
              clickableSteps
              onStepClick={handleCheckoutStepClick}
              showContent
              size="md"
            />
            <div className="mt-6 flex gap-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setCheckoutCurrentStep(Math.max(0, checkoutCurrentStep - 1))}
                disabled={checkoutCurrentStep === 0}
              >
                Back
              </Button>
              <Button 
                size="sm" 
                variant="solid"
                onClick={() => setCheckoutCurrentStep(Math.min(checkoutSteps.length - 1, checkoutCurrentStep + 1))}
                disabled={checkoutCurrentStep === checkoutSteps.length - 1}
              >
                {checkoutCurrentStep === checkoutSteps.length - 1 ? 'Complete' : 'Continue'}
              </Button>
            </div>
          </Paper>
        </div>

        {/* Size Variations */}
        <div className="space-y-8">
          <Typography variant="h3" className="text-stone-800">
            Sizes
          </Typography>
          
          <div className="space-y-6">
            {/* Small */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Small Size
              </Typography>
              <Stepper
                steps={basicSteps.slice(0, 3)}
                currentStep={1}
                format="numeric"
                variant="solid"
                color="cyan"
                size="sm"
                showDescriptions={false}
              />
            </Paper>

            {/* Medium */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Medium Size (Default)
              </Typography>
              <Stepper
                steps={basicSteps.slice(0, 3)}
                currentStep={1}
                format="numeric"
                variant="solid"
                color="cyan"
                size="md"
                showDescriptions={false}
              />
            </Paper>

            {/* Large */}
            <Paper className="p-6">
              <Typography variant="h6" className="mb-4 text-stone-800">
                Large Size
              </Typography>
              <Stepper
                steps={basicSteps.slice(0, 3)}
                currentStep={1}
                format="numeric"
                variant="solid"
                color="cyan"
                size="lg"
                showDescriptions={false}
              />
            </Paper>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-8">
          <Typography variant="h3" className="text-stone-800">
            Color Variants
          </Typography>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Primary', color: 'primary' as const },
              { name: 'Success', color: 'success' as const },
              { name: 'Danger', color: 'danger' as const },
              { name: 'Warning', color: 'warning' as const },
              { name: 'Info', color: 'info' as const },
              { name: 'Paper', color: 'paper' as const },
            ].map((item) => (
              <Paper key={item.color} className="p-4">
                <Typography variant="h6" className="mb-3 text-stone-800">
                  {item.name}
                </Typography>
                <Stepper
                  steps={basicSteps.slice(0, 3)}
                  currentStep={1}
                  format="numeric"
                  variant="solid"
                  color={item.color}
                  size="sm"
                  showDescriptions={false}
                />
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StepperShowcase;