cd "${0%/*}"
npm run generate
npm run push-static
npm run push-lodash
npm run push-dev
read -p -End-