

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

