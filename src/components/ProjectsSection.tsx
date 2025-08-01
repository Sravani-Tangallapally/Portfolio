import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Brain, ShoppingCart, Shield, Code, Database, Smartphone, CropIcon, Leaf, ShoppingBag, Flower2Icon, MoveIcon } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      
  "title": "Alzheimer's Disease Detection using Deep Learning",
  "description": "AI-driven Alzheimer’s diagnosis tool using a custom CNN model. The system analyzes brain MRI scans to classify dementia stages, provides confidence scores, doctor-style recommendations, and generates downloadable reports—all through a privacy-compliant Streamlit interface.",
  "techStack": [
    "TensorFlow",
    "Keras",
    "OpenCV",
    "Pillow",
    "NumPy",
    "Pandas",
    "Custom CNN",
    "Streamlit",
      ],
      github: "https://github.com/Sravani-Tangallapally/AD-detection-using-DL",
      icon: Brain,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "E-Commerce Web Application Using MERN Stack",
      description:
        "Developed a Full-stack online shopping platform with Product Listing, User Authentication, and Inventory Management & Cart Features. Built responsive interfaces with React, implemented RESTAPIs & managed data handling with MongoDB.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Postman", "REST APIs"],
      github: "https://github.com/Sravani-Tangallapally/E-com-web-app-using-MERN.git",
      icon: ShoppingCart,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Smart Crop Selector Using Machine Learning",
      description:
        "A location and soil-based crop recommendation system using machine learning algorithms. Helps farmers choose the most suitable crop by analyzing parameters like soil type, temperature, and rainfall. Built with Python, Pandas, and Scikit-learn",
      techStack: ["React","typescript", "pandas","scikit-learn", "Tailwind CSS", ],
      github: "https://github.com/Sravani-Tangallapally/Smart-Crop-Selector-Using-Machine-Learning.git",
      icon: Leaf,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Stylino - An all in One Shopping Website",
      description:
        "Stylino is a sleek and responsive e-commerce platform that brings together the latest trends and global brands in one place. From fashion and footwear to beauty products and home décor, Stylino offers a seamless and intuitive shopping experience for everyone..",
      techStack: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
      github: "https://github.com/Sravani-Tangallapally/Stylino-customised-e-comm-website.git",
      icon: ShoppingBag,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "ML Based - Movie Recommendation System",
      description:
        "Machine learning–based movie recommendation system using content-based and collaborative filtering. Uses NumPy, pandas, and scikit-learn for efficient data handling and recommendation logic. Trained on the MovieLens dataset sourced from Kaggle for generating personalized suggestions.",
      techStack: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/Sravani-Tangallapally/MOVIE-RECOMMENDATION.git",
      icon: Smartphone,
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "ML Based - Iris Classification Project",
      description:
        "Supervised learning model for Iris flower classification using TensorFlow, scikit-learn, NumPy, and pandas. Trained on the Iris dataset with features like sepal and petal dimensions. Accurately classifies flowers into three species - Setosa, Versicolor, and Virginica using standard ML algorithms.",
      techStack: ["Python", "Scikit-learn", "Matplotlib", "Pandas", "Seaborn", "NumPy"],
      github: "https://github.com/Sravani-Tangallapally/IRIS-CLASSIFICATION.git",
      icon: Flower2Icon,
      gradient: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Featured Projects</h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white text-black hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 border-0 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-gray-700 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
