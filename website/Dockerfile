#############################################
# App Builder: From developrnt to production
#############################################
FROM node:lts-alpine as builder
WORKDIR /app

# BUILD WEBSITE
COPY ./website/package*.json ./website/
RUN cd website && npm install

COPY ./website ./website
RUN cd website && npm run build
RUN cd website && npm prune --production

############################################
# Website: Production image website
############################################
FROM node:lts-alpine as website

WORKDIR /app


COPY --from=builder /app/website/node_modules ./node_modules/
COPY --from=builder /app/website/package.json ./package.json
COPY --from=builder /app/website/build ./build/

ENV NODE_ENV=production
EXPOSE 3000
ENTRYPOINT ["node", "build"]