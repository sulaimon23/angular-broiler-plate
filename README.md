## All components on the sidebar should use a lazy loading module then imported in the pages module.

## No Component should be imported in the pages declaration.

## all imports to the pages module should be a module

.
├── src/ # Source code directory
│ ├── app/ # Application code
│ │ ├── auth/ # All authentication components
│ │ ├── guards/ # All app Guards
│ │ ├── interceptors/ # All app interceptors
│ │ ├── pages/ # Page components
│ │ │ └── ... # All Other pages under this directly should be only what appears on the sidebar
│ │ ├── assets/ # Static assets (images, fonts, etc.)
│ │ └── app.module.ts # Main application module
│ ├── environments/ # Environment-specific configuration files
│ ├── index.html # HTML entry point
│ └── main.ts # Application bootstrap file
├── .gitignore # Git ignore configuration file
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── angular.json # Angular CLI configuration
├── README.md # Project documentation (you are here)
└── LICENSE # Project license file
