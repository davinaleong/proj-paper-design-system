import { useState } from "react"
import {
  Heart,
  Download,
  Edit,
  Trash2,
  Search,
  Mail,
  Lock,
  Settings,
} from "lucide-react"
import { Paper, Typography, Container } from "../components/core"
import {
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Slider,
  FileUpload,
  FormField,
  FormGroup,
} from "../components/forms"

export function FormControlsShowcase() {
  const [checkboxStates, setCheckboxStates] = useState({
    basic: false,
    checked: true,
    indeterminate: false,
    disabled: false,
    error: false,
  })

  const [switchStates, setSwitchStates] = useState({
    basic: false,
    checked: true,
    disabled: false,
  })

  const [sliderValue, setSliderValue] = useState(50)

  return (
    <Container maxWidth="xl" className="space-y-12 py-12">
      {/* Phase 3.1 Form Controls Showcase */}
      <section id="form-controls">
        <Paper>
          <div className="mb-8">
            <Typography variant="h2" className="mb-4">
              Form Controls
            </Typography>
            <Typography variant="body" className="text-stone-600">
              Comprehensive form components with Paper Design System styling,
              including buttons, inputs, selections, and advanced controls.
            </Typography>
          </div>

          {/* Button Components */}
          <div className="space-y-8">
            <div>
              <Typography variant="h3" className="mb-6">
                Buttons
              </Typography>

              <div className="space-y-6">
                {/* Basic Buttons */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Button Variants
                  </Typography>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="solid">Solid Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="link">Link Button</Button>
                  </div>
                </div>

                {/* Button Sizes */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Button Sizes
                  </Typography>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                {/* Button States */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Button States
                  </Typography>
                  <div className="flex flex-wrap gap-4">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                  </div>
                </div>

                {/* Icon Buttons */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Icon Buttons
                  </Typography>
                  <div className="flex flex-wrap gap-4">
                    <IconButton icon={Heart} aria-label="Like" />
                    <IconButton
                      icon={Download}
                      variant="outline"
                      aria-label="Download"
                    />
                    <IconButton icon={Edit} variant="ghost" aria-label="Edit" />
                    <IconButton
                      icon={Trash2}
                      variant="solid"
                      color="danger"
                      aria-label="Delete"
                    />
                  </div>
                </div>

                {/* Buttons with Icons */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Buttons with Icons
                  </Typography>
                  <div className="flex flex-wrap gap-4">
                    <Button icon={Download} iconPosition="left">
                      Download
                    </Button>
                    <Button
                      icon={Settings}
                      iconPosition="right"
                      variant="outline"
                    >
                      Settings
                    </Button>
                    <Button icon={Search} iconPosition="left">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Components */}
            <div>
              <Typography variant="h3" className="mb-6">
                Text Inputs
              </Typography>

              <div className="space-y-6">
                {/* Basic Inputs */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Input Variants
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Default input" />
                    <Input placeholder="Outline input" variant="outline" />
                    <Input placeholder="Filled input" variant="filled" />
                    <Input
                      placeholder="Underlined input"
                      variant="underlined"
                    />
                  </div>
                </div>

                {/* Input States */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Input States
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Normal input" />
                    <Input placeholder="Disabled input" disabled />
                    <Input placeholder="Error input" error />
                    <Input
                      placeholder="Valid input"
                      helperText="This input is valid"
                    />
                  </div>
                </div>

                {/* Input with Icons */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Input with Icons
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Search..." leftIcon={Search} />
                    <Input placeholder="Email" leftIcon={Mail} />
                    <Input
                      placeholder="Password"
                      type="password"
                      leftIcon={Lock}
                    />
                    <Input placeholder="Settings" rightIcon={Settings} />
                  </div>
                </div>
              </div>
            </div>

            {/* Textarea Components */}
            <div>
              <Typography variant="h3" className="mb-6">
                Textarea
              </Typography>

              <div className="space-y-4">
                <Textarea placeholder="Default textarea" />
                <Textarea placeholder="Resizable textarea" resize="both" />
                <Textarea
                  placeholder="Fixed height textarea"
                  rows={6}
                  resize="none"
                />
              </div>
            </div>

            {/* Checkbox Showcase */}
            <div>
              <Typography variant="h3" className="mb-6">
                Checkboxes
              </Typography>

              <div className="space-y-6">
                {/* Basic Checkboxes */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Basic Checkboxes
                  </Typography>
                  <div className="space-y-3">
                    <Checkbox
                      checked={checkboxStates.basic}
                      onChange={(checked) =>
                        setCheckboxStates((prev) => ({
                          ...prev,
                          basic: checked,
                        }))
                      }
                    >
                      Basic checkbox
                    </Checkbox>
                    <Checkbox
                      checked={checkboxStates.checked}
                      onChange={(checked) =>
                        setCheckboxStates((prev) => ({
                          ...prev,
                          checked: checked,
                        }))
                      }
                    >
                      Pre-checked checkbox
                    </Checkbox>
                    <Checkbox disabled>Disabled checkbox</Checkbox>
                    <Checkbox checked disabled>
                      Disabled checked
                    </Checkbox>
                  </div>
                </div>

                {/* Checkbox Sizes */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Checkbox Sizes
                  </Typography>
                  <div className="space-y-3">
                    <Checkbox size="sm">Small checkbox</Checkbox>
                    <Checkbox size="md">Medium checkbox</Checkbox>
                    <Checkbox size="lg">Large checkbox</Checkbox>
                  </div>
                </div>

                {/* Checkbox States */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Checkbox States
                  </Typography>
                  <div className="space-y-3">
                    <Checkbox>Normal state</Checkbox>
                    <Checkbox error>Error state</Checkbox>
                    <Checkbox indeterminate>Indeterminate state</Checkbox>
                  </div>
                </div>
              </div>
            </div>

            {/* Radio Showcase */}
            <div>
              <Typography variant="h3" className="mb-6">
                Radio Buttons
              </Typography>

              <div className="space-y-6">
                {/* Basic Radio */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Basic Radio Buttons
                  </Typography>
                  <div className="space-y-3">
                    <Radio name="basic-demo" value="option1" defaultChecked>
                      Option 1
                    </Radio>
                    <Radio name="basic-demo" value="option2">
                      Option 2
                    </Radio>
                    <Radio name="basic-demo" value="option3">
                      Option 3
                    </Radio>
                    <Radio name="basic-demo" value="option4" disabled>
                      Disabled Option
                    </Radio>
                  </div>
                </div>

                {/* Radio Group */}
                <div>
                  <Typography variant="h4" className="mb-4">
                    Radio Group
                  </Typography>
                  <RadioGroup
                    name="group-demo"
                    options={[
                      { value: "small", label: "Small" },
                      { value: "medium", label: "Medium" },
                      { value: "large", label: "Large" },
                    ]}
                    defaultValue="medium"
                  />
                </div>
              </div>
            </div>

            {/* Select Showcase */}
            <div>
              <Typography variant="h3" className="mb-6">
                Select Dropdown
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  placeholder="Choose an option..."
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                />
                <Select
                  placeholder="Multi-select..."
                  multiple
                  options={[
                    { value: "red", label: "Red" },
                    { value: "green", label: "Green" },
                    { value: "blue", label: "Blue" },
                  ]}
                />
              </div>
            </div>

            {/* Switch Showcase */}
            <div>
              <Typography variant="h3" className="mb-6">
                Switches
              </Typography>

              <div className="space-y-4">
                <Switch
                  checked={switchStates.basic}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({ ...prev, basic: checked }))
                  }
                >
                  Basic switch
                </Switch>
                <Switch
                  checked={switchStates.checked}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({ ...prev, checked: checked }))
                  }
                >
                  Pre-enabled switch
                </Switch>
                <Switch disabled>Disabled switch</Switch>
                <Switch checked disabled>
                  Disabled checked switch
                </Switch>
              </div>
            </div>

            {/* Slider Showcase */}
            <div>
              <Typography variant="h3" className="mb-6">
                Sliders
              </Typography>

              <div className="space-y-6">
                <div>
                  <Typography variant="h4" className="mb-4">
                    Single Value Slider: {sliderValue}
                  </Typography>
                  <Slider
                    value={sliderValue}
                    onChange={(value) => setSliderValue(value as number)}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

                <div>
                  <Typography variant="h4" className="mb-4">
                    Disabled Slider
                  </Typography>
                  <Slider value={75} min={0} max={100} step={1} disabled />
                </div>
              </div>
            </div>

            {/* File Upload Showcase */}
            <div>
              <Typography variant="h3" className="mb-6">
                File Upload
              </Typography>

              <div className="space-y-4">
                <FileUpload
                  multiple
                  validation={{
                    allowedTypes: ["image/*"],
                    maxFiles: 3,
                    maxSize: 5 * 1024 * 1024, // 5MB
                  }}
                  onFilesSelected={(files) =>
                    console.log("Files selected:", files)
                  }
                />
              </div>
            </div>

            {/* Form Field Examples */}
            <div>
              <Typography variant="h3" className="mb-6">
                Form Fields
              </Typography>

              <div className="space-y-6">
                <FormField
                  label="Email Address"
                  description="We'll never share your email with anyone else."
                  required
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    leftIcon={Mail}
                  />
                </FormField>

                <FormField
                  label="Password"
                  error="Password must be at least 8 characters"
                  required
                >
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    leftIcon={Lock}
                    error
                  />
                </FormField>

                <FormGroup
                  title="Account Preferences"
                  description="Manage your account settings and preferences."
                >
                  <FormField label="Notifications">
                    <Switch>Email notifications</Switch>
                  </FormField>

                  <FormField label="Privacy">
                    <Checkbox>Make profile public</Checkbox>
                  </FormField>
                </FormGroup>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </Container>
  )
}
