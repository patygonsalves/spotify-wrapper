language: node_js
node_js:
  - "7"
cache:
  directories:
    "node_modules"

before_script:
  - npm run build:all
after_success:
  - npm run coveralls
