## Cavelms

Cavelms is an E-learning platform. it includes a web application, services, and a website. The web app written in TypeScript and SvelteKit, while the services are written in Golang, and the website project is again built using TypeScript and SvelteKit.

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

To start the webapp, navigate to the webapp directory run the following command
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

