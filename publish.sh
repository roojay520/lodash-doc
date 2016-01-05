cd "${0%/*}"
npm run generate
npm run push-dev
npm run push-lodash
npm run push-static
read -p -End-