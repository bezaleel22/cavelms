# Cavelms

CaveLMS - Adullam Theological School Monorepo is a software repository that contains multiple projects related to an e-learning platform. The repository includes a web application project, a services project, and a website project, all written using different programming languages and frameworks. The web app project is built using TypeScript and SvelteKit, while the services project is written in Golang, and the website project is again built using TypeScript and SvelteKit. These different projects work together to create a comprehensive e-learning platform for Adullam Theological School.

## Running the Development server

First, clone the repository 
```bash
git clone https://github.com/onos9/cavelms.git
```

Navigate to the project directory
```bash
cd cavelms
```

Navigate to the project directory
```bash
docker compose up -d
```

Start the webapp navigate to the webapp directory run the followin commanf
```bash
npm install
```

The next step is to set up the database using Prisma.
```bash
npx prisma db push
npx prisma db seed
```

Start the dev server
```bash
npm start
```

Goto http://localhost:8080/

