

- npm i --save prettier eslint-plugin-prettier eslint-config-prettier 
- npm i tailwindcss postcss autoprefixer
# When installed tailwindcss
=> npx tailwindcss init -p
=> npm i prettier-plugin-tailwindcss

# Fix warning:
npm run prettier:fix
npm run lint:fix

#Install redux toolkit

npm install @reduxjs/toolkit
npm install react-redux

onClick={handleDelete(post.id)}//KHong duoc viet kieu nay: ham nay chung ta dang goi 1 function => khi goi xong thi no se return 

onClick={() => handleDelete(post.id)}// Ham nay goi 1 ham callback

## Khi lam viec voi thu muc moi thi khoi tai package.json
npm init -y


## Fake api server json
npm i json-server

## Chu y:
Khong duoc xu ly bat dong bo trong reducer, reducer chi xu ly dong bo thoi

-- Khi ma muon ngan chan api goi nhieu laan thi dung:
abort cua axios de ngan chan 

- Khi ma dung asyncThunk thi phai dung o extraReducer

? Tai sao khong dung o reducer 
=> Boi vi dung o reducer thi no se render ra action , ma co dung action de lam gi dau
