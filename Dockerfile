# https://nodejs.org/ko/docs/guides/nodejs-docker-webapp/
# https://www.daleseo.com/docker-nodejs/
FROM node:12
WORKDIR /src/app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production
RUN npm install

# Docker 이미지 안에 앱의 소스코드를 넣기 위해 COPY 지시어를 사용
COPY . .

# 앱이 3000포트에 바인딩 되어 있으므로 
# EXPOSE 지시어를 사용해서 docker 데몬에 매핑
EXPOSE 3000
CMD [ "npm", "start" ]