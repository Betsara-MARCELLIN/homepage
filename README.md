
## Project structure

```
src/
├── app/
│   ├── core/                          # Singleton services, guards, interceptors
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── interceptors/
│   │   │   └── http-error.interceptor.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   └── api.service.ts
│   │   └── models/
│   │       └── user.model.ts
│   │
│   ├── shared/                        # Reusable components, pipes, directives
│   │   ├── components/
│   │   │   ├── button/
│   │   │   │   ├── button.component.ts
│   │   │   │   ├── button.component.html
│   │   │   │   └── button.component.scss
│   │   │   └── modal/
│   │   ├── pipes/
│   │   │   └── truncate.pipe.ts
│   │   ├── directives/
│   │   │   └── highlight.directive.ts
│   │   └── utils/
│   │       └── helpers.ts
│   │
│   ├── features/                      # Feature modules (lazy-loaded)
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.ts
│   │   │   ├── dashboard.routes.ts
│   │   │   ├── components/
│   │   │   │   └── dashboard-card/
│   │   │   └── services/
│   │   │       └── dashboard.service.ts
│   │   │
│   │   ├── users/
│   │   │   ├── users.component.ts
│   │   │   ├── users.routes.ts
│   │   │   ├── components/
│   │   │   │   ├── user-list/
│   │   │   │   └── user-detail/
│   │   │   └── services/
│   │   │       └── users.service.ts
│   │   │
│   │   └── products/
│   │       └── ...
│   │
│   ├── layout/                        # Layout components
│   │   ├── header/
│   │   ├── footer/
│   │   ├── sidebar/
│   │   └── main-layout/
│   │
│   ├── app.component.ts               # Root component
│   ├── app.config.ts                  # App configuration
│   └── app.routes.ts                  # Root routes
│
├── assets/                            # Static files
│   ├── images/
│   ├── fonts/
│   └── i18n/                          # Translation files
│
├── environments/                      # Environment configs
│   ├── environment.ts
│   └── environment.prod.ts
│
└── styles/                            # Global styles
    ├── _variables.scss
    ├── _mixins.scss
    └── styles.scss
```