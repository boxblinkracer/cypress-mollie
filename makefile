.PHONY: help
.DEFAULT_GOAL := help


help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# ---------------------------------------------------------------------------------------------

install: ## Installs all dependencies
	npm install 

# ---------------------------------------------------------------------------------------------

# ---------------------------------------------------------------------------------------------

eslint: ## Starts the ESLinter
	./node_modules/.bin/eslint --config ./.eslintrc.json ./src

prettier: ## Starts Prettier
	./node_modules/.bin/prettier --check "src/**/*.js"

# ---------------------------------------------------------------------------------------------

pr: ## Prepares a pull request
	./node_modules/.bin/prettier --write "src/**/*.js"
	make eslint -B